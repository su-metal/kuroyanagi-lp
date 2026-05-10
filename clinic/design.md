# Atmosphereセクション デザイン設計書

## 実装アプローチ
「クロヤナギ医院」と併設施設「みっかび東」の調和と地域への密着感を表現するため、柔らかな装飾と重ね合わせた写真レイアウトを採用します。

### レイアウト構成
- **PC幅 (1024px以上)**:
  - 左側に2枚の写真（大小）をオフセットさせて配置。
  - 右側にタイトルとリード文を配置。
  - 写真の周囲に「雲」「桜」「ベンチに座る人」などのイラストを散りばめ、奥行きと親しみやすさを演出。
- **モバイル幅 (1024px未満)**:
  - ビジュアルとテキストを縦並びに変更。
  - イラスト類は視認性を妨げない範囲で簡略化・縮小して配置。

### 使用アセット
- **ビジュアル写真**:
  - メイン1: `/photo/hero-slider/hero-02.jpg` (風景・ライフスタイル)
  - メイン2: `/photo/hero-slider/hero-03.jpg` (院内・温かみ)
- **装飾イラスト**:
  - 雲: `/photo/assets/07_ashirai/cloud.png`, `soft_clouds.png`
  - 桜: `/photo/assets/07_ashirai/sakura_petals.png`
  - ベンチ: `/photo/assets/05_persons/person_bench_dog.png`
  - 葉: `/photo/assets/07_ashirai/13_葉.png`

### スタイリング (CSS)
- `atmosphere-section` クラスで管理。
- 写真には緩やかなドロップシャドウと角丸を適用。
- 装飾要素は `absolute` 配置で写真の枠を超えて配置。

### 影響範囲
- `page.js` の `sections-with-bg-arc` コンテナ内。
- `facility` セクションと `news` セクションの間に挿入。
- 既存の `Service` / `Facility` / `News` のレイアウトを維持したまま、構造を修復。
