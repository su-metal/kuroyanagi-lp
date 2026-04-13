<?php
declare(strict_types=1);

mb_language('Japanese');
mb_internal_encoding('UTF-8');

$recipient = 'web@kuroyanagi-clinic.jp';
$fromAddress = 'postmaster@kuroyanagi-clinic.jp';
$subject = '【みっかび東LP】お問い合わせを受け付けました';

function renderError(string $message): void
{
    http_response_code(400);
    ?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>送信エラー | みっかび東介護老人保健施設</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: "Noto Sans JP", sans-serif; }

        @media (min-width: 768px) {
            .tel-link-mobile-only {
                pointer-events: none;
                cursor: default;
            }
        }
    </style>
</head>
<body class="bg-[#f3f7fb] text-[#333]">
    <main class="min-h-screen flex items-center justify-center px-6 py-16">
        <div class="max-w-xl w-full bg-white rounded-[2rem] border border-[#00367f]/10 p-8 md:p-10 text-center shadow-sm">
            <p class="text-[#c1a173] font-bold tracking-[0.28em] mb-4">SEND ERROR</p>
            <h1 class="text-3xl md:text-4xl font-black text-[#00367f] mb-6">送信できませんでした</h1>
            <p class="text-[#333]/75 leading-loose mb-8"><?php echo htmlspecialchars($message, ENT_QUOTES, 'UTF-8'); ?></p>
            <div class="flex flex-col gap-4 items-center">
                <a href="./index.html#contact-form" class="inline-flex items-center justify-center rounded-full bg-[#00367f] px-8 py-4 text-white font-bold">フォームに戻る</a>
                <a href="tel:053-524-1000" class="tel-link-mobile-only text-[#00367f] font-bold">お急ぎの方は 053-524-1000 へお電話ください</a>
            </div>
        </div>
    </main>
</body>
</html>
<?php
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ./index.html');
    exit;
}

$name = trim((string)($_POST['name'] ?? ''));
$phone = trim((string)($_POST['phone'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$website = trim((string)($_POST['website'] ?? ''));

if ($website !== '') {
    header('Location: ./thanks.html');
    exit;
}

if ($name === '' || $phone === '' || $email === '') {
    renderError('必須項目が未入力です。お名前・電話番号・メールアドレスをご確認ください。');
}

$normalizePhone = static function (string $value): string {
    $value = mb_convert_kana($value, 'asKV', 'UTF-8');
    $digits = '';

    foreach (str_split($value) as $char) {
        if ($char >= '0' && $char <= '9') {
            $digits .= $char;
        }
    }

    return $digits;
};

$phoneDigits = $normalizePhone($phone);
if (strlen($phoneDigits) < 10 || strlen($phoneDigits) > 11) {
    renderError('電話番号は10桁または11桁で入力してください。');
}

$isValidEmail = static function (string $value): bool {
    if ($value === '' || strpos($value, ' ') !== false) {
        return false;
    }

    if (substr_count($value, '@') !== 1) {
        return false;
    }

    [$localPart, $domainPart] = explode('@', $value, 2);

    if ($localPart === '' || $domainPart === '') {
        return false;
    }

    if (strpos($domainPart, '.') === false) {
        return false;
    }

    if (substr($domainPart, 0, 1) === '.' || substr($domainPart, -1) === '.') {
        return false;
    }

    return true;
};

if (!$isValidEmail($email)) {
    renderError('メールアドレスの形式が正しくありません。');
}

if ($recipient === 'change-this@example.com') {
    renderError('contact.php の送信先メールアドレスが未設定です。');
}

$clean = static function (string $value): string {
    return str_replace(["\r", "\n"], ' ', trim($value));
};

$mailBody = implode("\n", [
    'LPからお問い合わせがありました。',
    '',
    'お名前: ' . $clean($name),
    '電話番号: ' . $clean($phone),
    'メールアドレス: ' . $clean($email),
    'お問い合わせ内容:',
    $message !== '' ? $message : '（未入力）',
    '',
    '送信日時: ' . date('Y-m-d H:i:s'),
    '送信元IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'),
]);

$mailEncoding = 'ISO-2022-JP-MS';
$encodedFromName = mb_encode_mimeheader('みっかび東介護老人保健施設', $mailEncoding, 'B', "\r\n");
$encodedBody = mb_convert_encoding($mailBody, $mailEncoding, 'UTF-8');

$headers = [
    'From: ' . $encodedFromName . ' <' . $fromAddress . '>',
    'Reply-To: ' . $clean($email),
    'Content-Type: text/plain; charset=' . $mailEncoding,
    'Content-Transfer-Encoding: 7bit',
];

$sent = mb_send_mail(
    $recipient,
    $subject,
    $encodedBody,
    implode("\r\n", $headers),
    '-f' . $fromAddress
);

if (!$sent) {
    renderError('メール送信に失敗しました。時間をおいて再度お試しいただくか、お電話にてお問い合わせください。');
}

header('Location: ./thanks.html');
exit;





