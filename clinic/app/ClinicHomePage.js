"use client";

import { useState, useEffect } from "react";

const navLinks = [
  ["当院について", "#about"],
  ["当院の特長", "#features"],
  ["診療案内", "#guide"],
  ["アクセス", "#access"],
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
    icon: HeartPeopleIcon,
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

const HERO_VARIANT = "current";

function CurrentHero() {
  return (
    <section className="hero-section" id="about">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      
      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-message">
            <h1>
              <span className="line">Health,</span>
              <span className="line">Dignity,</span>
              <span className="line">Peace of Mind.</span>
            </h1>
            <p className="hero-subcopy">
              <span className="line">医療と介護で、人生に寄り添う。</span>
              <span className="line">安心がめぐる、上質な毎日を。</span>
            </p>
          </div>

          <div className="hero-facility-card">
            <div className="card-icon-wrap">
              <ClinicLogoIcon />
            </div>
            <div className="card-text-wrap">
              <span className="card-label">介護老人保健施設 桜山の郷 併設</span>
              <p className="card-desc">医療・介護・リハビリが連携する安心のサポート体制</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CollageHero() {
  return (
    <section className="collage-hero-section" id="about">
      <div className="collage-hero-inner">
        <div className="collage-hero-images" aria-label="クロヤナギ医院の外観と施設写真">
          <figure className="collage-photo-card collage-photo-card-small">
            <img src="/photo/clinic.png" alt="クロヤナギ医院の外観" />
          </figure>
          <figure className="collage-photo-card collage-photo-card-main">
            <img src="/photo/hero_fv.jpg" alt="クロヤナギ医院とみっかび東介護老人保健施設の外観" />
          </figure>
          <figure className="collage-photo-card collage-photo-card-tall">
            <img src="/photo/facility_lounge.jpg" alt="落ち着いた施設内ラウンジ" />
          </figure>
        </div>

        <div className="collage-hero-copy">
          <div className="collage-hero-arc" aria-hidden="true" />
          <p className="collage-hero-kicker">浜松市浜名区三ヶ日町の内科クリニック</p>
          <h1>
            <span>皆さまの</span>
            <span>健康に寄り添う</span>
            <span>地域のかかりつけ医</span>
          </h1>
          <p className="collage-hero-lead">
            内科診療を中心に、日々の健康相談から
            予防・診断・治療まで、地域の皆さまの
            すこやかな毎日を支える医療を目指しています。
          </p>
          <div className="collage-hero-actions">
            <a className="collage-primary-button" href="#guide">
              <span>診療案内を見る</span>
              <ArrowIcon />
            </a>
            <a className="collage-text-link" href="#access">
              <span>アクセスを見る</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ClinicHomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="page-shell" id="home">
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="site-header-inner">
          <div className="brand-block">
            <ClinicLogoIcon />
            <div>
              <p className="brand-subtitle">医療法人社団 早友会</p>
              <p className="brand-title">クロヤナギ医院</p>
            </div>
          </div>

          <nav className="site-nav" aria-label="主要メニュー">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
            <a href="#guide">診療時間</a>
          </nav>

          <div className="header-actions">
            <a href="#" className="web-reserve-button">
              <div className="reserve-icon-wrap">
                <CalendarIcon />
              </div>
              <div className="reserve-text-wrap">
                <span className="reserve-label">WEB予約</span>
                <span className="reserve-note">24時間受付</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      <CurrentHero />


      <section className="news-section" id="news">
        <div className="news-inner">
          <div className="news-title-block">
            <h2 className="news-title">お知らせ</h2>
            <p className="news-subtitle-en serif">News</p>
          </div>

          <div className="news-list-block">
            <div className="news-list">
              {newsItems.slice(0, 3).map((item, idx) => (
                <article className="news-row" key={idx}>
                  <time className="news-date">{item.date}</time>
                  <span className="news-tag">{item.tag}</span>
                  <p className="news-item-title">{item.title}</p>
                </article>
              ))}
            </div>
            
            <a href="#news-archive" className="news-view-all">
              <span>VIEW ALL</span>
              <ThinArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-inner">
          <div className="about-content">
            <span className="about-label">About</span>
            <h2 className="about-title">
              地域の皆さまの<br />
              かかりつけ医として
            </h2>
            <p className="about-text">
              クロヤナギ医院は、内科を中心に幅広い<br />
              診療を行うとともに、併設の介護老人保健施設<br />
              「桜山の郷」や地域の医療機関と連携し、<br />
              地域の皆さまの健康と安心を支えます。
            </p>
            <a href="#about-detail" className="about-button">
              当院について
              <ThinArrowIcon />
            </a>
          </div>
          <div className="about-image-wrap">
            <img src="/photo/about_doctor_abstract.png" alt="患者に寄り添う医師の手元" />
          </div>
        </div>
      </section>

      <section className="medical-guide-section" id="guide">
        <img src="/photo/guide/leaf_shadow.png" alt="" className="guide-bg-decoration guide-bg-leaf" />
        <img src="/photo/guide/bg_wave.png" alt="" className="guide-bg-decoration guide-bg-wave" />
        
        <div className="guide-container">
          <div className="guide-info">
            <img src="/photo/guide/logo_leaf.png" alt="" className="guide-logo-leaf" />
            <div className="guide-title-area">
              <span className="en-title">Medical Information</span>
              <h2>診療案内</h2>
            </div>
            <div className="title-divider" />
            <p>
              内科を中心に、健康診断や予防接種など、
              <br />
              地域の皆さまの健康を支える
              <br />
              診療をご案内します。
            </p>
            <a href="#contact" className="cta-button">
              詳しく見る
              <span className="arrow">→</span>
            </a>
          </div>

          <div className="guide-grid">
            {[
              { title: "内科", icon: "/photo/assets/icon_01_stethoscope.png" },
              { title: "生活習慣病", icon: "/photo/assets/icon_02_heartbeat.png" },
              { title: "健康診断", icon: "/photo/assets/icon_03_clipboard.png" },
              { title: "予防接種", icon: "/photo/assets/icon_04_syringe.png" },
              { title: "発熱外来", icon: "/photo/assets/icon_05_thermometer.png" },
              { title: "各種相談", icon: "/photo/assets/icon_06_chat.png" }
            ].map((item, index) => (
              <a href="#contact" key={index} className="guide-card">
                <div className="card-icon-wrapper">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="card-divider" />
                <div className="card-footer">
                  <span>{item.title}</span>
                  <span className="arrow">→</span>
                </div>
              </a>
            ))}
          </div>

          <div className="guide-visit-area">
            <div className="visit-grid">
              <article className="panel hours-panel">
                <div className="panel-heading">
                  <div className="panel-heading-icon">
                    <ClockIcon />
                  </div>
                  <div>
                    <h3>診療時間</h3>
                    <span />
                  </div>
                </div>

                <table className="hours-table">
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
            </div>
          </div>
        </div>
      </section>

      <section className="access-section" id="access">
        <div className="access-heading-row">
          <div className="access-title-block">
            <span className="access-leaf-mark" aria-hidden="true" />
            <h2>アクセス</h2>
            <p>ACCESS</p>
          </div>
          <div className="access-address-block">
            <p>〒431-1404 静岡県浜松市浜名区三ヶ日町宇志34-1</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=静岡県浜松市浜名区三ヶ日町宇志34-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Googleマップで見る
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a className="access-detail-button" href="#access">
            詳しくみる
            <ArrowIcon />
          </a>
        </div>

        <div className="access-guide-card">
          <article className="access-guide-item">
            <div className="access-guide-icon">
              <CarIcon />
            </div>
            <div className="access-guide-copy">
              <h3>お車でお越しの方</h3>
              <p>東名高速「三ヶ日IC」より車で約5分</p>
              <p>医院前に駐車場をご用意しています。</p>
            </div>
          </article>

          <article className="access-guide-item">
            <div className="access-guide-icon">
              <BusIcon />
            </div>
            <div className="access-guide-copy">
              <h3>公共交通機関でお越しの方</h3>
              <ul>
                <li>天竜浜名湖鉄道「三ヶ日駅」より徒歩約5分</li>
                <li>遠鉄バス「宇志」停留所より徒歩約3分</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* 介護施設セクション */}
      <section className="care-section" id="care">
        <div className="care-layout">
          <div className="care-image">
            <img src="/photo/facility_courtyard.jpg" alt="みっかび東 施設外観" />
          </div>
          <div className="care-content">
            <div className="care-icon">
              <HeartPeopleIcon />
            </div>
            <span className="care-label">介護が必要な方の生活を支える</span>
            <h2 className="care-title">
              みっかび東<br />
              介護老人保健施設
            </h2>
            <div className="care-divider"></div>
            <p className="care-description">
              当院と同敷地内に併設され、入所・短期入所ショートステイ・通所リハビリテーションなどを通じて、地域での暮らしを支えます。
            </p>
            <a href="#" className="care-cta">
              <span>施設のご案内</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-white-area">
          <div className="footer-top">
            <div className="footer-col brand-col">
              <div className="footer-brand">
                <div className="brand-text">
                  <p className="brand-subtitle">医療法人社団 早友会</p>
                  <p className="brand-title">クロヤナギ医院</p>
                </div>
              </div>
              <p className="footer-description">地域の皆さまと歩む、信頼のかかりつけ医</p>
            </div>

            <div className="footer-col nav-col">
              <nav className="footer-nav" aria-label="フッターメニュー">
                <div className="nav-group">
                  {navLinks.slice(0, 4).map(([label, href]) => (
                    <a key={label} href={href}>
                      <ChevronRightIcon />
                      {label}
                    </a>
                  ))}
                </div>
                <div className="nav-group">
                  {navLinks.slice(4).map(([label, href]) => (
                    <a key={label} href={href}>
                      <ChevronRightIcon />
                      {label}
                    </a>
                  ))}
                  <a href="#access">
                    <ChevronRightIcon />
                    アクセス
                  </a>
                </div>
              </nav>
            </div>

            <div className="footer-col contact-col">
              <div className="footer-address">
                <PinIcon />
                <span>〒431-1404 静岡県浜松市浜名区三ヶ日町宇志34-1</span>
              </div>
              <a href="tel:053-525-1113" className="footer-phone">
                <PhoneIcon />
                <span>053-525-1113</span>
              </a>
              <div className="footer-reserve-actions">
                <a href="#contact" className="footer-reserve-button primary">
                  <CalendarIcon />
                  WEB予約
                  <span aria-hidden="true">↗</span>
                </a>
                <a href="#contact" className="footer-reserve-button secondary">
                  LINE予約
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-info-grid">
            <div className="footer-hours-card">
              <table className="footer-hours-table">
                <thead>
                  <tr>
                    <th>
                      <span className="footer-hours-heading">
                        <ClockIcon />
                        診療時間
                      </span>
                    </th>
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
                    <th>9:00 - 12:30</th>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>−</td>
                  </tr>
                  <tr>
                    <th>14:30 - 18:00</th>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>−</td>
                    <td>○</td>
                    <td>−</td>
                    <td>−</td>
                  </tr>
                </tbody>
              </table>
              <p className="footer-hours-note">※木曜・土曜の午後、日曜・祝日は休診です。</p>
            </div>

            <div className="footer-map-card">
              <iframe
                title="クロヤナギ医院 Googleマップ"
                src="https://www.google.com/maps?q=静岡県浜松市浜名区三ヶ日町宇志34-1&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href="https://www.google.com/maps/search/?api=1&query=静岡県浜松市浜名区三ヶ日町宇志34-1" className="map-link" target="_blank" rel="noreferrer">
                Googleマップで見る
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-strip">
          <div className="footer-bottom-inner">
            <div className="footer-message">
              <span className="footer-shield"><HeartCareIcon /></span>
              <div className="brand-text">
                <p>地域の健康を支え、</p>
                <p>安心と信頼の医療を提供します。</p>
              </div>
            </div>
            <nav className="footer-legal" aria-label="フッター下部メニュー">
              <a href="/privacy">プライバシーポリシー</a>
              <a href="#home">サイトマップ</a>
            </nav>
            <p className="copyright">© 2025 医療法人社団 早友会 クロヤナギ医院</p>
          </div>
        </div>
      </footer>

    </main>
  );
}

function ClinicLogoIcon() {
  return (
    <svg viewBox="0 0 64 64" className="clinic-logo-icon" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M32 12v40M12 32h40" strokeWidth="1" opacity="0.3" />
      <path d="M22 22l20 20M42 22L22 42" strokeWidth="1" opacity="0.3" />
      <path d="M32 18c-8 0-14 6-14 14s6 14 14 14 14-6 14-14-6-14-14-14Z" strokeWidth="2" />
      <path d="M32 24v16M24 32h16" strokeWidth="2" />
    </svg>
  );
}

function FacilitySymbolIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M8 12h2M14 12h2M11 7h2" />
      <path d="M7 16h2M15 16h2" />
    </svg>
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

function BusIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 10h28c5 0 8 3 8 8v24c0 5-4 9-9 9H19c-5 0-9-4-9-9V18c0-5 3-8 8-8Zm0 10h28M17 35h8m14 0h8M22 51v5m20-5v5" />
      <circle cx="23" cy="43" r="3" />
      <circle cx="41" cy="43" r="3" />
      <path d="M10 26H6v14h4M54 26h4v14h-4" />
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
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.61a2 2 0 0 1-.45 2.11L9 10.69a16 16 0 0 0 4.31 4.31l1.25-1.23a2 2 0 0 1 2.11-.45c.84.28 1.72.48 2.61.6A2 2 0 0 1 22 16.92Z" />
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

function HeartPeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
