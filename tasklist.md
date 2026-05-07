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

## 6. FVキャッチコピーの配置変更
- [x] `design.md` および `requirements.md` の更新
- [x] `globals.css` の `.copy-vertical-wrapper` の修正（PC・モバイル）
- [x] 可読性確保のための背景調整
- [x] 装飾要素（鳥、家族イラスト）との干渉確認と調整
- [x] 実機・ブラウザでの表示確認

## 7. モバイル版ヒーローレイアウトの最適化
- [x] `requirements.md` および `design.md` の更新
- [x] `globals.css` における `.hero-editorial-main-photo` の位置・サイズ調整
- [x] スライダー全体のバランスとキャッチコピーとの干渉確認
- [x] 各モバイルデバイスサイズでの表示確認
- [x] 縦書きキャッチコピー（左寄せ・白帯あり）の実装
- [/] 被写体との重なり具合の微調整

## 8. モバイル版 Service / Facility / News 背景半円の最適化
- [x] `requirements.md` および `design.md` の更新
- [x] `.sections-with-bg-arc` にモバイル用の淡い青い背景レイヤーを追加
- [x] モバイル末尾で `.facility-bg-shape` を再表示する上書きを停止
- [x] `npm run build` によるビルド確認
- [x] 390px / 430px / 768px 幅での表示確認

## 9. Service / Facility 間のあしらい追加
- [x] `requirements.md` および `design.md` の更新
- [x] 波線と小鳥を使った装飾DOMの追加
- [x] モバイル向けの配置CSS追加
- [x] `npm run build` によるビルド確認
- [ ] in-app browserでのPC / モバイル表示確認

## 10. PC版 Facility 背景円弧の調整
- [x] `requirements.md` および `design.md` の更新
- [x] `.facility-bg-shape` のPC向けサイズと位置を縮小
- [x] `npm run build` によるビルド確認
- [ ] PC幅でServiceへの侵入とFacility本文可読性を確認

## 11. PC版 Service / Facility / News 共有背景円弧の再設計
- [x] `requirements.md` および `design.md` の更新
- [x] PC用の大きな円弧を `.sections-with-bg-arc::after` へ移動
- [x] PC表示の `.facility-bg-shape` を非表示化
- [x] `npm run build` によるビルド確認
- [ ] PC幅で3セクションの流れと可読性を確認

## 12. PC版共有背景を半円から右側パネルへ変更
- [x] `requirements.md` および `design.md` の更新
- [x] `.sections-with-bg-arc::after` を右側ブルーパネルへ変更
- [x] PC用の波線・小鳥あしらいを共有ラッパーへ追加
- [x] `npm run build` によるビルド確認
- [ ] PC幅で横幅変化時の破綻がないことを確認

## 13. PC版青パネルのスコープ修正
- [x] `requirements.md` および `design.md` の更新
- [x] 共有ラッパー側のPC青パネルと背景あしらいを無効化
- [x] `.facility-section::before` にFacility内限定の右側パネルを追加
- [x] `npm run build` によるビルド確認
- [ ] PC幅でServiceカードへ食い込まないことを確認

## 14. ABOUTセクションのプライマリーカラー統一
- [x] `requirements.md` および `design.md` の更新
- [x] ABOUTラベルをプライマリーブルーへ変更
- [x] 背景の単色ブルー面と装飾トーンをブルー系へ調整
- [x] 見出し・本文をブルーグレー系へ調整
- [x] `npm run build` によるビルド確認
- [ ] ABOUTセクションの目視確認

## 15. ABOUT背景のブルーオーバーレイ追加
- [x] `requirements.md` および `design.md` の更新
- [x] ABOUT背景の全面風景素材を撤回
- [x] プライマリーブルー系オーバーレイを追加
- [x] 下部イラストにごく弱いトーン調整を適用
- [x] `npm run build` によるビルド確認
- [ ] ABOUT本文の可読性を目視確認

## 16. FV / ABOUT境界の接続改善
- [x] `requirements.md` および `design.md` の更新
- [x] FV背景を白に戻す
- [x] ABOUT境界のグラデーションを削除
- [x] FVとABOUT初期背景を共通変数で管理
- [x] ABOUT円形リビールの開始だけ前倒し
- [x] ABOUT円形リビールをプライマリーカラー化
- [x] ABOUTテキストを白に変更
- [x] ABOUT背景をベタ塗り土台と複数の楕円シェイプ装飾に変更
- [x] ABOUT背景シェイプを大小1つずつに整理
- [x] ABOUT背景シェイプを薄い白に変更
- [x] ABOUT白文字の可読性を調整
- [x] モバイル時のABOUT下部イラスト位置を下げる
- [x] `npm run build` によるビルド確認
- [ ] FVからABOUTへの境界を目視確認
