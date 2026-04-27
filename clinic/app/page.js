"use client";

import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="wrapper">
      <Head>
        <title>クロヤナギ医院 | 内科・小児科・呼吸器内科</title>
      </Head>

      {/* --- HEADER --- */}
      <header className="header">
        {/* Main Header (Top Bar) */}
        <div className="header-main">
          <div className="container header-main-inner">
            <div className="logo">
              <a href="/">
                <div className="logo-flex">
                  <div className="logo-mark">
                    <img src="/photo/assets/01_action/08_当院について.png" alt="" style={{ height: "48px" }} />
                  </div>
                  <div className="logo-text">
                    <span className="logo-sub">医療法人社団 早友会</span>
                    <span className="logo-main">クロヤナギ医院</span>
                  </div>
                </div>
              </a>
            </div>

            {/* PC Actions */}
            <div className="pc-actions hidden-mobile">
              <a href="#" className="header-card blue">
                <div className="icon">
                  <img src="/photo/assets/01_action/01_予約.png" alt="" />
                </div>
                <div className="info">
                  <span className="value">ご予約はこちら</span>
                </div>
              </a>
              <a href="#" className="header-card blue">
                <div className="icon">
                  <img src="/photo/assets/01_action/02_みっかび東.png" alt="" />
                </div>
                <div className="info">
                  <span className="value">みっかび東</span>
                  <span className="label">介護老人保健施設</span>
                </div>
              </a>
              <a href="tel:0535251113" className="header-card tel-card">
                <div className="tel-top">
                  <div className="icon tel-icon">
                    <img src="/photo/assets/01_action/03_電話.png" alt="" />
                  </div>
                  <span className="tel-value">053-525-1113</span>
                </div>
                <span className="tel-hours">受付時間 8:30〜17:30（木・土午後、日祝休診）</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button 
              className="hamburger show-mobile" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="pc-nav hidden-mobile">
          <div className="container">
            <ul className="nav-list">
              <li><a href="#">当院について</a></li>
              <li><a href="#">当院の特長</a></li>
              <li><a href="#">診療案内</a></li>
              <li><a href="#">アクセス</a></li>
              <li><a href="#">お知らせ</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* --- HERO --- */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-layout">

            {/* Left: Main Photo + Schedule Overlay */}
            <div className="hero-photo-wrap">
              {/* Photo with custom border-radius */}
              <div className="hero-photo-container">
                <img src="/photo/clinic.png" alt="クロヤナギ医院 外観" className="hero-photo" />
              </div>

              {/* Schedule card overlaying the bottom-right of the photo */}
              <div className="hero-schedule-overlay">
                <div className="schedule-card">
                  <div className="schedule-table-wrapper">
                    <table className="schedule-table">
                      <thead>
                        <tr>
                          <th>診療受付時間</th>
                          <th>月</th>
                          <th>火</th>
                          <th>水</th>
                          <th>木</th>
                          <th>金</th>
                          <th>土</th>
                          <th>日祝</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="time-slot">8:30-12:00</td>
                          <td>●</td>
                          <td>●</td>
                          <td>●</td>
                          <td>●</td>
                          <td>●</td>
                          <td>●</td>
                          <td className="closed">／</td>
                        </tr>
                        <tr>
                          <td className="time-slot">14:30-17:30</td>
                          <td>●</td>
                          <td>●</td>
                          <td>●</td>
                          <td className="closed">／</td>
                          <td>●</td>
                          <td>●</td>
                          <td className="closed">／</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="schedule-footer">
                    <p>※ 予約優先</p>
                    <p>※ 初診の方は診療時間が終了する30分前までにご来院ください</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Catchcopy + Family Illustration */}
            <div className="hero-copy-area">
              {/* Bird deco top-right */}
              <div className="deco-bird deco-bird-top">
                <img src="/photo/assets/07_ashirai/06_鳥.png" alt="" />
              </div>

              {/* Vertical staircase text */}
              <div className="copy-vertical-wrapper">
                <h2 className="v-text staircase-text">
                  <span className="step-1">地域の皆さまの</span>
                  <span className="step-2">健康を支え、</span>
                  <span className="step-3">安心の毎日を。</span>
                </h2>
              </div>

              {/* Bird deco bottom-left */}
              <div className="deco-bird deco-bird-bottom">
                <img src="/photo/assets/07_ashirai/06_鳥.png" alt="" />
              </div>

              {/* Hill silhouette behind family */}
              <div className="hero-right-deco">
                <img src="/photo/assets/07_ashirai/11_丘シルエット.png" alt="" className="ashirai-hill" />
              </div>

              {/* Family illustration */}
              <div className="deco-family">
                <img src="/photo/assets/05_persons/08_家族グループ.png" alt="ご家族" />
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* --- NEWS --- */}
      <section className="news-section">
        {/* 上境界：波形（Hero白→News水色） */}
        <div className="news-wave-top" aria-hidden="true">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C360,60 1080,0 1440,40 L1440,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="container">
          <div className="news-inner">
            
            {/* Left Column */}
            <div className="news-title-area">
              <span className="news-en-title">News</span>
              <h2 className="news-jp-title">当院からの<br />お知らせ</h2>
              <div className="news-title-line"></div>
              <p className="news-desc">
                クロヤナギ医院から皆さまへの<br />
                お知らせや、診療に関する情報を<br />
                お届けします。
              </p>
              <a href="#" className="news-btn-pc">
                お知らせ一覧を見る
                <img src="/photo/assets/02_navi/01_矢印右.png" alt="" style={{ height: '14px', filter: 'brightness(0) invert(1)' }} />
              </a>
            </div>

            {/* Right Column */}
            <div className="news-list-area">
              {[
                {
                  date: "2026.04.21",
                  tag: "お知らせ",
                  title: "GW臨時休診のお知らせ",
                  isPickup: true,
                },
                {
                  date: "2026.04.21",
                  tag: "コラム・トリミング・グルーミング",
                  title: "涙やけケア 〜動物病院併設だからこそできるサポート〜",
                  isPickup: false,
                },
                {
                  date: "2026.04.05",
                  tag: "コラム・エキゾチック",
                  title: "よく見てあげよう！ハムスターの病気のサイン",
                  isPickup: false,
                }
              ].map((item, index) => (
                <div className="news-card" key={index}>
                  {item.isPickup && <div className="pickup-ribbon"></div>}
                  <span className="news-date">{item.date}</span>
                  <span className="news-tag">{item.tag}</span>
                  <h3 className="news-card-title">{item.title}</h3>
                </div>
              ))}

              {/* Mobile/Footer Link */}
              <div className="news-footer-link-wrap">
                <a href="#" className="news-footer-link">
                  <div className="news-footer-arrow">
                    <img src="/photo/assets/02_navi/01_矢印右.png" alt="" />
                  </div>
                  <span>お知らせ一覧を見る</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Background Decorations */}
        <div className="news-deco news-deco-right">
          <img src="/photo/assets/06_landscapes/03_街並みの風景.png" alt="" />
        </div>
        <div className="news-deco news-deco-birds">
          <img src="/photo/assets/07_ashirai/06_鳥.png" alt="" />
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section className="about-section">
        {/* 上境界：アーチ（News水色→About） */}
        <div className="about-wave-top" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L0,80 Q720,20 1440,80 L1440,0 Z" fill="#eaf3fb" />
          </svg>
        </div>
        <div className="about-deco about-deco-cloud about-deco-cloud-left" aria-hidden="true"></div>
        <div className="about-deco about-deco-cloud about-deco-cloud-top" aria-hidden="true"></div>
        <div className="about-deco about-deco-cloud about-deco-cloud-right" aria-hidden="true"></div>
        <img
          src="/photo/assets/07_ashirai/06_鳥.png"
          alt=""
          className="about-deco about-birds"
        />

        <div className="about-photo about-photo-left-top">
          <img src="/photo/clinic_01%20(2).png" alt="クロヤナギ医院の外観" />
        </div>
        <div className="about-photo about-photo-left-bottom">
          <img src="/photo/assets/features/feature_02.png" alt="院内で検査を行う医師" />
        </div>
        <div className="about-photo about-photo-right-top">
          <img src="/photo/assets/features/feature_01.png" alt="診察室で相談する患者さまと医師" />
        </div>
        <div className="about-photo about-photo-right-middle">
          <img src="/photo/assets/features/feature_04.png" alt="明るい院内の待合スペース" />
        </div>
        <div className="about-photo about-photo-right-bottom">
          <img src="/photo/assets/features/feature_01.png" alt="患者さまに説明する医師" />
        </div>

        <div className="about-landscape" aria-hidden="true">
          <img src="/photo/about.png" alt="" />
        </div>

        <div className="container about-content">
          <p className="about-label">ABOUT</p>
          <div className="about-dots" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
          <h2 className="about-title">
            地域に寄り添い、<br />
            皆さまの<span>健康を守り続けて。</span>
          </h2>
          <div className="about-desc">
            <p>クロヤナギ医院は、地域の皆さまに長く信頼していただける</p>
            <p>かかりつけ医を目指しています。</p>
            <p>内科・外科・小児科を中心に、</p>
            <p>予防医療から専門的な検査・治療まで幅広く対応します。</p>
            <p>どんな些細なことでも気になることがあれば、</p>
            <p>お気軽にご相談ください。</p>
          </div>
          <a href="#" className="about-btn">当院について →</a>
        </div>
        {/* 下境界：濃い青の波 */}
        <div className="about-wave-bottom" aria-hidden="true">
          <svg viewBox="0 0 1440 110" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,70 C360,0 1080,110 1440,30 L1440,110 L0,110 Z" fill="#004098" />
          </svg>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section id="features" className="features-section">
        <div className="features-bg-text" aria-hidden="true">KUROYANAGI CLINIC.</div>
        <div className="container">
          <div className="features-header">
            <span className="features-en-label">Feature</span>
            <h2 className="features-title">
              クロヤナギ医院の<span>4つの特長</span>
            </h2>
          </div>
          <div className="features-cards">
            <div className="feature-card">
              <span className="feature-card-num">01</span>
              <div className="feature-card-img">
                <img src="/photo/assets/features/feature_01.png" alt="地域に根ざした総合診療" />
              </div>
              <div className="feature-card-overlay">
                <p className="feature-card-title">地域に根ざした<br />総合診療</p>
                <a href="#" className="feature-card-btn">詳しく見る →</a>
              </div>
            </div>
            <div className="feature-card">
              <span className="feature-card-num">02</span>
              <div className="feature-card-img">
                <img src="/photo/assets/features/feature_02.png" alt="専門的な検査と手術対応" />
              </div>
              <div className="feature-card-overlay">
                <p className="feature-card-title">専門的な検査と<br />手術対応</p>
                <a href="#" className="feature-card-btn">詳しく見る →</a>
              </div>
            </div>
            <div className="feature-card">
              <span className="feature-card-num">03</span>
              <div className="feature-card-img">
                <img src="/photo/assets/features/feature_03.png" alt="予防医療と健康管理" />
              </div>
              <div className="feature-card-overlay">
                <p className="feature-card-title">予防医療と<br />健康管理</p>
                <a href="#" className="feature-card-btn">詳しく見る →</a>
              </div>
            </div>
            <div className="feature-card">
              <span className="feature-card-num">04</span>
              <div className="feature-card-img">
                <img src="/photo/assets/features/feature_04.png" alt="安心・快適な診療環境" />
              </div>
              <div className="feature-card-overlay">
                <p className="feature-card-title">安心・快適な<br />診療環境</p>
                <a href="#" className="feature-card-btn">詳しく見る →</a>
              </div>
            </div>
          </div>
        </div>
        {/* 下境界：半円アーチ */}
        <div className="features-arch-bottom" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L0,80 Q720,20 1440,80 L1440,0 Z" fill="#004098" />
          </svg>
        </div>
      </section>

      {/* --- DEPARTMENT SECTION (診療のご案内) --- */}
      <section className="department-section">
        <div className="container-narrow">
          <div className="section-title-wrap-center">
            <h2 className="section-title-round">診療のご案内</h2>
          </div>

          <div className="dept-grid">
            {[
              {
                title: "内科",
                icon: "/photo/assets/03_medical/01_内科.png"
              },
              {
                title: "呼吸器内科（呼吸器科）",
                icon: "/photo/assets/03_medical/05_呼吸器内科.png"
              },
              {
                title: "胃腸科（消化器科）",
                icon: "/photo/assets/03_medical/06_消化器内科.png"
              },
              {
                title: "整形外科",
                icon: "/photo/assets/assets_new/01_整形外科.png"
              },
              {
                title: "リハビリテーション科",
                icon: "/photo/assets/assets_new/02_リハビリテーション科.png"
              },
              {
                title: "婦人科",
                icon: "/photo/assets/assets_new/03_婦人科.png"
              }
            ].map((dept, index) => (
              <div className="dept-item" key={index}>
                <div className="dept-icon-circle">
                  <img src={dept.icon} alt="" />
                </div>
                <h3 className="dept-item-title">{dept.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICE --- */}
      <section id="service" className="service-section-v3">
        {/* Curved boundary decoration */}
        <div className="service-curve-top"></div>

        <div className="container-narrow">
          {/* 1. Introduction Header (Centered) */}
          <div className="service-intro-header-centered">
            <div className="curve-illust-wrap">
              <img src="/photo/assets/assets_new/01_診察シーン.png" alt="診察の様子" className="illust-doctor-family" />
            </div>
            <span className="sub-title-en">Service</span>
            <h2 className="section-title-jp">当院の<span>診療・サービス</span></h2>
            <p className="section-description">
              地域の皆さまの健康を支えるため、<br className="pc-only" />
              幅広い診療とサービスを提供しています。<br className="pc-only" />
              お気軽にご相談ください。
            </p>
          </div>

          {/* 2. Main Features */}
          <div className="main-features-list">
            {/* Feature 1: General Treatment */}
            <div className="feature-item feature-general">
              <div className="feature-image">
                <img src="/photo/assets/assets_new/02_病院外観.png" alt="一般診療" className="rounded-photo" />
              </div>
              <div className="feature-content">
                <div className="title-area">
                  <div className="icon-bg-circle">
                    <img src="/photo/assets/assets_new/05_聴診器.png" alt="" />
                  </div>
                  <div className="title-text-group">
                    <span className="feature-title-en">Medical Treatment</span>
                    <h3 className="feature-title-jp">一般診療</h3>
                  </div>
                </div>
                <p className="feature-desc">風邪や発熱、生活習慣病など、内科全般の診療を行います。早期発見・早期治療に取り組むことが大切です。</p>
                <a href="#" className="pill-btn">
                  <span>一般診療について</span>
                  <div className="arrow-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Feature 2: Surgery (Highlighted Card) */}
            <div className="surgery-highlight-card">
              <div className="feature-content">
                <div className="title-area">
                  <div className="icon-bg-circle">
                    <img src="/photo/assets/assets_new/01_整形外科.png" alt="" />
                  </div>
                  <div className="title-text-group">
                    <div className="title-row">
                      <h3 className="feature-title-jp">呼吸器内科</h3>
                      <span className="feature-title-en">Operation</span>
                    </div>
                    <div className="title-underline"></div>
                  </div>
                </div>
                <p className="feature-desc">胃がん、大腸がん、肝臓・胆道・膵臓疾患、痔核・脱肛などの外科手術から、切り傷・火傷などの一般外科まで幅広く対応しています。</p>
                <a href="#" className="pill-btn-reverse">
                  <div className="arrow-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                  <span>外科手術について</span>
                </a>
              </div>
              <div className="feature-image-wrap">
                <img src="/photo/assets/assets_new/03_動物診察.png" alt="外科手術" className="landscape-photo" />
                <div className="deco-dots-right">
                  <img src="/photo/assets/07_ashirai/08_ドット丸.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="other-services-area">
            <div className="services-grid">
              {/* Service: Gastroenterology (Moved) */}
              <div className="service-card-modern">
                <div className="card-image-part">
                  <img src="/photo/assets/assets_new/02_病院外観.png" alt="胃腸科・消化器科" />
                  <div className="card-icon-floating">
                    <div className="icon-inner">
                      <img src="/photo/assets/03_medical/06_消化器内科.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="card-body-part">
                  <h5 className="service-title-jp">胃腸科（消化器科）</h5>
                  <span className="service-title-en">Gastroenterology</span>
                  <p className="service-description">胃痛・腹痛・便通異常など、食道から胃、大腸までの消化管疾患を診療します。</p>

                </div>
              </div>


              {/* Service 2: Preventive */}
              <div className="service-card-modern">
                <div className="card-image-part">
                  <img src="/photo/assets/assets_new/01_診察シーン.png" alt="予防医療" />
                  <div className="card-icon-floating">
                    <div className="icon-inner">
                      <img src="/photo/assets/03_medical/02_予防接種.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="card-body-part">
                  <h5 className="service-title-jp">予防医療・検診</h5>
                  <span className="service-title-en">Preventive Medicine</span>
                  <p className="service-description">予防接種や各種検診を通じて、病気の予防と早期発見に努めています。</p>

                </div>
              </div>

              {/* Service 3: Rehab */}
              <div className="service-card-modern">
                <div className="card-image-part">
                  <img src="/photo/assets/assets_new/02_病院外観.png" alt="リハビリテーション" />
                  <div className="card-icon-floating">
                    <div className="icon-inner">
                      <img src="/photo/assets/assets_new/02_リハビリテーション科.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="card-body-part">
                  <h5 className="service-title-jp">リハビリテーション</h5>
                  <span className="service-title-en">Rehabilitation</span>
                  <p className="service-description">運動機能の回復や維持を目的に、個別に合わせたリハビリテーションを行います。</p>

                </div>
              </div>
            </div>
          </div>

          {/* 4. Accessibility Section */}
          <div className="accessibility-header">
            <div className="header-label">
              <img src="/photo/assets/04_other/07_安心安全.png" alt="" />
              <span>Accessibility</span>
            </div>
            <h4>安心・快適にご利用いただくために</h4>
          </div>

          <div className="accessibility-container">
            <div className="accessibility-grid">
              <div className="access-item">
                <div className="access-icon-wrap">
                  <img src="/photo/assets/03_medical/08_バリアフリー.png" alt="車椅子対応の入り口" />
                </div>
                <div className="access-text">
                  <h6>車椅子対応の入り口</h6>
                  <p>スロープを設置しており、車椅子でもスムーズにご来院いただけます。</p>
                </div>
              </div>
              <div className="access-item">
                <div className="access-icon-wrap">
                  <img src="/photo/assets/03_medical/09_駐車場.png" alt="車椅子対応の駐車場" />
                </div>
                <div className="access-text">
                  <h6>車椅子対応の駐車場</h6>
                  <p>車椅子専用の駐車スペースを完備しております。</p>
                </div>
              </div>
              <div className="access-item">
                <div className="access-icon-wrap">
                  <img src="/photo/assets/04_other/08_サポート.png" alt="車椅子対応のトイレ" />
                </div>
                <div className="access-text">
                  <h6>車椅子対応のトイレ</h6>
                  <p>車椅子の方やベビーカーの方も安心してご利用いただけるバリアフリートイレです。</p>
                </div>
              </div>
            </div>
          </div>

          <p className="service-footer-note">
            ※ 診療科目は変更となる場合があります。詳細は医院までお問い合わせください。
          </p>

        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider-wrapper">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="wave-divider-svg"
        >
          <path
            d="M0,0 L0,50 C200,100 400,100 720,60 C1040,20 1240,20 1440,50 L1440,0 Z"
            fill="#e8f0fb"
          />
        </svg>
      </div>

      {/* Access Section */}
      <section className="access-section">
        <div className="section-container">
          <div className="access-header">
            <h2>アクセス</h2>
            <div className="access-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="access-content">
            <div className="access-info">
              <div className="access-method">
                <div className="access-method-icon">
                  <img src="/photo/assets/access/01_電車.png" alt="電車" />
                </div>
                <div className="access-method-text">
                  <h6>電車でお越しの方</h6>
                  <p>天竜浜名湖鉄道「三ヶ日駅」より<br/>徒歩約20分（東へ約910m）</p>
                </div>
              </div>
              <div className="access-method">
                <div className="access-method-icon">
                  <img src="/photo/assets/access/02_バス.png" alt="バス" />
                </div>
                <div className="access-method-text">
                  <h6>バスでお越しの方</h6>
                  <p>遠州鉄道バス 聖隷三方原病院経由 三ヶ日行き<br/>「宇志バス停」より北方徒歩5分</p>
                </div>
              </div>
              <div className="access-method">
                <div className="access-method-icon">
                  <img src="/photo/assets/access/03_車.png" alt="車" />
                </div>
                <div className="access-method-text">
                  <h6>お車でお越しの方</h6>
                  <p>駐車場をご用意しております。<br/>（台数・利用条件はお問い合わせください）</p>
                </div>
              </div>
            </div>
            <div className="access-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21807.205815202164!2d137.55273239146715!3d34.79978991325786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b2efb69d1f481%3A0xff7102d5b326d22f!2z44G_44Gj44GL44Gz5p2x5LuL6K236ICB5Lq65L-d5YGl5pa96Kit!5e1!3m2!1sja!2sjp!4v1777211323976!5m2!1sja!2sjp" 
                width="600" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
