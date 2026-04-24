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

              {/* Bottom-left landscape illustration overlaying the photo */}
              <div className="hero-deco-landscape">
                <img src="/photo/assets/06_landscapes/04_街並みと橋.png" alt="" />
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

    </div>
  );
}
