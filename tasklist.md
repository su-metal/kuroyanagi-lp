# Featureセクション刷新タスクリスト

## 1. 準備・設計
- [x] デザインの言語化とユーザー確認
- [x] `design.md` の更新
- [x] 使用するアイコンアセットの選定
    - 01: `/photo/assets/icon_01_stethoscope.png` (聴診器)
    - 02: `/photo/assets/icon_04_syringe.png` (注射器)
    - 03: `/photo/assets/icon_02_heartbeat.png` (心拍)
    - 04: `/photo/assets/icon_06_chat.png` (サポート)

## 2. HTML構造の更新 (`page.js`)
- [x] `features-section` のタイトルエリアを中央上部へ移動
- [x] `features-grid` を4つの `feature-modern-card` に書き換え
- [x] 各カードにバッジ（番号＋アイコン）、画像、オーバーレイテキスト、リンクを配置

## 3. スタイルの実装 (`globals.css`)
- [x] `.features-section` のレイアウト調整（中央揃え見出し）
- [x] `.features-bg-text-large` の調整（ウォーターマーク）
- [x] `.features-grid` の4カラム化
- [x] `.feature-modern-card` の詳細スタイリング
    - [x] 全面画像と角丸
    - [x] オレンジの円形バッジ（上端中央）
    - [x] テキストラベルのスタック配置（オレンジ背景）
    - [x] 下部グラデーションと「View All」
- [x] ホバーアニメーションの実装

## 4. レスポンシブ調整
- [x] 1024px以下での2カラム化
- [x] 640px以下での1カラム化

## 5. 仕上げ
- [x] 文言の微調整
- [x] 全体的な余白感の確認
