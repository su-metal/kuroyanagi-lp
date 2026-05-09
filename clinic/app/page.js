"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const HERO_VARIANT = "editorial"; // "current" に戻すと従来FVへ切り替え

const heroEditorialImages = {
  main: "/photo/hero-slider/hero-01.jpg",
  left: "/photo/hero-slider/hero-left.jpg",
  right: "/photo/hero-slider/hero-right.jpg",
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMedicalVisible, setIsMedicalVisible] = useState(false);

  const newsSectionRef = useRef(null);
  const medicalSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  // Hero Slider logic: Switch 3 images every 6 seconds
  const [heroActiveIndex, setHeroActiveIndex] = useState(0);
  const heroSliderImages = [
    "/photo/hero-slider/hero-01.jpg",
    "/photo/hero-slider/hero-02.jpg",
    "/photo/hero-slider/hero-03.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroActiveIndex((prev) => (prev + 1) % heroSliderImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSliderImages.length]);

  
  const facilityImages = [
    { src: "/photo/clinic_02.png", alt: "診察室", variant: "vertical" },
    { src: "/photo/assets/modern_clinic_reception_interior.png", alt: "待合室", variant: "wide" },
    { src: "/photo/img3.jpg", alt: "医療設備", variant: "vertical" },
    { src: "/photo/clinic_03.png", alt: "院内設備", variant: "wide" },
    { src: "/photo/access_entrance.jpg", alt: "医院入口", variant: "vertical" },
    { src: "/photo/clinic_011.png", alt: "診療環境", variant: "wide" },
  ];
  useEffect(() => {
    const medicalObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMedicalVisible(true);
        }
      },
      { threshold: 0.6, rootMargin: '0px 0px -100px 0px' }
    );
    if (medicalSectionRef.current) medicalObserver.observe(medicalSectionRef.current);

    const featuresObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFeaturesVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (featuresSectionRef.current) featuresObserver.observe(featuresSectionRef.current);

    return () => {
      medicalObserver.disconnect();
      featuresObserver.disconnect();
    };
  }, []);

  return (
    <div className="wrapper">

      {/* --- HEADER --- */}
      <header className={`header ${isMenuOpen ? "is-menu-open" : ""}`}>
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

            <nav className="pc-header-nav hidden-mobile" aria-label="グローバルナビゲーション">
              <a href="#service">診療案内</a>
              <a href="#facility">医院案内</a>
              <a href="#news">お知らせ</a>
              <a href="#">採用情報</a>
            </nav>

            <a href="#" className="header-reservation-btn hidden-mobile">
              <span className="reservation-icon" aria-hidden="true">
                <img src="/photo/assets/01_action/01_予約.png" alt="" />
              </span>
              <span>ご予約はこちら</span>
            </a>

            {/* Mobile Hamburger */}
            <button 
              className="hamburger show-mobile"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div
          className={`mobile-menu-backdrop ${isMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
        <nav
          id="mobile-menu"
          className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
        aria-label="モバイルナビゲーション"
      >
          <a href="#features" onClick={() => setIsMenuOpen(false)}>当院の特徴</a>
          <a href="#service" onClick={() => setIsMenuOpen(false)}>診療案内</a>
          <a href="#facility" onClick={() => setIsMenuOpen(false)}>施設紹介</a>
          <a href="#news" onClick={() => setIsMenuOpen(false)}>お知らせ</a>
          <a href="#access" onClick={() => setIsMenuOpen(false)}>アクセス</a>
          <div className="mobile-menu-actions">
            <a href="#" onClick={() => setIsMenuOpen(false)}>ご予約はこちら</a>
            <a href="tel:0535251113" onClick={() => setIsMenuOpen(false)}>053-525-1113</a>
          </div>
        </nav>
      </header>

      {/* --- HERO --- */}
      {HERO_VARIANT === "editorial" ? (
        <section className="hero hero-editorial">
          <div className="hero-editorial-shell">
            <div className="hero-editorial-stage">
              <div className="hero-mobile-wave hero-mobile-wave-1" aria-hidden="true" />
              <div className="hero-mobile-wave hero-mobile-wave-2" aria-hidden="true" />
              <div className="hero-mobile-wave hero-mobile-wave-3" aria-hidden="true" />
              <div className="hero-mobile-wave hero-mobile-wave-4" aria-hidden="true" />

              {/* Mobile Bird Illustration */}
              <div className="hero-editorial-bird show-mobile" aria-hidden="true">
                <img src="/photo/kamome.png" alt="" />
              </div>

              <figure className="hero-editorial-main-photo" aria-label="クロヤナギ医院の医師">
                {/* Mobile swoosh decoration */}
                <div className="hero-editorial-swoosh show-mobile" aria-hidden="true" />
                

                <div className="hero-editorial-slider">
                  {heroSliderImages.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={index === 0 ? "クロヤナギ医院の医師" : "クロヤナギ医院のヒーローイメージ"}
                      className={index === heroActiveIndex ? "active" : ""}
                      onError={(event) => { event.currentTarget.style.display = "none"; }}
                    />
                  ))}
                </div>

                {/* Mobile Access Badge */}
                <div className="hero-editorial-badge show-mobile">
                  <div className="badge-inner">
                    <span className="badge-place">三ヶ日駅から</span>
                    <span className="badge-time">徒歩 <span className="time-num">5</span> 分</span>
                  </div>
                </div>
              </figure>

              <div className="hero-editorial-catch">
                <h1>
                  <span className="catch-line">医療から介護まで、</span>
                  <span className="catch-line">この場所で。</span>
                </h1>
              </div>

              <div className="hero-editorial-schedule hidden-mobile">
                <div className="editorial-schedule-card">
                  <table className="editorial-schedule-table">
                    <thead>
                      <tr>
                        <th>診療受付時間</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日祝</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="time-slot">午前 8:30 - 12:00</td>
                        <td>●</td><td>●</td><td>●</td><td>●</td><td>●</td><td>●</td><td className="closed">×</td>
                      </tr>
                      <tr>
                        <td className="time-slot">午後 14:00 - 17:30</td>
                        <td>●</td><td>●</td><td>●</td><td className="closed">×</td><td>●</td><td className="closed">×</td><td className="closed">×</td>
                      </tr>
                    </tbody>
                  </table>
                  <footer className="schedule-footer">
                    <p>休診日：木・土午後、日・祝日</p>
                  </footer>
                </div>
              </div>

              <div className="hero-editorial-pager" aria-hidden="true">
                {heroSliderImages.map((src, index) => (
                  <span key={src} className={index === heroActiveIndex ? "active" : ""}></span>
                ))}
              </div>

              {/* Mobile Hero News */}
              <div className="hero-editorial-news show-mobile">
                <span className="news-date">2025.07.08</span>
                <p className="news-title">地域に根ざした医療を提供してまいります</p>
                <div className="news-underline"></div>
              </div>
            </div>

            <div className="hero-editorial-scroll">
              <span className="scroll-text">SCROLL</span>
              <div className="scroll-line"></div>
            </div>

            {/* Mobile Schedule Card (Appears after scrolling FV) */}
            <div className="hero-editorial-schedule-mobile show-mobile">
              <div className="editorial-schedule-card">
                <table className="editorial-schedule-table">
                  <thead>
                    <tr>
                      <th>診療受付時間</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日祝</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="time-slot">午前 8:30 - 12:00</td>
                      <td>●</td><td>●</td><td>●</td><td>●</td><td>●</td><td>●</td><td className="closed">×</td>
                    </tr>
                    <tr>
                      <td className="time-slot">午後 14:00 - 17:30</td>
                      <td>●</td><td>●</td><td>●</td><td className="closed">×</td><td>●</td><td className="closed">×</td><td className="closed">×</td>
                    </tr>
                  </tbody>
                </table>
                <footer className="schedule-footer">
                  <p>休診日：木・土午後、日・祝日</p>
                </footer>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-layout">

            {/* Left: Main Photo + Schedule Overlay */}
            <div className="hero-photo-wrap">
              {/* Photo with custom border-radius */}
              <div className="hero-photo-container">
                <img src="/photo/clinic.png" alt="クロヤナギ医院 外観" className="hero-photo" />
              </div>

              {/* Vertical staircase text (Moved here to overlap the photo) */}
              <div className="copy-vertical-wrapper">
                <h2 className="v-text staircase-text">
                  <span className="step-1 line-band">医療から介護まで、</span>
                  <span className="step-2 line-band">この場所で。</span>

                </h2>
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
                          <td className="time-slot">
                            <span className="time-period">午前</span> 8:30 - 12:00
                          </td>
                          <td>●</td>
                          <td>●</td>
                          <td>●</td>
                          <td>●</td>
                          <td>●</td>
                          <td>●</td>
                          <td className="closed">×</td>
                        </tr>
                        <tr>
                          <td className="time-slot">
                            <span className="time-period">午後</span> 14:00 - 17:30
                          </td>
                          <td>●</td>
                          <td>●</td>
                          <td>●</td>
                          <td className="closed">×</td>
                          <td>●</td>
                          <td className="closed">×</td>
                          <td className="closed">×</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="schedule-footer">
                    <p>木・土午後、日・祝日は休診です</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Illustration Area */}
            <div className="hero-copy-area">
              {/* Bird deco top-right */}
              <div className="deco-bird deco-bird-top">
                <img src="/photo/assets/07_ashirai/06_鳥.png" alt="" />
              </div>

              {/* Bird deco bottom-left */}
              <div className="deco-bird deco-bird-bottom">
                <img src="/photo/assets/07_ashirai/06_鳥.png" alt="" />
              </div>

              {/* Hill silhouette behind family */}
              <div className="hero-right-deco">
                <img src="/photo/assets/07_ashirai/11_丘シルエット.png" alt="" className="ashirai-hill" />
              </div>

              <div className="deco-family">
                <img src="/photo/assets/05_persons/08_家族グループ.png" alt="ご家族" />
              </div>
            </div>

            {/* New Horizontal Nav Buttons (PC only) - Moved to bottom */}
            <nav className="hero-quick-nav hidden-mobile">
              <ul className="quick-nav-list">
                <li><a href="#features" className="quick-nav-btn">当院の特長</a></li>
                <li><a href="#service" className="quick-nav-btn">診療案内</a></li>
                <li><a href="#access" className="quick-nav-btn">アクセス</a></li>
                <li><a href="#news" className="quick-nav-btn">お知らせ</a></li>
              </ul>
            </nav>

            </div>
          </div>
        </section>
      )}

      {/* --- FEATURES SECTION (Sticky Sidebar Editorial) --- */}
      <section id="features" className="features-sticky-section">
        <div className="features-sticky-container">
          <div className="features-sticky-sidebar">
            <div className="features-sticky-sidebar-inner">
              <span className="features-editorial-en">FEATURE</span>
              <h2 className="features-editorial-title">当院の特徴</h2>
              <div className="features-editorial-lead-copy">
                <p>安心して頼れる、<br />地域のかかりつけ医へ。</p>
              </div>
              <p className="features-editorial-sub">
                内科を中心に、予防医療や検査、日々の健康相談まで幅広く対応しています。患者さま一人ひとりの不安に耳を傾け、必要な医療へ丁寧につなげます。
              </p>
              <div className="features-editorial-action">
                <a href="#service" className="features-editorial-link">
                  <span>詳しく見る</span>
                  <span className="dot"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="features-sticky-content">
            <div className="features-card-list">
              {[
                { img: "/photo/assets/features/feature_01.png", title: "丁寧なカウンセリング", text: "患者さまのお悩みやご希望を丁寧に伺い、最適な治療をご提案します。" },
                { img: "/photo/assets/features/feature_02.png", title: "最新の医療設備", text: "正確な診断と安全な治療のために、最新の医療機器を導入しています。" },
                { img: "/photo/assets/features/feature_03.png", title: "経験豊富な医師が担当", text: "専門性の高い医師が、豊富な経験に基づいた質の高い医療を提供します。" },
                { img: "/photo/assets/features/feature_04.png", title: "通いやすい診療体制", text: "平日夜間や土曜診療にも対応。ご都合に合わせて通いやすい体制を整えています。" },
              ].map((item, idx) => (
                <div className="features-sticky-card" key={idx}>
                  <div className="features-sticky-card-img">
                    <img src={item.img} alt={item.title} />
                    <div className="features-sticky-card-badge">0{idx + 1}</div>
                  </div>
                  <div className="features-sticky-card-body">
                    <h3 className="features-sticky-card-title">{item.title}</h3>
                    <p className="features-sticky-card-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE, FACILITY, NEWS SHARED BACKGROUND AREA --- */}
      <div className="sections-with-bg-arc">

        {/* --- MEDICAL GUIDE --- */}

      <section id="service" className={`medical-guide-section ${isMedicalVisible ? 'is-visible' : ''}`} ref={medicalSectionRef}>
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
                { title: "内科", icon: "/photo/assets/medical_icon/01_聴診器十字.png" },
                { title: "呼吸器内科", icon: "/photo/assets/medical_icon/02_肺.png" },
                { title: "胃腸科（消化器科）", icon: "/photo/assets/medical_icon/03_消化器.png" },
                { title: "整形外科", icon: "/photo/assets/medical_icon/04_膝関節.png" },
                { title: "リハビリテーション科", icon: "/photo/assets/medical_icon/05_リハビリ.png" },
                { title: "婦人科", icon: "/photo/assets/medical_icon/06_子宮.png" },
                { title: "予防医療・検診", icon: "/photo/assets/medical_icon/07_問診票.png" },
                { title: "バリアフリー対応", icon: "/photo/assets/medical_icon/08_バリアフリー.png" }
              ].map((item) => (
                <a href="#" className="medical-guide-card" key={item.title}>
                  <span className="medical-guide-icon">
                    <img src={item.icon} alt="" />
                  </span>
                  <span className="medical-guide-card-title">{item.title}</span>
                </a>
              ))}
            </div>

            <p className="medical-guide-note">
              ※ 診療科目は変更となる場合があります。詳細は医院までお問い合わせください。
            </p>
          </div>

          <aside className="medical-guide-copy" aria-label="診療案内のメッセージ">
            {/* <span className="medical-guide-copy-label">診療案内</span> */}
            <p>どんなことでも<br />まずはご相談ください。</p>
          </aside>
        </div>
        <div className="service-facility-decoration" aria-hidden="true">
          <img className="service-facility-wave" src="/photo/assets/07_ashirai/10_波線.png" alt="" />
          <img className="service-facility-bird" src="/photo/assets/07_ashirai/06_鳥.png" alt="" />
        </div>
      </section>
      {/* --- FACILITY --- */}
      <section id="facility" className="facility-section">
        {/* Background shape */}
        <div className="facility-bg-shape" aria-hidden="true"></div>
        

        <div className="container">
          <div className="facility-layout">
            
            {/* Left: Content Card */}
            <div className="facility-content-card">
              <div className="facility-card-header">
                <span className="facility-label">ー 施設紹介</span>
                <h2 className="facility-main-title">FACILITY</h2>
              </div>
              
              <div className="facility-text-group">
                <h3 className="facility-lead">
                  最新の設備・機器を揃えた<br />
                  快適で安心できる診療環境
                </h3>
                <p className="facility-desc">
                  皆さまに安心して受診していただけるよう、清潔で開放感のある空間づくりを心がけています。
                  最新の医療機器を導入し、精密な診断と適切な治療を行える環境を整えております。
                </p>
              </div>

            </div>

            {/* Right: Images Slider (Marquee) */}
            <div className="facility-images-area">
              <div className="facility-image-grid">
                {[0, 1].map((setIndex) => (
                  <div className="facility-image-set" aria-hidden={setIndex === 1} key={setIndex}>
                    {facilityImages.map((image) => (
                      <div className={`facility-img-item ${image.variant}`} key={`${setIndex}-${image.src}`}>
                        <img src={image.src} alt={setIndex === 0 ? image.alt : ""} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              
              {/* Mobile Slides (Will be handled by CSS) */}
              <div className="facility-mobile-collage" aria-label="施設紹介の写真">
                <div className="facility-mobile-photo main">
                  <img src="/photo/assets/modern_clinic_reception_interior.png" alt="待合室" />
                </div>
                <div className="facility-mobile-photo">
                  <img src="/photo/doctor.png" alt="診療風景" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEWS --- */}
      <section id="news" className="news-section">
        <div className="container">
          <div className="news-inner">
            
          {/* Left Column */}
          <div className="news-title-area">
            <div className="news-label-group">
              <span className="news-label-deco"></span>
              <span className="news-label-text">トピックス</span>
            </div>
            <h2 className="news-main-title">NEWS</h2>
            <a href="#" className="news-btn-all">一覧</a>
          </div>

          {/* Right Column */}
          <div className="news-list-area">
            {[
              {
                date: "2026.04.24",
                tag: "information",
                title: "5月11日 12:00まで！ゴールデンウィークはしっかり自分磨き！オンラインショップ10%OFFキャンペーン",
              },
              {
                date: "2026.04.01",
                tag: "information",
                title: "人気アイテムがリニューアル発売！毛穴づまりケアセット『ドットウォッシー』",
              },
              {
                date: "2026.03.23",
                tag: "information",
                title: "「40オヤジ」のための本音スタイルマガジン『Hot-Dog PRESS』に掲載されました",
              },
            ].map((item, index) => (
              <div key={index} className="news-item">
                <div className="news-meta">
                  <span className="news-date">{item.date}</span>
                  <span className="news-tag">{item.tag}</span>
                </div>
                <p className="news-title">{item.title}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
      </div>

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
          />
        </svg>
      </div>

      {/* Access Section */}
      <section id="access" className="access-section">
        <div className="access-heading-row">
          <div className="access-title-block">
            <span className="access-en">ACCESS</span>
            <h2>アクセス</h2>
          </div>

          <div className="access-address-block">
            <div className="access-address-content">
              <p>
                〒431-1404<br />
                静岡県浜松市浜名区三ヶ日町宇志34-1
              </p>
              <a href="https://maps.google.com/?q=クロヤナギ医院" target="_blank" rel="noopener noreferrer" className="access-map-link">
                Googleマップで見る
                <span className="icon">↗</span>
              </a>
            </div>
          </div>

          <Link href="/access" className="access-detail-btn">
            <span>詳しくみる</span>
            <span className="arrow">→</span>
          </Link>
        </div>

        <div className="access-method-card">
          <div className="access-method">
              <div className="access-method-icon">
                <img src="/photo/assets/access/01_電車.png" alt="" />
              </div>
              <div className="access-method-text">
                <h6>電車でお越しの方</h6>
                <p>天竜浜名湖鉄道「三ヶ日駅」より<br />徒歩約20分（東へ約910m）</p>
              </div>
            </div>
            <div className="access-method">
              <div className="access-method-icon">
                <img src="/photo/assets/access/02_バス.png" alt="" />
              </div>
              <div className="access-method-text">
                <h6>バスでお越しの方</h6>
                <p>遠州鉄道バス 聖隷三方原病院経由 三ヶ日行き<br />「宇志バス停」より北方徒歩5分</p>
              </div>
            </div>
            <div className="access-method">
              <div className="access-method-icon">
                <img src="/photo/assets/access/03_車.png" alt="" />
              </div>
              <div className="access-method-text">
                <h6>お車でお越しの方</h6>
                <p>駐車場をご用意しております。<br />（台数・利用条件はお問い合わせください）</p>
              </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-upper">
            <div className="footer-info">
              <a href="/" className="footer-logo" aria-label="クロヤナギ医院 トップへ">
                <span className="footer-logo-mark">
                  <img src="/photo/assets/01_action/08_当院について.png" alt="" />
                </span>
                <span className="footer-logo-text">
                  <span className="footer-logo-sub">医療法人社団 早友会</span>
                  <span className="footer-logo-main">クロヤナギ医院</span>
                  <span className="footer-logo-en">KUROYANAGI CLINIC</span>
                </span>
              </a>

              <div className="footer-contact">
                <p>〒431-1404</p>
                <p>静岡県浜松市浜名区三ヶ日町宇志34-1</p>
                <a href="tel:0535251113" className="footer-contact-line">
                  <span>TEL</span>
                  <strong>053-525-1113</strong>
                </a>
                <p className="footer-contact-line footer-fax">
                  <span>FAX</span>
                  <strong>053-525-1114</strong>
                </p>
              </div>

              <div className="footer-schedule-wrap">
                <table className="footer-schedule-table">
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
                      <th>8:30-12:00</th>
                      <td>●</td>
                      <td>●</td>
                      <td>●</td>
                      <td>●</td>
                      <td>●</td>
                      <td>●</td>
                      <td>－</td>
                    </tr>
                    <tr>
                      <th>14:30-17:30</th>
                      <td>●</td>
                      <td>●</td>
                      <td>●</td>
                      <td>－</td>
                      <td>●</td>
                      <td>●</td>
                      <td>－</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ul className="footer-notes">
                <li>※ 予約優先</li>
                <li>※ 木曜午後、日曜、祝日は休診となります</li>
                <li>※ 初診の方は診療時間が終了する30分前までにご来院ください</li>
              </ul>
            </div>

            <div className="footer-action-area">
              <div className="footer-cta-row">
                <a href="tel:0535251113" className="footer-cta footer-cta-primary">
                  <span className="footer-cta-icon">
                    <img src="/photo/assets/01_action/03_電話.png" alt="" />
                  </span>
                  <span>053-525-1113</span>
                </a>
                <a href="#" className="footer-cta footer-cta-outline">
                  <span className="footer-cta-icon">
                    <img src="/photo/assets/01_action/01_予約.png" alt="" />
                  </span>
                  <span>web予約</span>
                </a>
              </div>

              <div className="footer-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21807.205815202164!2d137.55273239146715!3d34.79978991325786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b2efb69d1f481%3A0xff7102d5b326d22f!2z44G_44Gj44GL44Gz5p2x5LuL6K236ICB5Lq65L-d5YGl5pa96Kit!5e1!3m2!1sja!2sjp!4v1777211323976!5m2!1sja!2sjp"
                  width="600"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="クロヤナギ医院 Google Map"
                ></iframe>
              </div>
            </div>
          </div>

          <nav className="footer-nav" aria-label="フッターナビゲーション">
            {[
              { label: "ホーム", href: "/" },
              { label: "当院の特徴", href: "#features" },
              { label: "診療案内", href: "#service" },
              { label: "施設・機器紹介", href: "#facility" },
              { label: "アクセス", href: "#access" },
              { label: "よくある質問", href: "#" },
              { label: "お知らせ", href: "#" },
            ].map((item) => (
              <a href={item.href} className="footer-nav-link" key={item.label}>
                <span>{item.label}</span>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </nav>

          <div className="footer-bottom">
            <div className="footer-policy-links">
              <a href="#">プライバシーポリシー</a>
              <span aria-hidden="true">|</span>
              <a href="#">サイトマップ</a>
            </div>
            <p>© KUROYANAGI CLINIC All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      {/* Mobile Fixed Action Bar */}
      <div className="mobile-action-bar show-mobile">
        <a href="#" className="action-btn-main">online reservation</a>
      </div>
    </div>
  );
}
