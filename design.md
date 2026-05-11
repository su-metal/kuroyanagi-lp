# design.md

## デザインコンセプト

「地域に寄り添う、モダンで安心感のあるデザイン」
最新のデザイン画像に基づき、伝統的な信頼感（縦書き・明朝体）と、現代的な親しみやすさ（大きな角丸・イラスト・余白）を融合させる。

## カラーパレット

- **Primary Blue**: #004098 (ロゴや診療時間表に使用される信頼の青)
- **Primary Green**: #00A0A0 (ロゴやアクセントに使用される清潔な緑)
- **Base**: #FFFFFF (背景、カードに使用)
- **Soft Gray**: #F4F7F7 (ヘッダーの背景やセクションの区切り)
- **Text**: #333333 (読みやすさを重視したグレー)

## タイポグラフィ

- **キャッチコピー**: Noto Serif JP（明朝体）を使用し、`writing-mode: vertical-rl` で縦書きに配置。
- **ナビゲーション/本文**: Noto Sans JP（ゴシック体）を使用。
- **診療時間表**: 等幅に近いフォントまたは整理されたレイアウトで視認性を確保。

## コンポーネント設計

### Header
- **TopBar**:
  - `logo`: 医院名とロゴマーク。
  - `action-cards`: ホワイト背景の角丸カード。アイコン + テキストの構成。
- **NavBar**:
  - シンプルなテキストナビゲーション。ホバー時にアンダーライン等の視覚効果。

### Hero Section
- **MainVisual**:
  - `border-radius` を使用して、上左、上右、下左を大きく丸め、下右は直角に近い形状にする（画像に準拠）。
  - PC幅では中央コンテナ基準ではなく、viewport左側から固定オフセットで開始し、右側の安全域を残して横幅を可変にする。
- **VerticalCopy**:
  - PC幅ではviewport左側から固定オフセットで配置し、メイン写真にオーバーラップさせる。写真フレームの伸縮や中央寄せに追従させない。
- **Illustrations**:
  - 家族イラスト: 写真とコピーの間に重なるように配置。
  - 鳥アイコン: 空のスペースにランダム感を出しつつ配置。
- **Decorations**:
  - 風景シルエット: PC幅ではviewport左下から固定オフセットかつ固定サイズで、三ヶ日の街並みをイメージしたイラストを配置。
- **ScheduleCard**:
  - PC幅ではviewport右下から固定オフセットで配置. 角丸、シャドウ、清潔なテーブルスタイル。

### Brand Marquee
- FEATUREセクション内の背面装飾として、`FEATURE / 当クリニックの特徴` に少しかかる位置へ `KUROYANAGI CLINIC` の大きな英字タイポを右から左へ無限スクロールさせる。
- 背景はFEATUREセクションと一体化させ、文字は白で情報セクションを邪魔しない背面タイポとして扱う。
- `prefers-reduced-motion` が有効な環境ではアニメーションを停止し、静止したブランド帯として表示する。

### About Section
- ABOUTはプライマリーカラーの円形リビールと白いラベル・見出し・本文で構成し、サイト全体の色調から浮かないようにする。
- 背景には画像を全面使用せず、初期背景はFVと同じ白背景、円形リビール後はブルー系の薄い色面として可読性と統一感を両立する。
- スクロールによる円形リビールと下部イラスト演出は維持し、下部イラストは既存イラストを使用する。素材本来の印象を残す程度のごく弱いトーン調整をかける。
- FVとABOUT初期背景は `--fv-bg` で共通管理し、円形リビール側は `--about-reveal-bg: var(--primary-blue)` のベタ塗りを土台にする。薄い白の大きな楕円シェイプと小さな楕円シェイプは、円形リビールが開き切った後に表示する。境界接続にグラデーションは使わない。

### Feature Section (Sticky Sidebar Re-design)
- **Concept**: 雑誌のエディトリアル（編集）ページのような、情報の深掘りと視覚的な楽しさを両立させるレイアウト。
- **Layout (PC 1024px+)**:
  - `display: grid` による左右2カラム構成。
  - **Left Sidebar (Sticky)**: `position: sticky; top: 120px;`（ヘッダーの高さを考慮）。
    - 構成: 英語タイトル "Feature"、縦書きリードコピー、番号付きタイムライン。
    - タイムラインは右側の特徴カードと連動し、導入カード表示中は番号をアクティブにしない。
    - 左サイドバーには現在位置を示す大きな背景番号を置かない。
    - 背景に現行のウォーターマーク（"KUROYANAGI CLINIC"）を控えめに配置。
  - **Right Content (Scrollable)**: 番号なしの導入カードと、特徴を詳しく紹介する4枚のカードを垂直に配置する。PC幅ではカード束全体を `position: sticky` で固定し、後続カードほど少し下にずらして1枚ずつ重なっていくスクロール演出にする。特徴カードは3:2比率に近い1枚の白いカード内へ写真、ピル型ラベル、見出し、本文を収める。
- **Card Design**:
  - **Shape**: 白カード、控えめな角丸、薄い境界線、影で重なりを表現する。特徴カード内では写真とテキストを別カード化せず、斜めカットや強いドット装飾は使わない。
  - **Visual**: 高品質な写真、アクティブカードのみ表示する大きな薄青の番号、タイトル、本文、詳細リンクで構成する。
  - **Color**: 現行のプライマリーブルーと淡い青背景を維持し、情報の可読性を優先する。
- **Layout (Mobile)**:
  - 通常の垂直スタックに切り替え。Sticky解除。

### Service Section
- **Introduction**:
  - 左側：英字タイトル "Service"、日本語タイトル "当院の診療・サービス"、および概要テキスト。
  - 右側：医師と家族が話しているイラスト（`01_診察シーン.png`）。
- **Feature Sections (General / Surgery)**:
  - 背景に薄い青のボックス（角丸）を使用。
  - 左右交互のフレックスレイアウト。
  - 写真は大きな角丸を適用。外科手術セクションの横にはドットパターンの装飾。
- **Other Services Grid**:
  - 「その他のサービス」の見出し。
  - 3カラムのグリッドレイアウト。
  - **Card Style**: 上部に写真、その下端中央に円形アイコン（白背景、青い枠とイラスト）が半分重なるように配置。下部にテキストと矢印リンク。
- **Support Info Row**:
  - 最下部に4つのアイコン項目（車椅子対応入口、駐車場、トイレ、医療サポート）を等間隔で配置。

### Facility / Related Facility Section
- `FACILITY` は大きな英字タイトルと横スクロールする写真帯で、院内・設備の空気感を視覚的に見せる。
- `FACILITY` 直下に、併設施設「みっかび東」への関連施設導線を配置する。
- 関連施設導線は淡いブルーグレー背景、中央寄せのコンパクトな濃いブルーの横長カード、白文字の紹介文、白いCTA、カード内右側の角丸写真で構成し、FACILITYスライダーの補足導線として見える軽さにする。
- 役割は詳しい説明ではなく、併設施設の存在をさらっと伝え、`https://kuroyanagi-clinic.jp/` へ遷移させることに限定する。

### Contact Mail Form
- ルートの `contact.php` は `mb_send_mail()` を使ってフォーム通知を送信する。
- Gmail対策として、フォーム入力者のメールアドレスはFromに使わず、Reply-Toに設定する。
- FromとEnvelope senderは `postmaster@kuroyanagi-clinic.jp`、送信先は `web@kuroyanagi-clinic.jp` とする。

### Responsive Design (Mobile Optimization)
- **Hero Section**:
  - Desktop:
    - 左上に白い横長ロゴカード、上部に白いナビバーを配置する。ロゴカードは見本の大きな垂れ下がりパネルではなく、角丸と細いブルーアクセントで独自のシルエットにする。
    - 現行ヒーロースライダー画像を維持し、余白つきの大きな写真ステージとして表示する。
    - 縦書きコピーは写真中央寄りに白帯つきで配置し、左側にSCROLL導線、右側に縦型メニューボタンを置く。
    - 角のイラスト装飾は一旦使用しない。
  - Catchcopy: 
    - PC版と共通の縦書き（vertical-rl）を採用。
    - 各行に縦方向の白帯を敷き、スライダー画像との重なり部分の可読性を確保する。
    - 中央から左側に配置し、メインの被写体と重なりすぎないように調整する。
  - Photo: 
    - 垂直方向の位置を引き上げ、ファーストビューの上部に寄せる。
    - 左右の幅を広げ（viewport幅の85-90%程度）、画面一杯に近い広がりを持たせる。
    - 角丸の調整を行い、幅拡大に合わせたバランスを維持する。
  - Decorations: PC幅では角イラスト装飾を置かず、モバイルでも過度な装飾を避ける。
- **Navigation**:
  - Hamburger Menu: Yellow circular button (`#f8b500`) with white lines.
- **Section Backgrounds**:
  - Use `.sections-with-bg-arc` to create a large unified background arc across Service, Facility, and News sections.
  - Desktop: Draw a primary-blue right-side panel inside `.facility-section::before`, keeping the blue area scoped to Facility so it never cuts across Service cards or News cards.
  - Mobile: Draw the unified arc with `.sections-with-bg-arc::before` as a pale blue background layer behind the sections.
  - Service / Facility gap on mobile: Place separate wave and bird decorative assets near the lower right of Service.

## 実装上の注意点
- `z-index` を適切に管理し、イラストやオーバーレイの重なり順を制御。
- PC版のFacilityパネルは右端に固定した矩形ベースの装飾として配置し、他セクションの本文・カードより上に出さない。
- ABOUTセクションはオレンジのアクセントを避け、プライマリーブルー面と白文字で統一する。
- ABOUT背景は円が広がる前をFVと同じ白、円が広がった後をプライマリーカラーのベタ塗りにし、大小1つずつの薄い白シェイプをゆっくりうねる動きで柔らかく見せる。
- ABOUT下部イラストは全幅表示を維持。
- FVとABOUTの境界は同一変数の白背景でつなぐ。
- Service, Facility, News を跨ぐモバイル背景は共有ラッパーを背面レイヤー化する。
- 問い合わせフォームの送信失敗時はエラーを表示する。
- `object-fit: cover` を使用。
- 1024px以下のレスポンシブ対応を行う。

### Wave Divider
- **Position**: `news` セクション直後に配置。
- **Color**: 
  - SVG パス（波部分）: `var(--bg-warm)` (#e8eef2)。`news` セクションの背景色と一致させる。
  - ラッパー背景: `#ffffff`。`access` セクションの背景色と一致させる。
- **Shape**: `page.js` 内に定義された既存の SVG パス（上部を塗りつぶす形状）を使用し、`news` セクションが下に向かって波打っているような視覚効果を実現する。
