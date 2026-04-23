const navLinks = [
  ["ホーム", "#home"],
  ["当院について", "#about"],
  ["診療案内", "#guide"],
  ["医師紹介", "#visit"],
  ["施設案内", "#care"],
  ["お知らせ", "#news"],
];

const features = [
  {
    title: "内科",
    text: "風邪や発熱、生活習慣病など幅広く診療します。",
    icon: StethoscopeIcon,
  },
  {
    title: "診療時間",
    text: "平日・土曜の診療時間や休診日をご案内します。",
    icon: ClockIcon,
  },
  {
    title: "アクセス",
    text: "〒431-1404 浜松市浜名区三ヶ日町宇志34-1",
    icon: PinIcon,
  },
  {
    title: "みっかび東介護老人保健施設",
    text: "隣接施設のご案内",
    icon: HeartCareIcon,
  },
];

const departments = [
  "内科",
  "消化器科",
  "呼吸器内科",
  "整形外科",
  "リハビリテーション科",
];

const newsItems = [
  {
    date: "2026.04.18",
    tag: "お知らせ",
    title: "休日当番医のお知らせ",
  },
  {
    date: "2026.04.18",
    tag: "お知らせ",
    title: "消化器外科学会 専門医・指導医の更新",
  },
  {
    date: "2026.02.21",
    tag: "お知らせ",
    title: "花粉症について",
  },
  {
    date: "2026.01.10",
    tag: "お知らせ",
    title: "インフルエンザ予防接種のご案内",
  },
];

const accessItems = [
  {
    title: "お車でお越しの方",
    lines: ["東名高速「三ヶ日IC」より", "約5分"],
    icon: CarIcon,
  },
  {
    title: "電車でお越しの方",
    lines: ["天竜浜名湖鉄道「三ケ日駅」より", "徒歩約14分"],
    icon: TrainIcon,
  },
  {
    title: "住所",
    lines: ["〒431-1404", "浜松市浜名区三ヶ日町宇志34-1"],
    icon: PinIcon,
  },
];

export default function ClinicHomePage() {
  return (
    <main className="page-shell" id="home">
      <div className="leaf leaf-top-left" aria-hidden="true" />
      <div className="leaf leaf-hero-left" aria-hidden="true" />
      <div className="leaf leaf-bottom-right" aria-hidden="true" />

      <header className="site-header">
        <div className="site-header-inner">
          <div className="brand-block">
            <TreeMark />
            <div>
              <p className="brand-subtitle">医療法人社団 早友会</p>
              <p className="brand-title">クロヤナギ医院</p>
            </div>
          </div>

          <div className="header-side">
            <nav className="site-nav" aria-label="主要メニュー">
              {navLinks.map(([label, href], index) => (
                <a key={label} href={href} className={index === 0 ? "is-active" : ""}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="header-contact">
              <span>お電話でのお問い合わせ</span>
              <a href="tel:0535241000">053-524-1000</a>
              <small>ご予約・お問い合わせ</small>
            </div>
          </div>
        </div>
      </header>

      <section className="hero-section" id="about">
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker">
              <PinIcon />
              浜松市浜名区三ヶ日町の内科クリニック
            </p>
            <h1>
              <span className="hero-line">地域に寄り添う、</span>
              <span className="hero-line">安心の医療と介護連携</span>
            </h1>
            <p>
              内科診療を中心に、皆さまの健康を支えます。
              <br />
              隣接する「みっかび東介護老人保健施設」との
              <br />
              連携により、医療と介護がつながる安心を
              <br />
              お届けします。
            </p>
            <div className="hero-actions">
              <a className="primary-hero-button" href="#guide">
                <ClipboardPlusIcon />
                <span>
                  診療案内を見る
                  <small>診療科目・診療時間</small>
                </span>
                <ArrowIcon />
              </a>
              <a className="secondary-hero-button" href="#access">
                <PinIcon />
                <span>
                  アクセスを見る
                  <small>所在地・交通案内</small>
                </span>
                <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="hero-support-card">
            <div className="hero-support-icon">
              <HeartCareIcon />
            </div>
            <div className="hero-support-copy">
              <p>医療と介護の連携で</p>
              <span>切れ目のないサポートを</span>
              <strong>隣接する みっかび東介護老人保健施設</strong>
              <small>詳しくはこちら</small>
            </div>
            <a className="hero-support-link" href="#care" aria-label="みっかび東介護老人保健施設へ">
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <div className="feature-strip-wrap">
        <section className="feature-strip">
          {features.map(({ title, text, icon: Icon }) => (
            <article className="feature-item" key={title}>
              <Icon />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <a href="#guide" className="feature-link" aria-label={`${title}を見る`}>
                <ArrowIcon />
              </a>
            </article>
          ))}
        </section>
      </div>

      <section className="news-section" id="news">
        <div className="news-grid-container">
          <div className="news-header-side">
            <div className="news-logo">
              <NewsSymbolIcon />
            </div>
            <h2 className="serif">お知らせ</h2>
            <p className="news-subtitle">医院からのお知らせや休診情報を掲載しています。</p>
          </div>

          <div className="news-list-side">
            <div className="news-list">
              {newsItems.map((item, idx) => (
                <article className="news-row" key={idx}>
                  <time className="news-row-date">{item.date}</time>
                  <span className="news-row-tag">{item.tag}</span>
                  <p className="news-row-title">{item.title}</p>
                  <div className="news-row-arrow">
                    <ThinArrowIcon />
                  </div>
                </article>
              ))}
            </div>
            
            <div className="news-action-area">
              <a href="#news-archive" className="news-more-link">
                <span>お知らせ一覧</span>
                <div className="news-more-circle">
                  <ArrowIcon />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="medical-guide-section" id="guide">
        <div className="medical-guide-header">
          <div className="medical-guide-symbol">
            <StethoscopeIcon />
          </div>
          <div className="medical-guide-title">
            <span />
            <h2>診療案内</h2>
            <span />
          </div>
          <p>地域の皆さまの健康を支える、安心の医療を提供します。</p>
        </div>

        <div className="guide-grid">
          <article className="panel guide-panel department-panel">
            <div className="panel-heading">
              <div className="panel-heading-icon">
                <StethoscopeIcon />
              </div>
              <div>
                <h3>診療科目</h3>
                <span />
              </div>
            </div>

            <div className="department-highlight">
              <div className="department-illustration">
                <HeartPulseIcon />
              </div>
              <div className="department-copy">
                <strong>内科</strong>
                <p>
                  一般内科・生活習慣病・
                  <br />
                  健康診断・予防接種など
                </p>
                <ul className="department-tags" aria-label="対応診療科目">
                  {departments.map((department) => (
                    <li key={department}>{department}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="panel guide-panel hours-panel" id="visit">
            <div className="panel-heading">
              <div className="panel-heading-icon">
                <ClockIcon />
              </div>
              <div>
                <h3>診療時間</h3>
                <span />
              </div>
            </div>

            <table className="hours-table guide-hours-table">
              <thead>
                <tr>
                  <th aria-label="診療時間" />
                  <th>月</th>
                  <th>火</th>
                  <th>水</th>
                  <th>木</th>
                  <th>金</th>
                  <th>土</th>
                  <th>日・祝</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>9:00〜12:00</th>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>ー</td>
                </tr>
                <tr>
                  <th>14:00〜17:00</th>
                  <td>○</td>
                  <td>○</td>
                  <td>ー</td>
                  <td>○</td>
                  <td>○</td>
                  <td>ー</td>
                  <td>ー</td>
                </tr>
              </tbody>
            </table>

            <div className="guide-notes">
              <p>
                <CalendarIcon />
                <strong>休診日</strong>
                <span>水曜午後・土曜午後・日曜・祝日</span>
              </p>
              <p>
                <ClockIcon />
                <span>受付は診療終了の30分前までとなります</span>
              </p>
            </div>
          </article>
        </div>

        <a className="visit-card" href="#access">
          <div className="visit-card-icon">
            <PeopleIcon />
          </div>
          <div className="visit-card-title">
            <h3>ご来院の方へ</h3>
          </div>
          <div className="visit-card-copy">
            <p>初めて受診される方は、保険証・各種医療証をご持参ください。</p>
            <p>ご不明な点がございましたら、お気軽にスタッフまでお声がけください。</p>
          </div>
          <div className="visit-card-arrow" aria-hidden="true">
            <ArrowIcon />
          </div>
        </a>
      </section>

      <section className="access-section" id="access">
        <div className="section-header">
          <div className="header-icon">
            <PinIcon />
          </div>
          <h2 className="serif">アクセス</h2>
          <p className="header-subtitle">所在地や交通案内をご確認いただけます。</p>
        </div>

        <div className="access-card">
          <div className="access-info">
            <div className="access-details">
              <div className="access-detail-item">
                <div className="detail-icon"><PinIcon /></div>
                <div className="detail-content">
                  <p>〒431-1404 静岡県浜松市浜名区三ヶ日町宇志532-1</p>
                </div>
              </div>
              
              <div className="access-detail-item">
                <div className="detail-icon"><PhoneIcon /></div>
                <div className="detail-content">
                  <p>TEL 053-526-1112</p>
                </div>
              </div>
              
              <div className="access-detail-item">
                <div className="detail-icon"><CarIcon /></div>
                <div className="detail-content">
                  <p>東名高速「三ヶ日IC」から車で約5分</p>
                </div>
              </div>
              
              <div className="access-detail-item">
                <div className="detail-icon"><TrainIcon /></div>
                <div className="detail-content">
                  <p>天竜浜名湖鉄道「三ヶ日駅」から車で約5分</p>
                </div>
              </div>
              
              <div className="access-detail-item">
                <div className="detail-icon"><ParkingIcon /></div>
                <div className="detail-content">
                  <p>駐車場完備</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=34.802377,137.561334" 
              className="google-maps-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Googleマップを見る
              <ArrowIcon />
            </a>
          </div>

          <div className="access-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.272370746808!2d137.5577882!3d34.7990888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b2efa972e1a71%3A0x92e441ec73c353e0!2z44CSNDMxLTE0MDQg6Z2Z5bKh55yM5rWc5p2-5biC5rWc5ZCN5Yy65LiJ44O25pel55S65a6H5b-X77yV77yT77yS!5e0!3m2!1sja!2sjp!4v1776946819289!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="クロヤナギ医院の地図"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="care-banner" id="care">
        <div className="care-copy">
          <p className="care-lead">介護が必要な方の生活を支える</p>
          <h2>みっかび東介護老人保健施設</h2>
          <p>
            当院と同敷地内に併設され、入所・短期入所ショートステイ・
            <br />
            通所リハビリテーションなどを通じて、地域での暮らしを支えます。
          </p>
        </div>
        <div className="care-photo" aria-hidden="true" />
        <div className="care-action">
          <a className="secondary-green-button" href="/">
            施設のご案内はこちら
            <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <TreeMark />
          <div>
            <p className="brand-subtitle">医療法人社団 早友会</p>
            <p className="brand-title">クロヤナギ医院</p>
          </div>
        </div>

        <div className="footer-center">
          <div className="footer-links">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
          <div className="footer-links secondary">
            <a href="#home">採用情報</a>
            <a href="/privacy">プライバシーポリシー</a>
            <a href="#home">サイトマップ</a>
          </div>
          <p className="copyright">© 医療法人社団 早友会 クロヤナギ医院</p>
        </div>

        <div className="footer-contact">
          <p>〒431-1404</p>
          <p>浜松市浜名区三ヶ日町宇志34-1</p>
          <a href="tel:0535241000">053-524-1000</a>
        </div>
      </footer>
    </main>
  );
}

function TreeMark() {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <path d="M39 27c0-9 7-16 15-16 7 0 12 6 12 13 7 1 12 8 12 15 0 9-8 16-18 16H20C10 55 3 48 3 39c0-7 4-13 10-15 0-9 6-16 15-16 4 0 9 2 11 5 3-3 7-5 11-5Z" />
      <path d="M39 30v36M29 40l10 8 10-10M23 53l16 13 16-13" />
    </svg>
  );
}

function StethoscopeIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 11v13c0 7 6 13 14 13s14-6 14-13V11M22 11v11M42 11v11M32 37v9c0 7 6 12 13 12 6 0 11-5 11-11s-5-10-10-10c-4 0-7 3-7 7 0 3 2 5 5 5 2 0 4-2 4-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 56c13 0 24-11 24-24S45 8 32 8 8 19 8 32s11 24 24 24Z" />
      <path d="M32 19v14l9 5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M14 18h36v32H14z" />
      <path d="M14 26h36M22 12v12M42 12v12M24 35h6M34 35h6M24 44h6" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 46h28l-3-5V28c0-8-5-14-11-14s-11 6-11 14v13l-3 5Z" />
      <path d="M27 50a5 5 0 0 0 10 0" />
    </svg>
  );
}

function HeartPulseIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 50c-5-5-10-8-15-13-4-4-7-8-7-14 0-8 6-14 14-14 4 0 8 2 11 5 3-3 7-5 11-5 8 0 14 6 14 14 0 6-3 10-7 14-5 5-10 8-15 13Z" />
      <path d="M18 33h10l4-9 5 16 4-10h10" />
    </svg>
  );
}

function HeartCareIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 24c-4-6-8-10-15-10S4 20 4 28c0 15 20 23 28 32 8-9 28-17 28-32 0-8-6-14-13-14s-11 4-15 10Z" />
      <path d="M16 52c2-6 8-10 16-10s14 4 16 10" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM18 32a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm28 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
      <path d="M20 54v-5c0-7 5-12 12-12s12 5 12 12v5M8 54v-3c0-6 4-10 10-10h2M44 41h2c6 0 10 4 10 10v3" />
    </svg>
  );
}

function ClipboardPlusIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M24 10h16l2 6h8v34H14V16h8l2-6Z" />
      <path d="M22 28h20M22 38h14M48 40v12M42 46h12" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M8 24l12-8 12 9-8 8c-2 2-2 5 0 7s5 2 7 0l7-7 8 7M10 23l-6 8 20 20 7-7M54 24l6 8-20 20-8-8" />
    </svg>
  );
}

function RehabIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M22 11a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM21 25l10 5 8-5m-15 7-6 12m8-4 7 14m9-23-8 8v15M12 54h40" />
      <path d="M14 54V39h10" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M14 39h36l-4-14H18l-4 14Zm2 0v8m30-8v8M18 47a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm28 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
    </svg>
  );
}

function TrainIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M20 8h24c6 0 10 4 10 10v20c0 7-5 12-12 12H22c-7 0-12-5-12-12V18c0-6 4-10 10-10Zm-1 14h26M22 33h8m12 0h3M21 50l-5 8M43 50l5 8" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 56c10-12 16-20 16-29 0-10-7-17-16-17s-16 7-16 17c0 9 6 17 16 29Zm0-21a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 12c0 24 16 40 40 40h4v-8l-8-4-4 4c-8-4-12-8-16-16l4-4-4-8h-8v4Z" />
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="12" y="12" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M26 42V22h8c4 0 6 2 6 5s-2 5-6 5h-8" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 28l18-12v28L12 32h-4v-4h4ZM30 20l12-8v32l-12-8M42 22s4 2 4 10-4 10-4 10M42 28s2 1 2 4-2 4-2 4" />
    </svg>
  );
}

function NewsSymbolIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 5c.8 0 1.5.7 1.5 1.5S12.8 8 12 8s-1.5-.7-1.5-1.5S11.2 5 12 5z" />
      <path d="M16 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM8 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      <path d="M19 14c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM5 14c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity="0.5" />
    </svg>
  );
}

function ThinArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
