import { execFile as execFileCallback, spawn } from "node:child_process";
import { rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFile = promisify(execFileCallback);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clinicRoot = path.resolve(__dirname, "..");
const nextDevDir = path.join(clinicRoot, ".next-dev");
const nextBin = path.join(clinicRoot, "node_modules", "next", "dist", "bin", "next");
const targetPort = 3000;

async function removeNextCache() {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      await rm(nextDevDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
      console.log("Removed .next-dev cache before dev startup.");
      return;
    } catch (error) {
      if (attempt === 4) throw error;
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }

  console.log("Removed .next-dev cache before dev startup.");
}

async function getWindowsPidByPort(port) {
  const { stdout } = await execFile("netstat", ["-ano", "-p", "tcp"]);
  const lines = stdout.split(/\r?\n/);

  for (const line of lines) {
    if (!line.includes("LISTENING")) continue;
    const parts = line.trim().split(/\s+/);
    if (parts.length < 5) continue;
    const localAddress = parts[1];
    const pid = parts[4];

    if (localAddress.endsWith(`:${port}`)) {
      return Number(pid);
    }
  }

  return null;
}

async function getWindowsProcessInfo(pid) {
  try {
    const psCommand =
      '$p = Get-CimInstance Win32_Process -Filter "ProcessId = ' +
      pid +
      '"; if ($p) { "$($p.Name)" + [Environment]::NewLine + "$($p.CommandLine)" }';

    const { stdout } = await execFile("powershell", [
      "-NoProfile",
      "-Command",
      psCommand,
    ]);
    const [name = "", ...rest] = stdout.trim().split(/\r?\n/);
    return {
      name: name.trim(),
      commandLine: rest.join("\n").trim(),
    };
  } catch {
    return {
      name: "",
      commandLine: "",
    };
  }
}

async function stopStaleDevServerIfNeeded(port) {
  if (process.platform !== "win32") return;

  const pid = await getWindowsPidByPort(port);
  if (!pid) return;

  const processInfo = await getWindowsProcessInfo(pid);
  const normalizedRoot = clinicRoot.toLowerCase();
  const normalizedCommand = processInfo.commandLine.toLowerCase();
  const normalizedName = processInfo.name.toLowerCase();

  const looksLikeThisProject =
    normalizedCommand.includes(normalizedRoot) ||
    normalizedCommand.includes("next dev") ||
    normalizedCommand.includes("npm run dev") ||
    normalizedCommand.includes("next\\dist\\bin\\next") ||
    normalizedName === "node.exe";

  if (!looksLikeThisProject) {
    throw new Error(
      `Port ${port} is already in use by PID ${pid}. Stop that process or change the port before starting this project.`,
    );
  }

  await execFile("taskkill", ["/PID", String(pid), "/F"]);
  console.log(`Stopped stale dev server on port ${port} (PID ${pid}).`);
  await new Promise((resolve) => setTimeout(resolve, 500));
}

async function main() {
  await stopStaleDevServerIfNeeded(targetPort);
  await removeNextCache();

  const child = spawn(process.execPath, [nextBin, "dev", "--port", String(targetPort)], {
    cwd: clinicRoot,
    stdio: "inherit",
    env: { ...process.env, PORT: String(targetPort) },
  });

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }
    process.exit(code ?? 0);
  });
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
