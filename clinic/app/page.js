"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const HERO_VARIANT = "editorial"; // "current" に戻すと従来FVへ切り替え

const heroEditorialImages = {
  main: "/photo/hero-slider/hero-01.jpg",
  left: "/photo/hero-slider/hero-left.jpg",
  right: "/photo/hero-slider/hero-right.jpg",
};

const featureItems = [
  { img: "/photo/assets/features/feature_01.png", label: "CONSULTATION", title: "丁寧なカウンセリング", text: "患者さまのお悩みやご希望を丁寧に伺い、最適な治療をご提案します。" },
  { img: "/photo/assets/features/feature_02.png", label: "EQUIPMENT", title: "最新の医療設備", text: "正確な診断と安全な治療のために、最新の医療機器を導入しています。" },
  { img: "/photo/assets/features/feature_03.png", label: "DOCTOR", title: "経験豊富な医師が担当", text: "専門性の高い医師が、豊富な経験に基づいた質の高い医療を提供します。" },
  { img: "/photo/assets/features/feature_04.png", label: "ACCESS", title: "通いやすい診療体制", text: "平日夜間や土曜診療にも対応。ご都合に合わせて通いやすい体制を整えています。" },
];

const featureIntro = {
  isIntro: true,
  label: "INTRODUCTION",
  title: "当院の特徴",
  text: "内科を中心に、予防医療や検査、日々の健康相談まで幅広く対応しています。患者さま一人ひとりの不安に耳を傾け、必要な医療へ丁寧につなげます。",
};

const featureStackItems = [featureIntro, ...featureItems];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMedicalVisible, setIsMedicalVisible] = useState(false);

  const newsSectionRef = useRef(null);
  const medicalSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

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

  
  const facilityItems = [
    { src: "/photo/clinic_011.png", title: "診療環境", desc: "患者さまが安心して治療に専念できるよう、常に清潔で快適な環境づくりに努めています。" },
    { src: "/photo/clinic_02.png", title: "診察室", desc: "プライバシーに配慮した、清潔感のある診察室です。リラックスしてお話しいただけます。" },
    { src: "/photo/assets/modern_clinic_reception_interior.png", title: "待合室", desc: "開放感があり、ゆったりとお待ちいただける空間です。落ち着いたインテリアで統一しています。" },
    { src: "/photo/img3.jpg", title: "医療設備", desc: "正確な診断と安全な治療のために、最新の医療機器を導入しています。" },
    { src: "/photo/clinic_03.png", title: "院内設備", desc: "院内各所に最新の設備を整え、スムーズな検査と診療を行えるよう配慮しています。" },
    { src: "/photo/access_entrance.jpg", title: "医院入口", desc: "三ヶ日駅から徒歩圏内にあり、車椅子の方でもスムーズに入っていただけるバリアフリー設計です。" },
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

    const updateActiveFeature = () => {
      const section = featuresSectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const stickyEndOffset = viewportHeight * 0.68;
      const scrollableDistance = Math.max(rect.height - stickyEndOffset, 1);
      const scrolledInside = Math.min(
        Math.max(-rect.top, 0),
        scrollableDistance
      );
      const revealDistance = scrollableDistance * 0.82;
      const progress = Math.min(scrolledInside / revealDistance, 1);
      const nextIndex = Math.min(
        featureStackItems.length - 1,
        Math.floor(progress * featureStackItems.length)
      );

      setActiveFeatureIndex(nextIndex);
    };

    updateActiveFeature();
    window.addEventListener("scroll", updateActiveFeature, { passive: true });
    window.addEventListener("resize", updateActiveFeature);

    return () => {
      medicalObserver.disconnect();
      featuresObserver.disconnect();
      window.removeEventListener("scroll", updateActiveFeature);
      window.removeEventListener("resize", updateActiveFeature);
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

      {/* --- NEWS --- */}
      <section id="news" className="news-section">
        <div className="container">
          <div className="news-inner">
            
          {/* Left Column */}
          <div className="news-title-area">
            <span className="section-heading-en news-label-text">NEWS</span>
            <h2 className="section-heading-ja news-main-title">お知らせ</h2>
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

      {/* --- FEATURES SECTION (Sticky Sidebar Editorial) --- */}
      <section id="features" className={`features-sticky-section ${isFeaturesVisible ? "is-visible" : ""}`} ref={featuresSectionRef}>
        <div className="features-sticky-container">
          <div className="features-sticky-sidebar">
            <div className="features-sticky-sidebar-inner">
              <span className="section-heading-en features-editorial-en">FEATURE</span>
              <div className="features-editorial-lead-copy">
                <p>安心して頼れる、<br />地域のかかりつけ医へ。</p>
              </div>
              <ol className="features-timeline" aria-label="特徴の現在位置">
                {featureItems.map((item, idx) => (
                  <li
                    className={`features-timeline-item ${activeFeatureIndex === idx + 1 ? "is-active" : ""}`}
                    key={item.title}
                    aria-current={activeFeatureIndex === idx + 1 ? "step" : undefined}
                  >
                    <span className="features-timeline-number">0{idx + 1}</span>
                    <span className="features-timeline-line"></span>
                    <span className="features-timeline-label">{item.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="features-sticky-content">
            <div className="features-card-list">
              {featureStackItems.map((item, idx) => {
                const featureNumber = idx;

                return (
                  <article
                    className={`features-sticky-card ${item.isIntro ? "is-intro" : ""} ${idx <= activeFeatureIndex ? "is-stacked" : ""} ${idx === activeFeatureIndex ? "is-active" : ""}`}
                    data-feature-index={idx}
                    key={item.title}
                  >
                    {!item.isIntro && (
                      <span className="features-sticky-card-number" aria-hidden="true">0{featureNumber}</span>
                    )}
                    {!item.isIntro && (
                      <div className="features-sticky-card-img">
                        <img src={item.img} alt={item.title} />
                      </div>
                    )}
                    <div className="features-sticky-card-body">
                      <span className="features-sticky-card-label">
                        {item.isIntro ? "FEATURE / INTRODUCTION" : `FEATURE 0${featureNumber} / ${item.label}`}
                      </span>
                      <h3 className="features-sticky-card-title">{item.title}</h3>
                      <p className="features-sticky-card-text">{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE, FACILITY, NEWS SHARED BACKGROUND AREA --- */}
      <div className="sections-with-bg-arc">

        {/* --- MEDICAL GUIDE (INFORMATION) --- */}
        <section id="service" className={`medical-guide-section ${isMedicalVisible ? 'is-visible' : ''}`} ref={medicalSectionRef}>
          <div className="container information-container">
            {/* Left Sidebar */}
            <div className="info-left-sidebar">
              <span className="info-en">SERVICE</span>
              <h2 className="info-ja">診療案内</h2>
            </div>

            {/* Right Content */}
            <div className="info-right-content">
              {/* Lead Copy */}
              <div className="info-lead">
                <p>地域の皆さまの健康を支えるため、<br />幅広い診療とサービスに対応しています。</p>
              </div>

              {/* Main Cards */}
              <div className="info-main-cards">
                <div className="info-card main-card">
                  <div className="info-card-icon">
                    <img src="/photo/assets/medical_icon/01_聴診器十字.png" alt="" />
                  </div>
                  <h3 className="info-card-title">内科</h3>
                  <div className="info-card-line"></div>
                </div>
                <div className="info-card main-card">
                  <div className="info-card-icon">
                    <img src="/photo/assets/medical_icon/03_消化器.png" alt="" />
                  </div>
                  <h3 className="info-card-title">消化器科</h3>
                  <div className="info-card-line"></div>
                </div>
              </div>

              {/* Sub Cards */}
              <div className="info-sub-cards">
                {[
                  { title: "呼吸器内科", icon: "/photo/assets/medical_icon/02_肺.png" },
                  { title: "整形外科", icon: "/photo/assets/medical_icon/04_膝関節.png" },
                  { title: "リハビリテーション科", icon: "/photo/assets/medical_icon/05_リハビリ.png" },
                  { title: "婦人科", icon: "/photo/assets/medical_icon/06_子宮.png" }
                ].map((item) => (
                  <div className="info-card sub-card" key={item.title}>
                    <div className="info-card-icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <h3 className="info-card-title">{item.title}</h3>
                    <div className="info-card-line"></div>
                  </div>
                ))}
              </div>

              <p className="info-note">
                ※ 少数ですが、地域の方に向けた外来診療も行います。
              </p>

              {/* Schedule Info */}
              <div className="info-schedule-container">
                <div className="info-schedule-row">
                  <div className="info-schedule-col">
                    <div className="schedule-header">
                      <span className="schedule-pill">診療時間</span>
                      <span className="schedule-connector"></span>
                      <span className="schedule-time">9:00 - 17:30</span>
                    </div>
                    <p className="schedule-sub">※必要なときには24時間365日往診します</p>
                  </div>
                  <div className="info-schedule-col">
                    <div className="schedule-header">
                      <span className="schedule-pill">休診日</span>
                      <span className="schedule-connector"></span>
                      <span className="schedule-time">土曜・日曜・祝日・年末年始</span>
                    </div>
                    <p className="schedule-sub">※必要なときには24時間365日往診します</p>
                  </div>
                </div>
              </div>



            </div>
          </div>
          <div className="service-facility-decoration" aria-hidden="true">
            <img className="service-facility-wave" src="/photo/assets/07_ashirai/10_波線.png" alt="" />
            <img className="service-facility-bird" src="/photo/assets/07_ashirai/06_鳥.png" alt="" />
          </div>
        </section>

        {/* --- FACILITY --- */}
        <section id="facility" className="facility-section">
          <div className="facility-header">
            <h2 className="facility-title">KUROYANAGI CLINIC FACILITY</h2>
          </div>
          <div className="facility-strip-container">
            <div className="facility-strip">
              {facilityItems.map((item, idx) => (
                <article className="facility-strip-item" key={idx}>
                  <div className="facility-strip-img">
                    <img src={item.src} alt={item.title} />
                  </div>
                </article>
              ))}
              {/* Infinite loop simulation or just double the items for marquee if needed, 
                  but for the "simple" look, a clean row might be better. 
                  Adding a second set for a seamless scroll effect if we want animation. */}
              {facilityItems.map((item, idx) => (
                <article className="facility-strip-item" key={`extra-${idx}`}>
                  <div className="facility-strip-img">
                    <img src={item.src} alt={item.title} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- ATMOSPHERE SECTION --- */}
        <section className="atmosphere-section">
          <div className="container atmosphere-container">
            <div className="atmosphere-visual">
              <div className="atmosphere-img-wrap left">
                <img src="/photo/hero-slider/hero-033.jpg" alt="クロヤナギ医院・みっかび東の外観" />
              </div>
              <div className="atmosphere-img-wrap right">
                <img src="/photo/hero-slider/hero-022.jpg" alt="三ヶ日の豊かな自然" />
              </div>
              
              {/* Decorations */}
              <div className="atmosphere-deco deco-cloud-1">
                <img src="/photo/assets/07_ashirai/editorial_soft_clouds.png" alt="" />
              </div>
              <div className="atmosphere-deco deco-cloud-2">
                <img src="/photo/assets/07_ashirai/editorial_soft_clouds.png" alt="" />
              </div>
              <div className="atmosphere-deco deco-sakura-1">
                <img src="/photo/assets/07_ashirai/editorial_sakura_petals.png" alt="" />
              </div>
              <div className="atmosphere-deco deco-person-bench">
                <img src="/photo/assets/05_persons/clean_person_bench_dog.png" alt="" />
              </div>
              <div className="atmosphere-deco deco-leaves-1">
                <img src="/photo/assets/07_ashirai/13_葉.png" alt="" />
              </div>
            </div>

            <div className="atmosphere-content">
              <div className="atmosphere-text-box">
                <h2 className="atmosphere-title">
                  地域に寄り添う、<br />健やかな暮らし。
                </h2>
                <p className="atmosphere-desc">
                  クロヤナギ医院は、地域の皆さまが安心して健やかな毎日を過ごせるよう、医療だけでなく生活のサポートにも取り組んでいます。<br /><br />
                  併設されている『みっかび東』との連携により、リハビリテーションや介護の面からも皆さまの暮らしを支えます。
                </p>
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
