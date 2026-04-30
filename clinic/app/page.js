"use client";

import { useEffect, useRef, useState } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const interpolate = (start, end, progress) => start + (end - start) * progress;

const smoothStep = (progress) => progress * progress * (3 - 2 * progress);

const interpolateColor = (start, end, progress) => {
  const startRgb = start.match(/\w\w/g).map((value) => parseInt(value, 16));
  const endRgb = end.match(/\w\w/g).map((value) => parseInt(value, 16));
  const rgb = startRgb.map((value, index) => Math.round(interpolate(value, endRgb[index], progress)));

  return `#${rgb.map((value) => value.toString(16).padStart(2, "0")).join("")}`;
};

const getAboutWaveSettings = () => {
  if (typeof window === "undefined") {
    return { currentHeight: 100 };
  }

  if (window.innerWidth <= 640) {
    return { currentHeight: 50 };
  }

  if (window.innerWidth <= 1024) {
    return { currentHeight: 70 };
  }

  return { currentHeight: 100 };
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutSectionRef = useRef(null);
  const aboutWaveRef = useRef(null);
  const [aboutWaveState, setAboutWaveState] = useState({
    progress: 0,
    coverHeight: 1200,
    currentHeight: 100,
  });
  const [aboutActiveScale, setAboutActiveScale] = useState(0);
  const facilityImages = [
    { src: "/photo/clinic_02.png", alt: "診察室", variant: "vertical" },
    { src: "/photo/assets/modern_clinic_reception_interior.png", alt: "待合室", variant: "wide" },
    { src: "/photo/img3.jpg", alt: "医療設備", variant: "vertical" },
    { src: "/photo/clinic_03.png", alt: "院内設備", variant: "wide" },
    { src: "/photo/access_entrance.jpg", alt: "医院入口", variant: "vertical" },
    { src: "/photo/clinic_011.png", alt: "診療環境", variant: "wide" },
  ];
  const waveProgress = smoothStep(aboutWaveState.progress);
  const waveHeight = Math.round(interpolate(aboutWaveState.coverHeight, aboutWaveState.currentHeight, waveProgress));
  const waveDepth = Math.round(interpolate(0, 100, waveProgress));
  const waveFill = interpolateColor("fbf9f6", "f4f9fd", waveProgress);
  const waveBlur = "0px";
  const waveFeatherOpacity = "0";
  const waveTopOpacity = interpolate(0.72, 1, waveProgress).toFixed(3);
  const waveUpperOpacity = interpolate(0.92, 1, waveProgress).toFixed(3);
  const waveMiddleOpacity = interpolate(1, 1, waveProgress).toFixed(3);
  const aboutWavePath = `M0,0 Q720,${waveDepth} 1440,0 L1440,100 L0,100 Z`;
  const contentRevealProgress = smoothStep(clamp(aboutWaveState.progress, 0, 1));
  const decorRevealProgress = smoothStep(clamp((aboutWaveState.progress - 0.14) / 0.86, 0, 1));
  const landscapeRevealProgress = smoothStep(clamp((aboutWaveState.progress - 0.08) / 0.92, 0, 1));
  const aboutRevealStyle = {
    "--about-content-opacity": interpolate(0.72, 1, contentRevealProgress).toFixed(3),
    "--about-content-y": `${interpolate(58, 0, contentRevealProgress).toFixed(1)}px`,
    "--about-decor-opacity": interpolate(0.68, 1, decorRevealProgress).toFixed(3),
    "--about-decor-y": `${interpolate(70, 0, decorRevealProgress).toFixed(1)}px`,
    "--about-landscape-opacity": interpolate(0.18, 0.3, landscapeRevealProgress).toFixed(3),
    "--about-landscape-y": `${interpolate(52, 0, landscapeRevealProgress).toFixed(1)}px`,
  };

  useEffect(() => {
    let checkFrameId = null;
    let animationFrameId = null;
    let hasTriggeredReveal = false;
    const revealDuration = 900;

    const getWaveMetrics = () => {
      const settings = getAboutWaveSettings();
      const aboutSection = aboutSectionRef.current;

      if (!aboutSection) {
        return {
          aboutSection: null,
          coverHeight: 1200,
          currentHeight: settings.currentHeight,
          rect: null,
          viewportHeight: window.innerHeight || document.documentElement.clientHeight,
        };
      }

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      return {
        aboutSection,
        coverHeight: Math.max(aboutSection.offsetHeight, viewportHeight * 1.12),
        currentHeight: settings.currentHeight,
        rect: aboutSection.getBoundingClientRect(),
        viewportHeight,
      };
    };

    const updateWaveDimensions = (metrics) => {
      setAboutWaveState((previous) => {
        const next = {
          ...previous,
          coverHeight: metrics.coverHeight,
          currentHeight: metrics.currentHeight,
        };

        if (
          Math.abs(previous.coverHeight - next.coverHeight) < 1 &&
          previous.currentHeight === next.currentHeight
        ) {
          return previous;
        }

        return next;
      });
    };

    const animateReveal = (startedAt) => {
      const elapsed = performance.now() - startedAt;
      const progress = clamp(elapsed / revealDuration, 0, 1);

      setAboutWaveState((previous) => {
        if (Math.abs(previous.progress - progress) < 0.005) {
          return previous;
        }

        return {
          ...previous,
          progress,
        };
      });

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(() => animateReveal(startedAt));
      }
    };

    const checkRevealTrigger = () => {
      checkFrameId = null;
      const metrics = getWaveMetrics();
      updateWaveDimensions(metrics);

      if (!metrics.aboutSection || hasTriggeredReveal) {
        return;
      }

      const triggerLine = metrics.viewportHeight * 0.42;
      if (metrics.rect.top <= triggerLine) {
        hasTriggeredReveal = true;
        animationFrameId = window.requestAnimationFrame(() => animateReveal(performance.now()));
      }
    };

    const requestTriggerCheck = () => {
      if (checkFrameId === null) {
        checkFrameId = window.requestAnimationFrame(checkRevealTrigger);
      }
    };

    requestTriggerCheck();
    window.addEventListener("scroll", requestTriggerCheck, { passive: true });
    window.addEventListener("resize", requestTriggerCheck);

    return () => {
      if (checkFrameId !== null) {
        window.cancelAnimationFrame(checkFrameId);
      }
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("scroll", requestTriggerCheck);
      window.removeEventListener("resize", requestTriggerCheck);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutSectionRef.current) return;

      const rect = aboutSectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // セクションが画面内に入ってから中央付近に来るまでの進捗を計算
      const start = viewportHeight;
      const end = 0;
      const progress = clamp((viewportHeight - rect.top) / viewportHeight, 0, 1);
      
      setAboutActiveScale(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

              {/* Vertical staircase text (Moved here to overlap the photo) */}
              <div className="copy-vertical-wrapper">
                <h2 className="v-text staircase-text">
                  <span className="step-1 line-band">地域の皆さまの</span>
                  <span className="step-2 line-band">健康を支え、</span>
                  <span className="step-3 line-band">安心の毎日を。</span>
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
                <li><a href="#about" className="quick-nav-btn">当院について</a></li>
                <li><a href="#features" className="quick-nav-btn">当院の特長</a></li>
                <li><a href="#service" className="quick-nav-btn">診療案内</a></li>
                <li><a href="#access" className="quick-nav-btn">アクセス</a></li>
                <li><a href="#news" className="quick-nav-btn">お知らせ</a></li>
              </ul>
            </nav>

          </div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section 
        id="about" 
        ref={aboutSectionRef} 
        className="about-section" 
        style={{
          ...aboutRevealStyle,
          "--about-circle-scale": aboutActiveScale
        }}
      >
        <div className="about-reveal-wrapper">
          <div className="about-reveal-circle"></div>

          <div className="container about-content about-content-editorial" style={{ display: 'none' }}>
            <h2 className="about-title">
              三ヶ日の陽光と、豊かな自然とともに。<br />
              皆さまの<span>健やかな毎日を見守る。</span>
            </h2>
            <div className="about-desc">
              <p>穏やかな浜名湖の風と、あたたかな日差しが降り注ぐ三ヶ日町。</p>
              <p>私たちはこの街で、お子さまからご年配の方まで、</p>
              <p>ご家族全員が安心して相談できる「地域の陽だまり」を目指しています。</p>
              <p>内科・小児科を中心とした温かい診療を通じて、</p>
              <p>皆さまの健やかな毎日を、真摯に支え続けてまいります。</p>
            </div>
          </div>
        </div>

        {/* 下境界：FEATURESへつなぐ波 */}
        {/* 下境界：FEATURESへつなぐ波 */}
        <div
          ref={aboutWaveRef}
          className="about-wave-bottom"
          style={{
            "--about-wave-height": `${waveHeight}px`,
            "--about-wave-blur": waveBlur,
            "--about-wave-feather-opacity": waveFeatherOpacity,
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aboutWaveRevealGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={waveFill} stopOpacity={waveTopOpacity} />
                <stop offset="24%" stopColor={waveFill} stopOpacity={waveUpperOpacity} />
                <stop offset="58%" stopColor={waveFill} stopOpacity={waveMiddleOpacity} />
                <stop offset="100%" stopColor={waveFill} stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d={aboutWavePath} fill="url(#aboutWaveRevealGradient)" />
          </svg>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section id="features" className="features-simple-section">
        <div className="brand-marquee" aria-label="KUROYANAGI CLINIC">
          <div className="brand-marquee-track" aria-hidden="true">
            <span>KUROYANAGI CLINIC.</span>
            <span>KUROYANAGI CLINIC.</span>
            <span>KUROYANAGI CLINIC.</span>
            <span>KUROYANAGI CLINIC.</span>
          </div>
        </div>
        <div className="features-simple-photo">
          <img src="/photo/assets/modern_clinic_reception_interior.png" alt="クロヤナギ医院の院内" />
        </div>
        <div className="features-simple-content">
          <p className="features-simple-kicker">FEATURE</p>
          <h2 className="features-simple-title">当クリニックの特徴</h2>
          <p className="features-simple-copy">
            地域の皆さまに寄り添い、<br />
            日々の不調から専門的な相談まで<br />
            安心して頼れる医院へ
          </p>
          <p className="features-simple-lead">
            内科を中心に、予防医療や検査、日々の健康相談まで幅広く対応しています。
            患者さま一人ひとりの不安に耳を傾け、必要な医療へ丁寧につなげます。
          </p>
          <div className="features-simple-points" aria-label="当クリニックの特徴">
            {[
              "丁寧なカウンセリング",
              "検査・予防医療に対応",
              "経験に基づく診療",
              "通いやすい診療体制",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <a href="#service" className="features-simple-button">診療案内を見る</a>
        </div>
      </section>

      <section className="features-new-section features-legacy-section" aria-hidden="true">
        <div className="container">
          <div className="features-white-card">
            
            {/* Floating Decorations (PC Only) */}
            <div className="features-deco features-deco-left hidden-mobile">
              <div className="f-deco-bubble">安心して通える理由は？</div>
              <div className="f-deco-person">
                <img src="/photo/assets/features/feature_05.png" alt="" />
              </div>
            </div>
            <div className="features-deco features-deco-right hidden-mobile">
              <div className="f-deco-bubble">私たちが大切にしていること</div>
              <div className="f-deco-person">
                <img src="/photo/assets/features/feature_06.png" alt="" />
              </div>
            </div>

            <div className="features-card-inner">
              {/* Header */}
              <div className="f-header">
                <h2 className="f-title">当クリニックの特徴</h2>
                <p className="f-lead">
                  患者さま一人ひとりに寄り添い、安心して通える医療を<br className="hidden-mobile" />
                  提供するための取り組みを行っています。
                </p>
              </div>

              {/* Top Row: 4 Items */}
              <div className="f-top-grid">
                {[
                  { img: "/photo/assets/features/feature_01.png", icon: "/photo/assets/03_medical/01_内科.png", title: "丁寧なカウンセリング", text: "患者さまのお悩みやご希望を丁寧に伺い、最適な治療をご提案します。" },
                  { img: "/photo/assets/features/feature_02.png", icon: "/photo/assets/03_medical/03_検査.png", title: "最新の医療設備", text: "正確な診断と安全な治療のために、最新の医療機器を導入しています。" },
                  { img: "/photo/assets/features/feature_03.png", icon: "/photo/assets/03_medical/04_循環器内科.png", title: "経験豊富な医師が担当", text: "専門性の高い医師が、豊富な経験に基づいた質の高い医療を提供します。" },
                  { img: "/photo/assets/features/feature_04.png", icon: "/photo/assets/03_medical/08_バリアフリー.png", title: "通いやすい診療体制", text: "平日夜間や土曜診療にも対応。ご都合に合わせて通いやすい体制を整えています。" },
                ].map((item, idx) => (
                  <div className="f-top-item" key={idx}>
                    <div className="f-item-img-wrap">
                      <img src={item.img} alt={item.title} className="f-item-img" />
                      <div className="f-item-icon">
                        <img src={item.icon} alt="" />
                      </div>
                    </div>
                    <h3 className="f-item-title">{item.title}</h3>
                    <p className="f-item-text">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="f-divider">
                <span className="f-divider-text">こんな方におすすめです</span>
              </div>

              {/* Bottom Row: 4 Items */}
              <div className="f-bottom-grid">
                {[
                  { icon: "/photo/assets/03_medical/01_内科.png", text: "体調の変化や不調が気になる方" },
                  { icon: "/photo/assets/03_medical/02_予防接種.png", text: "健康診断の結果を相談したい方" },
                  { icon: "/photo/assets/03_medical/05_呼吸器内科.png", text: "お子さまの健康について相談したい方" },
                  { icon: "/photo/assets/03_medical/06_消化器内科.png", text: "かかりつけ医をお探しの方" },
                ].map((item, idx) => (
                  <div className="f-bottom-item" key={idx}>
                    <div className="f-bottom-icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <p className="f-bottom-text">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Footer Note */}
              <p className="f-note">
                ※診療内容や診療時間など、詳細は各ページをご確認ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MEDICAL GUIDE --- */}
      <section id="service" className="medical-guide-section">
        <div className="medical-guide-arch-top" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 Q720,0 1440,80 L1440,0 L0,0 Z" fill="#eef6fb" />
          </svg>
        </div>
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
            {/* <span className="medical-guide-copy-label">診療案内</span> */}
            <p>どんなことでも<br />まずはご相談ください。</p>
          </aside>
        </div>
      </section>
      {/* --- FACILITY --- */}
      <section id="facility" className="facility-section">
        {/* Background shape */}
        <div className="facility-bg-shape" aria-hidden="true"></div>

        <div className="container">
          <div className="facility-layout">
            
            {/* Left: Images */}
            <div className="facility-images-area">
              <div className="facility-deco-cat" aria-hidden="true">
                <img src="/photo/assets/07_ashirai/06_鳥.png" alt="" />
              </div>
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
              <div className="facility-mobile-collage" aria-label="施設紹介の写真">
                <div className="facility-mobile-photo main">
                  <img src="/photo/assets/modern_clinic_reception_interior.png" alt="待合室" />
                </div>
                <div className="facility-mobile-photo">
                  <img src="/photo/doctor.png" alt="診療風景" />
                </div>
                <div className="facility-mobile-photo">
                  <img src="/photo/img3.jpg" alt="医療設備" />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="facility-content">
              <span className="facility-en-label">FACILITY</span>
              <h2 className="facility-title">施設紹介</h2>
              
              <div className="facility-text-group">
                <h3 className="facility-lead">
                  最新の設備・機器を揃えた<br />
                  快適で安心できる診療環境
                </h3>
                <p className="facility-desc">
                  皆さまに安心して受診していただけるよう、清潔で開放感のある空間づくりを心がけています。
                  最新の医療機器を導入し、精密な診断と適切な治療を行える環境を整えております。
                  お気軽にご来院ください。
                </p>
              </div>

              <a href="#" className="facility-btn">
                <span>施設紹介を見る</span>
                <span className="btn-arrow">
                  <img src="/photo/assets/02_navi/01_矢印右.png" alt="" />
                </span>
              </a>
            </div>

          </div>
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
              {/* <div className="news-footer-link-wrap">
                <a href="#" className="news-footer-link">
                  <span className="news-footer-arrow">
                    <img src="/photo/assets/02_navi/01_矢印右.png" alt="" />
                  </span>
                  <span>お知らせ一覧を見る</span>
                </a>
              </div> */}
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
      <section id="access" className="access-section">
        <div className="section-container">
          <div className="access-heading-row">
            <div className="access-title-block">
              <span className="access-en">ACCESS</span>
              <h2>アクセス</h2>
            </div>
            <div className="access-address-block">
              <p>〒431-1404 静岡県浜松市浜名区三ヶ日町宇志34-1</p>
              <a href="https://www.google.com/maps/search/?api=1&query=%E9%9D%99%E5%B2%A1%E7%9C%8C%E6%B5%9C%E6%9D%BE%E5%B8%82%E6%B5%9C%E5%90%8D%E5%8C%BA%E4%B8%89%E3%83%B6%E6%97%A5%E7%94%BA%E5%AE%87%E5%BF%9734-1" target="_blank" rel="noreferrer">
                Googleマップで見る
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <a href="#" className="access-detail-btn">
              <span>詳しくみる</span>
              <span aria-hidden="true">→</span>
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
              { label: "当院について", href: "#about" },
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
    </div>
  );
}
