const navItems = ["診療案内", "診療時間", "初めての方へ", "アクセス"];

const departments = ["内科", "小児科", "消化器内科", "予防接種", "健康診断"];

const notices = [
  { date: "2026.04.01", text: "ゴールデンウィーク期間の診療について" },
  { date: "2026.03.15", text: "発熱症状がある方へのお願い" },
  { date: "2026.02.20", text: "健康診断の受付時間を更新しました" },
];

const schedule = [
  ["月", "9:00-12:00", "15:00-18:00"],
  ["火", "9:00-12:00", "15:00-18:00"],
  ["水", "9:00-12:00", "休診"],
  ["木", "9:00-12:00", "15:00-18:00"],
  ["金", "9:00-12:00", "15:00-18:00"],
  ["土", "9:00-12:00", "休診"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="クロヤナギ医院 トップへ">
          <span className="brand-mark">K</span>
          <span>
            <strong>クロヤナギ医院</strong>
            <small>Kuroyanagi Clinic</small>
          </span>
        </a>
        <nav className="header-nav" aria-label="主要ナビゲーション">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="phone-link" href="tel:0530000000">
          053-000-0000
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">浜松市三ヶ日町の地域医療</p>
          <h1>いつもの暮らしに寄り添う、身近なかかりつけ医。</h1>
          <p className="lead">
            内科・小児科を中心に、日々の体調不良から予防接種、健康診断まで幅広くご相談いただけます。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#診療時間">
              診療時間を見る
            </a>
            <a className="secondary-button" href="#アクセス">
              アクセスを見る
            </a>
          </div>
        </div>
        <div className="hero-media" aria-label="医院の写真">
          <img className="hero-main-photo" src="/photo/hero_fv.jpg" alt="クロヤナギ医院の外観" />
          <img className="hero-sub-photo" src="/photo/access_entrance.jpg" alt="医院入口" />
          <div className="hero-info-card">
            <span>本日の受付</span>
            <strong>午前 9:00-12:00</strong>
            <small>午後 15:00-18:00</small>
          </div>
        </div>
      </section>

      <section className="quick-info" aria-label="医院基本情報">
        <article>
          <span>診療科目</span>
          <strong>内科・小児科</strong>
          <p>体調不良、生活習慣病、予防接種など</p>
        </article>
        <article>
          <span>休診日</span>
          <strong>水曜午後・土曜午後・日曜祝日</strong>
          <p>急な変更はお知らせをご確認ください</p>
        </article>
        <article>
          <span>所在地</span>
          <strong>浜松市浜名区三ヶ日町</strong>
          <p>駐車場をご利用いただけます</p>
        </article>
      </section>

      <section className="section" id="診療案内">
        <div className="section-heading">
          <p className="eyebrow">Medical Services</p>
          <h2>診療案内</h2>
        </div>
        <div className="department-grid">
          {departments.map((department) => (
            <article className="department-card" key={department}>
              <span>{department}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section schedule-section" id="診療時間">
        <div className="section-heading">
          <p className="eyebrow">Hours</p>
          <h2>診療時間</h2>
        </div>
        <div className="schedule-card">
          <table>
            <thead>
              <tr>
                <th>曜日</th>
                <th>午前</th>
                <th>午後</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map(([day, morning, afternoon]) => (
                <tr key={day}>
                  <th>{day}</th>
                  <td>{morning}</td>
                  <td>{afternoon}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>受付終了時間は診療終了の15分前です。急な変更はお知らせでご案内します。</p>
        </div>
      </section>

      <section className="section split-section" id="初めての方へ">
        <div>
          <p className="eyebrow">First Visit</p>
          <h2>初めての方へ</h2>
          <p>
            保険証またはマイナンバーカード、お薬手帳、紹介状をお持ちの方は受付でご提示ください。
            発熱や感染症が疑われる症状がある場合は、来院前にお電話ください。
          </p>
        </div>
        <div className="notice-panel">
          <h3>お知らせ</h3>
          {notices.map((notice) => (
            <a href="#top" key={notice.text}>
              <time>{notice.date}</time>
              <span>{notice.text}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="access-section" id="アクセス">
        <div>
          <p className="eyebrow">Access</p>
          <h2>アクセス</h2>
          <p>〒000-0000 静岡県浜松市浜名区三ヶ日町</p>
          <p>お車でお越しの方は、医院敷地内の駐車場をご利用ください。</p>
        </div>
        <a className="primary-button" href="https://www.google.com/maps" target="_blank" rel="noreferrer">
          Google マップで見る
        </a>
      </section>

      <footer className="site-footer">
        <div>
          <strong>クロヤナギ医院</strong>
          <p>地域の皆さまの毎日に寄り添う医療を目指します。</p>
        </div>
        <a href="tel:0530000000">053-000-0000</a>
      </footer>
    </main>
  );
}
