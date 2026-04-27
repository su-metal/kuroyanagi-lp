"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="wrapper">

      {/* --- HEADER --- */}
      <header className="header">
        {/* Main Header (Top Bar) */}
        <div className="header-main">
          <div className="container header-main-inner">
            <div className="logo">
              <a href="/">
                <span className="logo-flex">
                  <span className="logo-mark">
                    <img src="/photo/assets/01_action/08_当院について.png" alt="" style={{ height: "48px" }} />
                  </span>
                  <span className="logo-text">
                    <span className="logo-sub">医療法人社団 早友会</span>
                    <span className="logo-main">クロヤナギ医院</span>
                  </span>
                </span>
              </a>
            </div>

            {/* PC Actions */}
            <div className="pc-actions hidden-mobile">
              <a href="#" className="header-card blue">
                <span className="icon">
                  <img src="/photo/assets/01_action/01_予約.png" alt="" />
                </span>
                <span className="info">
                  <span className="value">ご予約はこちら</span>
                </span>
              </a>
              <a href="#" className="header-card blue">
                <span className="icon">
                  <img src="/photo/assets/01_action/02_みっかび東.png" alt="" />
                </span>
                <span className="info">
                  <span className="value">みっかび東</span>
                  <span className="label">介護老人保健施設</span>
                </span>
              </a>
              <a href="tel:0535251113" className="header-card tel-card">
                <span className="tel-top">
                  <span className="icon tel-icon">
                    <img src="/photo/assets/01_action/03_電話.png" alt="" />
                  </span>
                  <span className="tel-value">053-525-1113</span>
                </span>
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
      
      {/* --- ABOUT --- */}
      <section className="about-section">
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
        </div>
        {/* 下境界：FEATURESへつなぐ波 */}
        <div className="about-wave-bottom" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C200,100 400,100 720,50 C1040,0 1240,0 1440,40 L1440,120 L0,120 Z" fill="#eef6ff" />
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
            <path d="M0,0 L0,80 Q720,20 1440,80 L1440,0 Z" fill="#eef6ff" />
          </svg>
        </div>
      </section>

      {/* --- MEDICAL GUIDE --- */}
      <section id="service" className="medical-guide-section">
        <div className="container medical-guide-inner">
          <div className="medical-guide-main">
            <div className="medical-guide-heading">
              <span className="medical-guide-en">Service</span>
              <h2 className="medical-guide-title">診療案内</h2>
              <p className="medical-guide-lead">
                地域の皆さまの健康を支えるため、幅広い診療とサービスに対応しています。
              </p>
            </div>

            <div className="medical-guide-grid">
              {[
                { title: "内科", icon: "/photo/assets/03_medical/01_内科.png" },
                { title: "呼吸器内科", icon: "/photo/assets/03_medical/05_呼吸器内科.png" },
                { title: "胃腸科（消化器科）", icon: "/photo/assets/03_medical/06_消化器内科.png" },
                { title: "整形外科", icon: "/photo/assets/assets_new/01_整形外科.png" },
                { title: "リハビリテーション科", icon: "/photo/assets/assets_new/02_リハビリテーション科.png" },
                { title: "婦人科", icon: "/photo/assets/assets_new/03_婦人科.png" },
                { title: "予防医療・検診", icon: "/photo/assets/03_medical/02_予防接種.png" },
                { title: "バリアフリー対応", icon: "/photo/assets/03_medical/08_バリアフリー.png" }
              ].map((item) => (
                <a href="#" className="medical-guide-card" key={item.title}>
                  <span className="medical-guide-icon">
                    <img src={item.icon} alt="" />
                  </span>
                  <span className="medical-guide-card-title">{item.title}</span>
                  <span className="medical-guide-arrow" aria-hidden="true">→</span>
                </a>
              ))}
            </div>

            <p className="medical-guide-note">
              ※ 診療科目は変更となる場合があります。詳細は医院までお問い合わせください。
            </p>
          </div>

          <aside className="medical-guide-copy" aria-label="診療案内のメッセージ">
            <span className="medical-guide-copy-label">診療案内</span>
            <p>どんなことでも<br />まずはご相談ください。</p>
          </aside>
        </div>
      </section>

      {/* --- NEWS --- */}
      <section className="news-section">
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
                  <span className="news-footer-arrow">
                    <img src="/photo/assets/02_navi/01_矢印右.png" alt="" />
                  </span>
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
            fill="#eef6ff"
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
