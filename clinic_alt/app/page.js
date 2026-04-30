const navItems = [
  "医院紹介",
  "診療案内",
  "外来診療",
  "健康診断・人間ドック",
  "介護・リハビリ",
  "お知らせ",
];

const serviceShortcuts = [
  "外来診療",
  "健康診断・人間ドック",
  "リハビリテーション",
  "介護老人保健施設 併設",
];

const newsItems = [
  { date: "2024.05.01", title: "5月の休診日のお知らせ", label: "お知らせ" },
  { date: "2024.04.15", title: "ゴールデンウィークの診療について", label: "お知らせ" },
  { date: "2024.04.01", title: "帯状疱疹ワクチンについて", label: "予防接種" },
];

function LogoMark() {
  return (
    <span className="relative inline-grid h-12 w-14 shrink-0 place-items-center" aria-hidden="true">
      <span className="absolute left-0.5 top-1 h-7 w-6 rounded-[48%_52%_46%_54%] border-2 border-text bg-[#6FB56D] after:absolute after:left-[9px] after:top-[21px] after:h-[18px] after:w-[5px] after:rounded after:bg-text" />
      <span className="absolute bottom-1.5 right-1 h-6 w-8 rounded border-2 border-text bg-surface before:absolute before:left-[5px] before:top-[-13px] before:h-[22px] before:w-[22px] before:rotate-45 before:border-l-2 before:border-t-2 before:border-text before:bg-surface" />
      <span className="absolute bottom-2 right-[17px] h-1.5 w-1.5 rounded-full bg-primary shadow-[9px_2px_0_#E07A5F,4px_10px_0_1px_#2B2B2B]" />
    </span>
  );
}

function Placeholder({ label, className = "" }) {
  return (
    <div className={`relative grid place-items-center overflow-hidden border border-dashed border-primary/30 bg-surface-warm text-center text-sm font-bold tracking-[0.08em] text-primary-deep ${className}`}>
      <span className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary-soft/70" aria-hidden="true" />
      <span className="absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-secondary/35" aria-hidden="true" />
      <span className="relative">{label}</span>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/85 bg-surface-warm/95 backdrop-blur" aria-label="サイトヘッダー">
      <div className="mx-auto grid min-h-[88px] w-[min(100%-36px,1440px)] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-7 max-[1180px]:grid-cols-[auto_auto_auto] max-[1180px]:justify-between max-md:min-h-[74px] max-md:w-[min(100%-28px,720px)] max-md:gap-3">
        <a className="inline-flex min-w-60 items-center gap-3 max-md:min-w-0 max-md:gap-2" href="#" aria-label="クロヤナギ医院 ホーム">
          <span className="max-md:scale-[0.88] max-md:origin-left">
            <LogoMark />
          </span>
          <span className="grid gap-0.5 whitespace-nowrap">
            <span className="text-[0.68rem] font-medium leading-snug tracking-[0.12em] text-muted max-md:hidden">
              老健を併設した地域のかかりつけ医
            </span>
            <span className="text-[clamp(1.25rem,2vw,1.72rem)] font-bold leading-tight tracking-[0.1em] max-md:text-[1.08rem] max-md:tracking-[0.08em]">
              クロヤナギ医院
            </span>
            <span className="text-[0.68rem] font-medium leading-snug tracking-[0.12em] text-muted max-md:text-[0.62rem]">
              医療法人くろやなぎ会
            </span>
          </span>
        </a>

        <nav className="flex min-w-0 items-center justify-center gap-[clamp(14px,2vw,28px)] max-[1180px]:hidden" aria-label="主要ナビゲーション">
          {navItems.map((item) => (
            <a
              className="relative whitespace-nowrap text-[0.86rem] font-bold leading-snug tracking-[0.04em] text-text after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-pill after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100"
              href={`#${item}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 max-md:hidden">
          <a className="inline-flex items-center gap-2.5 whitespace-nowrap leading-tight text-primary-deep" href="tel:0312345678" aria-label="電話番号 03-1234-5678">
            <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-primary-soft font-en text-[0.58rem] font-bold tracking-[0.03em]">
              TEL
            </span>
            <span>
              <strong className="block font-en text-[1.35rem] font-bold tracking-[0.04em]">03-1234-5678</strong>
              <small className="mt-0.5 block text-[0.68rem] font-bold tracking-[0.03em] text-muted">受付時間 9:00-18:00</small>
            </span>
          </a>
          <a className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-pill bg-primary px-7 py-3.5 text-[0.875rem] font-bold leading-snug tracking-[0.04em] text-white shadow-button transition-colors hover:bg-primary-deep focus-visible:bg-primary-deep" href="#reservation">
            Web予約はこちら
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <button className="hidden h-12 w-12 rounded-full border border-line bg-surface text-text max-[1180px]:inline-block max-md:h-11 max-md:w-11" type="button" aria-label="メニューを開く">
          <span className="mx-auto my-1 block h-0.5 w-[18px] rounded-pill bg-current" />
          <span className="mx-auto my-1 block h-0.5 w-[18px] rounded-pill bg-current" />
          <span className="mx-auto my-1 block h-0.5 w-[18px] rounded-pill bg-current" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line/80 bg-[linear-gradient(90deg,#FFF9F0_0%,#FFF4E6_52%,#FFF9F0_100%)]">
      <div className="pointer-events-none absolute left-[5%] top-28 h-24 w-24 rounded-[54%_46%_52%_48%] bg-secondary/20" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[8%] top-20 h-28 w-40 rounded-[58%_42%_60%_40%] bg-primary-soft/80" aria-hidden="true" />

      <div className="mx-auto grid min-h-[620px] w-[min(100%-40px,1440px)] grid-cols-[0.86fr_1.08fr_0.9fr] items-center gap-8 py-10 max-xl:grid-cols-[0.95fr_1.05fr] max-lg:min-h-0 max-lg:grid-cols-1 max-lg:py-12 max-md:w-[min(100%-28px,720px)]">
        <div className="relative z-10 max-w-[520px] max-lg:max-w-none">
          <p className="mb-5 text-[0.78rem] font-bold leading-snug tracking-[0.18em] text-primary-deep">
            KUROYANAGI CLINIC
          </p>
          <h1 className="text-[clamp(2.25rem,4.8vw,4.4rem)] font-bold leading-[1.45] tracking-[0.08em] text-text max-md:text-[2.2rem]">
            このまちで、
            <br />
            健やかな暮らしを
            <br />
            ずっと支える。
          </h1>
          <p className="mt-6 max-w-[440px] text-[0.98rem] leading-[1.95] tracking-[0.04em] text-muted">
            地域に寄り添い、安心できる医療を、身近な場所で。
            外来診療から介護・リハビリまで、毎日の健やかさを支えます。
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 rounded-3xl border border-line bg-surface/88 p-3 shadow-card backdrop-blur max-sm:grid-cols-1">
            {serviceShortcuts.map((item) => (
              <a
                className="group flex min-h-[76px] items-center justify-between gap-3 rounded-2xl border border-line/80 bg-white px-4 py-3 transition hover:border-primary/45 hover:bg-primary-soft/45"
                href={`#${item}`}
                key={item}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-soft text-[0.7rem] font-bold text-primary-deep">
                  医
                </span>
                <span className="flex-1 text-[0.86rem] font-bold leading-snug tracking-[0.04em]">{item}</span>
                <span className="text-primary-deep transition group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative z-0 mx-auto w-full max-w-[580px] max-xl:order-3 max-xl:col-span-2 max-lg:order-none max-lg:col-span-1">
          <div className="absolute left-[8%] top-[6%] h-48 w-64 rounded-[58%_42%_54%_46%] bg-primary-soft" aria-hidden="true" />
          <div className="absolute bottom-[4%] left-[3%] h-28 w-48 rounded-[48%_52%_50%_50%] bg-secondary/35" aria-hidden="true" />
          <Placeholder
            label="医院・人物イラスト"
            className="relative aspect-[1.18/1] rounded-[32px] border-solid bg-white/72 shadow-card"
          />
          <div className="pointer-events-none absolute left-8 top-10 text-2xl text-secondary" aria-hidden="true">
            〜
          </div>
          <div className="pointer-events-none absolute right-8 top-16 text-2xl text-primary" aria-hidden="true">
            〜
          </div>
        </div>

        <aside className="relative z-10 grid gap-5 max-xl:col-start-2 max-xl:row-start-1 max-lg:col-auto max-lg:row-auto">
          <div className="rounded-3xl border border-line bg-surface/92 p-6 shadow-floating backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-lg font-bold tracking-[0.06em]">お知らせ</h2>
              <a className="text-sm font-bold text-primary-deep" href="#news">
                一覧を見る →
              </a>
            </div>
            <div className="divide-y divide-line">
              {newsItems.map((item) => (
                <a className="grid gap-1 py-4 first:pt-1" href="#news" key={item.title}>
                  <span className="font-en text-xs font-medium tracking-[0.04em] text-soft">{item.date}</span>
                  <span className="flex items-center justify-between gap-3 text-sm font-bold leading-relaxed">
                    {item.title}
                    <span className={`shrink-0 rounded-pill px-3 py-1 text-[0.65rem] font-bold ${item.label === "予防接種" ? "bg-blue/10 text-blue" : "bg-primary-soft text-primary-deep"}`}>
                      {item.label}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <Placeholder label="待合室写真" className="aspect-[1.65/1] rounded-3xl shadow-card" />

          <div className="rounded-3xl border border-line bg-surface p-5 shadow-card">
            <p className="text-center text-sm font-bold text-muted">お電話でのご相談はこちら</p>
            <a className="mt-2 block text-center font-en text-3xl font-bold tracking-[0.04em] text-primary-deep" href="tel:0312345678">
              03-1234-5678
            </a>
            <a className="mt-4 inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-pill bg-primary px-6 py-3 text-sm font-bold text-white shadow-button hover:bg-primary-deep" href="#reservation">
              Web予約はこちら
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="py-[clamp(56px,8vw,112px)] text-center text-muted" aria-label="次の実装予定">
          <div className="mx-auto w-[min(100%-40px,1200px)]">
            <p>次は Primary Shortcuts / CTA Stack セクションを実装します。</p>
          </div>
        </section>
      </main>
    </>
  );
}
