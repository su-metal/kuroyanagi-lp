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
  { img: "/photo/assets/features/feature_01.png", label: "CONSULTATION", title: "丁寧なカウンセリング", text: "患者さまのお悩みやご希望を丁寧に伺い、最適な治療をご提案します。", points: [{ icon: "chat", title: "丁寧な問診", text: "小さな不安も伺い、症状の背景まで確認します。" }, { icon: "note", title: "個別提案", text: "生活状況に合わせた治療方針をご案内します。" }] },
  { img: "/photo/assets/features/feature_02.png", label: "EQUIPMENT", title: "最新の医療設備", text: "正確な診断と安全な治療のために、最新の医療機器を導入しています。", points: [{ icon: "scope", title: "精密診断", text: "検査結果をもとに、状態を丁寧に見極めます。" }, { icon: "shield", title: "安全配慮", text: "安心して受診できる診療環境を整えています。" }] },
  { img: "/photo/assets/features/feature_03.png", label: "DOCTOR", title: "経験豊富な医師が担当", text: "専門性の高い医師が、豊富な経験に基づいた質の高い医療を提供します。", points: [{ icon: "doctor", title: "専門性", text: "地域医療で培った経験を診療に活かします。" }, { icon: "heart", title: "継続診療", text: "長く相談できる関係づくりを大切にします。" }] },
  { img: "/photo/assets/features/feature_04.png", label: "ACCESS", title: "通いやすい診療体制", text: "平日夜間や土曜診療にも対応。ご都合に合わせて通いやすい体制を整えています。", points: [{ icon: "calendar", title: "平日夜間も診療", text: "お仕事帰りでも安心してご来院いただけます。" }, { icon: "clock", title: "土曜も診療", text: "平日お忙しい方も通院しやすい体制です。" }] },
];

const featureIntro = {
  title: "当院の特徴",
  text: "内科を中心に、予防医療や検査、日々の健康相談まで幅広く対応しています。患者さま一人ひとりの不安に耳を傾け、必要な医療へ丁寧につなげます。",
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMedicalVisible, setIsMedicalVisible] = useState(false);

  const newsSectionRef = useRef(null);
  const medicalSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);
  const parallaxRef = useRef(null);
  const parallaxTargetY = useRef(0);
  const parallaxCurrentY = useRef(0);
  const parallaxRafId = useRef(null);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isFeaturesReleasing, setIsFeaturesReleasing] = useState(false);

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

  // Dynamic Parallax Logic with Smooth Lerp
  useEffect(() => {
    let isInitialCalculation = true;

    const updateParallax = () => {
      // Lerp logic: current = current + (target - current) * factor
      parallaxCurrentY.current += (parallaxTargetY.current - parallaxCurrentY.current) * 0.08;
      
      if (parallaxRef.current) {
        parallaxRef.current.style.setProperty("--parallax-y", `${parallaxCurrentY.current}%`);
      }
      
      parallaxRafId.current = requestAnimationFrame(updateParallax);
    };

    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const parent = parallaxRef.current.parentElement;
      const rect = parent.getBoundingClientRect();
      const winH = window.innerHeight;

      // Only calculate if the section is partially visible in the viewport
      if (rect.top < winH && rect.bottom > 0) {
        // Calculate relative position (-1.0 to 1.0)
        const center = (rect.top + rect.bottom) / 2;
        const viewportCenter = winH / 2;
        const distance = center - viewportCenter;
        
        // Intensity of movement (adjustment factor)
        parallaxTargetY.current = (distance / winH) * 15; 

        // On mount/reload, sync current position immediately to avoid the sliding effect
        if (isInitialCalculation) {
          parallaxCurrentY.current = parallaxTargetY.current;
          isInitialCalculation = false;
        }
      }
    };

    // Start the animation loop
    parallaxRafId.current = requestAnimationFrame(updateParallax);

    // Perform initial calculation immediately for reload scroll restoration
    handleScroll();

    // Listen for scroll events (both Lenis and native for reliability)
    if (window.lenis) {
      window.lenis.on("scroll", handleScroll);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (parallaxRafId.current) cancelAnimationFrame(parallaxRafId.current);
      if (window.lenis) window.lenis.off("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const facilityItems = [
    { src: "/photo/slider/01.jpg", title: "診療環境", desc: "患者さまが安心して治療に専念できるよう、常に清潔で快適な環境づくりに努めています。" },
    { src: "/photo/slider/02.jpg", title: "診察室", desc: "プライバシーに配慮した、清潔感のある診察室です。リラックスしてお話しいただけます。" },
    { src: "/photo/slider/03.jpg", title: "待合室", desc: "開放感があり、ゆったりとお待ちいただける空間です。落ち着いたインテリアで統一しています。" },
    { src: "/photo/slider/04.jpg", title: "医療設備", desc: "正確な診断と安全な治療のために、最新の医療機器を導入しています。" },
    { src: "/photo/slider/05.jpg", title: "院内設備", desc: "院内各所に最新の設備を整え、スムーズな検査と診療を行えるよう配慮しています。" },
    { src: "/photo/slider/06.jpg", title: "医院入口", desc: "三ヶ日駅から徒歩圏内にあり、車椅子の方でもスムーズに入っていただけるバリアフリー設計です。" },
    { src: "/photo/slider/07.jpg", title: "診療環境 (2)", desc: "患者さまが安心して治療に専念できるよう、常に清潔で快適な環境づくりに努めています。" },
    { src: "/photo/slider/08.jpg", title: "診察室 (2)", desc: "プライバシーに配慮した、清潔感のある診察室です。リラックスしてお話しいただけます。" },
    { src: "/photo/slider/09.jpg", title: "医療設備 (2)", desc: "正確な診断と安全な治療のために、最新の医療機器を導入しています。" },
    { src: "/photo/slider/10.jpg", title: "院内設備 (2)", desc: "院内各所に最新の設備を整え、スムーズな検査と診療を行えるよう配慮しています。" },
  ];

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (!isMenuOpen) {
      window.lenis?.start?.();
      html.classList.remove("is-mobile-menu-open");
      body.classList.remove("is-mobile-menu-open");
      return;
    }

    const scrollY = window.scrollY;
    html.classList.add("is-mobile-menu-open");
    body.classList.add("is-mobile-menu-open");
    body.dataset.scrollLockY = String(scrollY);
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    window.lenis?.stop?.();

    return () => {
      const lockedY = Number(body.dataset.scrollLockY || 0);
      html.classList.remove("is-mobile-menu-open");
      body.classList.remove("is-mobile-menu-open");
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      delete body.dataset.scrollLockY;
      window.lenis?.start?.();
      window.scrollTo(0, lockedY);
    };
  }, [isMenuOpen]);

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

    const featureCards = Array.from(document.querySelectorAll('.features-sticky-card'));
    const featureCardList = document.querySelector('.features-card-list');
    let featureRafId = null;

    const updateActiveFeature = () => {
      featureRafId = null;

      if (!featuresSectionRef.current || !featureCardList || featureCards.length === 0) {
        return;
      }

      const scrollY = window.scrollY;
      const triggerY = scrollY + window.innerHeight * 0.48;
      const sectionTop = featuresSectionRef.current.getBoundingClientRect().top + scrollY;
      const sectionBottom = sectionTop + featuresSectionRef.current.offsetHeight;
      const listTop = featureCardList.getBoundingClientRect().top + scrollY;
      const shouldReleaseFeatures = scrollY + window.innerHeight >= sectionBottom - 80;

      setIsFeaturesReleasing((currentValue) => (
        currentValue === shouldReleaseFeatures ? currentValue : shouldReleaseFeatures
      ));

      if (triggerY < sectionTop) {
        setActiveFeatureIndex(0);
        return;
      }

      if (triggerY > sectionBottom) {
        setActiveFeatureIndex(featureCards.length - 1);
        return;
      }

      const nextIndex = featureCards.reduce((currentIndex, card) => {
        const cardIndex = Number(card.getAttribute('data-feature-index'));
        const cardTop = listTop + card.offsetTop;

        return triggerY >= cardTop ? cardIndex : currentIndex;
      }, 0);

      setActiveFeatureIndex((currentIndex) => (
        currentIndex === nextIndex ? currentIndex : nextIndex
      ));
    };

    const scheduleFeatureUpdate = () => {
      if (featureRafId !== null) return;
      featureRafId = window.requestAnimationFrame(updateActiveFeature);
    };

    updateActiveFeature();
    window.addEventListener('scroll', scheduleFeatureUpdate, { passive: true });
    window.addEventListener('resize', scheduleFeatureUpdate);

    return () => {
      medicalObserver.disconnect();
      featuresObserver.disconnect();
      window.removeEventListener('scroll', scheduleFeatureUpdate);
      window.removeEventListener('resize', scheduleFeatureUpdate);
      if (featureRafId !== null) {
        window.cancelAnimationFrame(featureRafId);
      }
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

            {/* Mobile Hamburger (Default PC structure) */}
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

        {/* --- MOBILE REDESIGN HEADER ELEMENTS --- */}
        <div className="header-logo-card show-mobile">
          <div className="logo-mark">
            <img src="/photo/assets/01_action/08_当院について.png" alt="" />
          </div>
          <div className="logo-text">
            <span className="logo-sub">医療法人社団 早友会</span>
            <span className="logo-main">クロヤナギ医院</span>
          </div>
        </div>

        <button 
          className="header-menu-button show-mobile"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <button
          className="desktop-side-menu-button hidden-mobile"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="desktop-side-menu-lines" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="desktop-side-menu-text">MENU OPEN</span>
        </button>

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
          <button
            type="button"
            className="mobile-menu-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="メニューを閉じる"
          >
            <span></span>
            <span></span>
          </button>
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
              <figure className="hero-editorial-main-photo" aria-label="クロヤナギ医院の医師">
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
            <div className="news-title-area">
              <div className="news-label-group">
                <span className="news-label-deco" />
                <span className="news-label-text">NEWS</span>
              </div>
              <h2 className="news-main-title">お知らせ</h2>
            </div>
            <div className="news-list-area">
              {[
                { date: "2025.07.08", tag: "お知らせ", title: "地域に根ざした医療を提供してまいります" },
                { date: "2025.06.20", tag: "健診・予防接種", title: "夏の健康診断の予約受付を開始しました" },
                { date: "2025.05.15", tag: "お知らせ", title: "マイナンバーカード保険証の利用が可能です" }
              ].map((item, idx) => (
                <article className="news-item" key={idx}>
                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                    <span className="news-tag">{item.tag}</span>
                  </div>
                  <h3 className="news-title">{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* --- FEATURES SECTION (Sticky Sidebar Editorial) --- */}
      <section id="features" className={`features-sticky-section ${isFeaturesVisible ? "is-visible" : ""} ${isFeaturesReleasing ? "is-release-phase" : ""}`} ref={featuresSectionRef}>
        <div className="features-sticky-container">
          <div className="features-sticky-sidebar">
            <div className="features-sticky-sidebar-inner">
              <span className="section-heading-en features-editorial-en">FEATURE</span>
              <div className="features-editorial-lead-copy">
                <p>
                  <span className="features-lead-line">安心して頼れる、</span>
                  <span className="features-lead-line">地域のかかりつけ医へ。</span>
                </p>
              </div>
              <ol className="features-timeline" aria-label="特徴の現在位置">
                {featureItems.map((item, idx) => (
                  <li
                    className={`features-timeline-item ${activeFeatureIndex === idx ? "is-active" : ""}`}
                    key={item.title}
                    aria-current={activeFeatureIndex === idx ? "step" : undefined}
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
            <div className="features-intro-lead">
              <span className="features-intro-lead-label">INTRODUCTION</span>
              <h3 className="features-intro-lead-title">{featureIntro.title}</h3>
              <p className="features-intro-lead-text">{featureIntro.text}</p>
            </div>
            <div className="features-card-list">
              {featureItems.map((item, idx) => {
                const featureNumber = idx + 1;

                return (
                  <article
                    className={`features-sticky-card ${idx < activeFeatureIndex ? "is-passed" : ""} ${idx === activeFeatureIndex ? "is-active" : ""}`}
                    data-feature-index={idx}
                    key={item.title}
                  >
                    <div className="feature-unified-card">
                      <span className="feature-unified-side-label" aria-hidden="true" />
                      <span className="feature-unified-number" aria-hidden="true">
                        0{featureNumber}
                      </span>
                      <span className="feature-unified-dots" aria-hidden="true"></span>
                      <div className="feature-unified-img">
                        <img src={item.img} alt={item.title} />
                      </div>
                      <div className="feature-unified-content">
                        <div className="feature-unified-label-wrap">
                          <span className="feature-unified-label">0{featureNumber} / {item.label}</span>
                        </div>
                        <h3 className="feature-unified-title">{item.title}</h3>
                        <p className="feature-unified-text">{item.text}</p>
                        <ul className="feature-unified-points" aria-label={`${item.title}のポイント`}>
                          {item.points.map((point) => (
                            <li key={point.title}>
                              <span className={`feature-unified-point-icon is-${point.icon}`} aria-hidden="true"></span>
                              <span className="feature-unified-point-title">{point.title}</span>
                              <span className="feature-unified-point-text">{point.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-parallax-break" aria-label="三ヶ日の風景">
        <div className="section-parallax-break-inner" aria-hidden="true" ref={parallaxRef} />
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

        {/* --- RELATED FACILITY --- */}
        <section className="related-facility-section" aria-labelledby="related-facility-title">
          <div className="container related-facility-container">
            <div className="related-facility-card">
              <div className="related-facility-content">
                <span className="related-facility-label">RELATED FACILITY</span>
                <h2 id="related-facility-title" className="related-facility-kicker">併設施設のご案内</h2>
                <h3 className="related-facility-title">みっかび東</h3>
                <p className="related-facility-desc">
                  クロヤナギ医院に併設する施設として、地域での暮らしを支えています。
                </p>

                <a
                  href="https://kuroyanagi-clinic.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="related-facility-btn"
                >
                  詳しく見る
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="related-facility-photo" aria-hidden="true">
                <img src="/photo/clinic_02.png" alt="" />
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

          <a href="#footer-map" className="access-detail-btn">
            <span>詳しくみる</span>
            <span className="arrow">→</span>
          </a>
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
                      <td className="closed">×</td>

                    </tr>
                    <tr>
                      <th>14:30-17:30</th>
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
            </div>

            <div className="footer-cta-area">
              <div id="footer-map" className="footer-map">

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
      <div className="mobile-action-bar">
        <a href="tel:0535251113" className="action-item tel">
          <svg className="icon" viewBox="0 0 24 24" fill="#333">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1H3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span>電話する</span>
        </a>
        <a href="#" className="action-item inquiry">
          <svg className="icon" viewBox="0 0 24 24" fill="#fff">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span>お問い合わせ</span>
        </a>
        <a href="#" className="action-item line">
          <svg className="icon" viewBox="0 0 24 24" fill="#fff">
            <path d="M24 10.3c0-4.6-5.4-8.3-12-8.3S0 5.7 0 10.3c0 4.1 4.3 7.5 10 8.2.4.1.9.4 1 .9l.3 2.1c.1.6.4.8.8.4.4-.3 2.1-1.3 3-2.1.1-.1.2-.2.3-.3 5.4-.8 8.6-4 8.6-8.9zm-15.6 3h-2c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v3.5h1.5c.3 0 .5.2.5.5s-.2.5-.5.5zm3.5-.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4zm3.8 0c0 .1-.1.3-.2.4-.1.1-.3.1-.4.1s-.3-.1-.4-.1-.2-.3-.2-.4v-4c0-.3.2-.5.5-.5s.5.2.5.5l1 2.2 1-2.2c.1-.1.2-.2.4-.2.3 0 .5.2.5.5v4c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2.3l-.7 1.6c-.1.2-.3.3-.5.3h-.1c-.2 0-.4-.1-.5-.3l-.7-1.6v2.3zm4.8-1.5c0 .3-.2.5-.5.5h-1.5v.5h1.5c.3 0 .5.2.5.5s-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5h-1.5v.5h1.5c.3 0 .5.2.5.5z"/>
          </svg>
          <span>LINEで相談</span>
        </a>
      </div>
    </div>
  );
}
