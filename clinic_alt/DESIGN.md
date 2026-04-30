---
version: "alpha"
name: "Kuroyanagi Clinic"
description: "クロヤナギ医院のWebサイト、スライド、紙媒体、サイン、SNSに適用するためのDESIGN.md。地域に根づいた老健併設のかかりつけ医院として、安心感、親しみ、清潔感、ほどよいポップさを一貫して再現する。"
colors:
  primary: "#1E9E6E"
  primary-deep: "#087E56"
  primary-soft: "#DDF3EA"
  secondary: "#FFD968"
  secondary-soft: "#FFF1C2"
  tertiary: "#E07A5F"
  tertiary-soft: "#F9D4C8"
  blue: "#4C5FD6"
  blue-soft: "#E6EAFF"
  background: "#FFF4E6"
  surface: "#FFFFFF"
  surface-warm: "#FFF9F0"
  line: "#EADFCC"
  text: "#2B2B2B"
  text-muted: "#6B6B6B"
  text-soft: "#8B8B8B"
  on-primary: "#FFFFFF"
  on-secondary: "#2B2B2B"
  on-tertiary: "#FFFFFF"
  success: "#1E9E6E"
  warning: "#FFD968"
  danger: "#E07A5F"
typography:
  h1:
    fontFamily: "Noto Sans JP"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: "0.08em"
  h2:
    fontFamily: "Noto Sans JP"
    fontSize: "clamp(1.75rem, 3vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.06em"
  h3:
    fontFamily: "Noto Sans JP"
    fontSize: "clamp(1.25rem, 2vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.55
    letterSpacing: "0.04em"
  body:
    fontFamily: "Noto Sans JP"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: "0.04em"
  body-sm:
    fontFamily: "Noto Sans JP"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "0.04em"
  caption:
    fontFamily: "Noto Sans JP"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.03em"
  label:
    fontFamily: "Noto Sans JP"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
  label-en:
    fontFamily: "Inter"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.18em"
  nav:
    fontFamily: "Noto Sans JP"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  pill: "999px"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
  5xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: "13px 28px"
    height: "50px"
  card-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-warm:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.text}"
    rounded: "{rounded.xl}"
    padding: "32px"
  chip-notice:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  chip-closed:
    backgroundColor: "{colors.tertiary-soft}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  input-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "44px"
---

# クロヤナギ医院 DESIGN.md

このファイルは、クロヤナギ医院のデザインシステムをコーディングエージェントや制作チームが一貫して扱うための設計仕様です。添付のデザインシステムボード、モバイルサイト、PCサイトの方向性をもとに、Web実装で再現しやすい粒度まで整理しています。

## Overview

### ブランドの方向性

クロヤナギ医院は、地域に根づいた老健併設のかかりつけ医院です。ブランドの核は「このまちで、健やかな暮らしをずっと支える。」です。医療機関としての信頼感を保ちながら、従来型の堅く冷たい医院サイトではなく、家族、高齢者、介護者が安心して相談できるやわらかな空気を持たせます。

### デザインコンセプト

このデザインシステムは、次の3つを融合します。

1. 地域医療の安心感
2. 保護者世代以上にも伝わる読みやすさ
3. 少しポップで親しみのある公共性

見た目は「やさしい医療ポータル」と「現代的なブランドサイト」の中間です。淡いクリーム背景、グリーンを中心にした明快な導線、手描き風の人物イラスト、角丸カード、十分な余白によって、医療の緊張感を下げながらも情報の信頼性を損なわない状態を目指します。

### コアメッセージ

- タグライン: このまちで、健やかな暮らしをずっと支える。
- サブメッセージ: 地域に寄り添い、安心できる医療を、身近な場所で。
- ブランド姿勢: 外来診療から健康診断、リハビリ、介護老人保健施設までを一体的に支える地域の窓口。

### 実装で優先する印象

- やさしい
- 清潔
- 親しみやすい
- 信頼できる
- 地域密着
- 少しポップ
- 読みやすい
- 迷わず使える

### セクション構成

モバイル、PCともに基本の情報順は揃えます。

1. ファーストビュー
2. お知らせと主要導線
3. 診療時間または電話CTA
4. アバウト
5. 特徴
6. 診療案内
7. 施設紹介
8. アクセス
9. お知らせ補助または相談CTA
10. フッター

ユーザーが指定したLP構成で実装する場合も、ファーストビュー、アバウト、特徴、診療案内、施設紹介、アクセス、フッターの順番を崩さないでください。

## Colors

### カラー思想

背景は純白ではなく、淡いクリームを基調にします。医療系によくある冷たいブルー白基調ではなく、地域のあたたかさと相談しやすさを出すために、紙のようなアイボリーと緑を中心に構成します。

### プライマリカラー

- `primary #1E9E6E`: クロヤナギ医院の核となるグリーン。CTA、主要リンク、アイコン、見出し下の短いラインに使用します。
- `primary-deep #087E56`: ホバー、強調CTA、フッターの電話相談カードなど、深さが必要な箇所に使用します。
- `primary-soft #DDF3EA`: チップ、薄い背景、アイコン背景、通知ラベルに使用します。

### セカンダリカラー

- `secondary #FFD968`: 健康診断、人間ドック、注意喚起ではなく親しみのある強調に使用します。
- `tertiary #E07A5F`: 交通アクセス、休診日、補助的な温度感のあるアクセントに使用します。
- `blue #4C5FD6`: 介護、リハビリなど、主要CTAが複数あるときの識別色に使用します。

### ベースカラー

- `background #FFF4E6`: ページ全体の背景。画面全体をやわらかく包む色です。
- `surface #FFFFFF`: カード、フォーム、診療時間表、ナビゲーション、モーダルに使用します。
- `surface-warm #FFF9F0`: セクション内の淡いカードや補助エリアに使用します。
- `line #EADFCC`: 境界線、区切り線、カードの薄いアウトラインに使用します。

### テキストカラー

- `text #2B2B2B`: 見出し、本文の基本色。黒すぎない濃いグレーにします。
- `text-muted #6B6B6B`: 説明文、補足文、住所情報。
- `text-soft #8B8B8B`: 日付、注釈、フォームのプレースホルダー。

### 配色比率

基本は60:30:10で扱います。

- 60%: `background` と `surface`
- 30%: `text`, `line`, 写真やイラストのニュートラル要素
- 10%: `primary`, `secondary`, `tertiary`, `blue`

### 使用ルール

- CTAの最重要ボタンは原則グリーンにする。
- 黄色、青、オレンジは診療カテゴリやショートカット導線の識別に使う。
- 1画面内に強い色を入れすぎない。カラフルだが、余白で制御する。
- 背景全体に派手なグラデーションは使わない。
- 医療系の信頼感を損なう蛍光色、過度なネオン、強い紫グローは使わない。

## Typography

### フォント方針

日本語は `Noto Sans JP` を基本にします。医療情報を扱うため、奇抜なフォントよりも読みやすさを優先します。ただし字間を少し広めに取り、見出しに余韻を出すことで、公共サイトのような硬さを避けます。

英数字やラベルには `Inter` を併用します。小さな英字ラベル、日付、UIメタ情報に使用すると、現代的で整った印象になります。

### 推奨フォント

- 和文見出し: Noto Sans JP Bold
- 和文本文: Noto Sans JP Regular
- 和文ナビゲーション: Noto Sans JP Medium or Bold
- 欧文ラベル: Inter Bold
- 欧文数字: Inter Medium

### 階層

#### H1

- サイズ: `clamp(2.25rem, 5vw, 4.5rem)`
- 太さ: 700
- 行間: 1.45
- 字間: 0.08em
- 用途: ファーストビューのメインコピー

H1は短い行で改行し、リズムを作ります。例:

```text
このまちで、
健やかな暮らしを
ずっと支える。
```

#### H2

- サイズ: `clamp(1.75rem, 3vw, 2.75rem)`
- 太さ: 700
- 行間: 1.5
- 字間: 0.06em
- 用途: セクション見出し

H2には英字の小ラベルを上に置き、中央揃えにするのが基本です。

```text
ABOUT
クロヤナギ医院について
```

#### H3

- サイズ: `clamp(1.25rem, 2vw, 1.75rem)`
- 太さ: 700
- 行間: 1.55
- 用途: カードタイトル、特徴タイトル、診療案内タイトル

#### Body

- サイズ: 1rem
- 太さ: 400
- 行間: 1.9
- 字間: 0.04em
- 用途: 通常本文

#### Caption

- サイズ: 0.75rem
- 行間: 1.6
- 用途: 注釈、日付、補助テキスト

### 字組みルール

- 日本語本文は1行あたり長くしすぎない。PCでは最大34〜42文字程度を目安にする。
- モバイルでは本文を短い段落に分ける。
- 見出しは中央揃え、本文は左揃えを基本にする。
- メインコピーは視線が止まるように、行間を広く、余白をたっぷり取る。
- 英字ラベルはすべて大文字、字間を広めにする。

## Layout

### 基本レイアウト思想

画面全体は「余白の多いカード型ポータル」です。情報量は多いが、カード単位で整理し、ユーザーが迷わず次の行動に進める構成にします。

### PCレイアウト

PCでは横方向の余白を活かし、ファーストビューで情報を3レイヤーに分けます。

1. 左: メインコピー、診療カテゴリ、概要
2. 中央: 人物・医院イラスト、地域感のある背景シェイプ
3. 右: お知らせカード、写真、電話CTA

セクション間は水平に薄い区切りを入れ、下層では2〜3カラムを使います。PCサイトでも内容順はモバイルと揃えます。

### モバイルレイアウト

モバイルでは1カラムを基本にし、要素を縦に気持ちよく積み上げます。特に以下の順を守ります。

1. ロゴとメニュー
2. メインコピー
3. 医院・人物イラスト
4. 診療カテゴリ
5. お知らせ
6. CTAボタン群
7. 診療時間
8. アバウト以降

### グリッド

- PC最大幅: 1440px
- コンテンツ最大幅: 1200px
- PCカラム: 12カラム
- PCガター: 24px
- タブレット: 8カラム
- モバイル: 4カラム
- モバイル左右余白: 20px

### セクション余白

- PCセクション上下: 80〜120px
- モバイルセクション上下: 56〜80px
- カード間: 16〜24px
- 見出し下余白: 32〜48px

### 余白の使い方

余白は「高級感」ではなく「安心感」のために使います。密度を下げることで、医療情報の圧迫感を軽減してください。情報を詰め込む必要がある場合でも、カードの中に薄い罫線、余白、アイコンを使って視線を分けます。

## Elevation & Depth

### 基本方針

影はごく弱く使います。フラットな印象を保ちつつ、カードが背景から少し浮いて見える程度にします。

### 推奨シャドウ

```css
--shadow-card: 0 8px 24px rgba(43, 43, 43, 0.06);
--shadow-floating: 0 16px 40px rgba(43, 43, 43, 0.10);
--shadow-button: 0 8px 18px rgba(30, 158, 110, 0.18);
```

### 使用箇所

- お知らせカード
- 診療時間カード
- 電話CTAカード
- モバイル下部の主要CTA
- PCファーストビュー右側の浮遊カード

### 避ける表現

- 強いドロップシャドウ
- 黒く濃い影
- ガラスモーフィズム風の過度なぼかし
- テック系の発光表現

## Shapes

### 角丸

このブランドでは角丸が重要です。医療の硬さをやわらげるため、カード、ボタン、画像、チップはすべて丸みを持たせます。

- 小さなUI: 10px
- 通常カード: 16〜24px
- 大きなセクションカード: 24〜32px
- ボタン、チップ: 999px

### 背景シェイプ

背景にはクリーム、淡いグリーン、淡い黄色の有機的なシェイプを置きます。シェイプは情報を邪魔しない装飾であり、主役ではありません。

推奨:

- 山や雲のような丸い抽象形
- 小さな鳥の線画
- 点線パターン
- 葉っぱや小枝の線画
- 医院建物の淡い背景イラスト

禁止:

- 鋭い三角形
- サイバー系の斜めライン
- 派手なグラデーション球体
- 意味のない3Dオブジェクト

### 写真フレーム

写真は角丸24px前後で表示します。PCでは写真とイラストを混ぜ、医療機関としての現実感とブランドの親しみを両立します。

## Components

### ヘッダー

#### PC

- 左にロゴ
- 中央または右寄りにナビゲーション
- 右に電話番号とWeb予約ボタン
- 高さ: 72〜88px
- 背景: `surface` または `surface-warm`
- スクロール時は薄く影を付けてもよい

ナビゲーション項目例:

- ホーム
- 医院紹介
- 診療案内
- 外来診療
- 健康診断・人間ドック
- 介護・リハビリ
- お知らせ

#### モバイル

- 左にロゴ
- 右にハンバーガーメニュー
- 背景は透明または白寄り
- ヘッダー下にすぐメインコピーを置く

### ファーストビュー

#### 目的

最初の3秒で「地域の家族と高齢者を支える医院」だと伝えます。

#### 必須要素

- ロゴ
- メインコピー
- サブコピー
- 医院建物イラスト
- 家族、医師、高齢者、車椅子利用者などの人物イラスト
- 診療カテゴリカード
- お知らせまたは電話CTA

#### 表現ルール

- コピーは左寄せまたはモバイルで左寄せ。
- イラストは中心的に扱う。
- 写真を使う場合は右側に大きく配置し、イラストと競合しないようにする。

### 診療カテゴリカード

4つの主要カードを使います。

1. 外来診療
2. 健康診断・人間ドック
3. リハビリテーション
4. 介護老人保健施設 併設

各カードにはアイコン、短い説明、矢印を含めます。PCでは横並び、モバイルでは2列または1列にします。

### CTAボタン

#### Primary

用途:

- Web予約
- 電話相談
- 詳細を見る

見た目:

- グリーン塗り
- 白文字
- pill型
- 右端に矢印アイコン

#### Secondary

用途:

- アクセスを見る
- 一覧を見る
- 施設紹介を見る

見た目:

- 白背景
- グリーン枠またはグリーン文字
- pill型

### お知らせカード

- 白背景
- 角丸16〜24px
- 日付は小さく淡い色
- ラベルはグリーンまたはブルー
- 行ごとに薄い罫線
- 右に矢印

### 診療時間カード

- 表形式で曜日を横に配置
- 黒丸や記号で診療有無を表現
- 休診日はオレンジや赤みのある色で控えめに表記
- モバイルでも読みやすいよう、横スクロールではなくカード内で収める

### 特徴カード

特徴は4つに整理します。

1. 地域に寄り添うかかりつけ医
2. リハビリテーションの専門性
3. 老健併設で安心の連携体制
4. 予防・健康づくりのサポート

各特徴は、丸い淡色背景のイラストと短い説明で構成します。情報を長く書かず、1カードあたり説明は2〜3行程度にします。

### 施設紹介

- メイン写真1枚とサブ写真2〜3枚
- 待合室、リハビリ室、病室、外観を扱う
- 写真は明るく、清潔で、自然光が入る印象にする
- 実装では画像の角丸を揃える

### アクセス

- 地図カード
- 住所
- 電車、バス、駐車場の案内
- 電話CTA
- 必要に応じて医院建物イラストを添える

### フッター

PCでは多カラム構成にします。モバイルではロゴ、住所、電話、主要リンク、CTA、コピーライトの順に積みます。

必須要素:

- ロゴ
- 住所
- 電話番号
- アクセスボタン
- 主要リンク群
- 電話相談CTA
- Web予約CTA
- プライバシーポリシー
- サイトマップ

## Do's and Don'ts

### Do

- 余白を広く取り、情報をカードで整理する。
- グリーンを中心に、黄色、青、オレンジを識別色として控えめに使う。
- 医師、家族、高齢者、車椅子利用者などの人物イラストを自然に配置する。
- 写真は明るく、自然光が入り、清潔感のあるものを使う。
- 見出しは短く、本文は平易にする。
- 重要CTAは常に見つけやすくする。
- モバイルとPCでセクション順を揃える。
- 老健併設の強みを「医療と介護の連携」としてポジティブに伝える。

### Don't

- ありきたりな医療サイトの青白い無機質な印象に寄せすぎない。
- 情報を詰め込みすぎない。
- 装飾イラストを過剰に置かない。
- AIグラデーション、テックグロウ、ネオン表現を使わない。
- 写真をストック素材のように不自然に見せない。
- ロゴやアイコンに強いシャドウを付けない。
- 文字を小さくしすぎない。
- 背景色を真っ白だけで構成しない。
- 高齢者向けだからといって古いデザインにしない。

## Logo Guidelines

### ロゴの構成

ロゴは「家」「木」「地域の人」を想起させるシンボルと、クロヤナギ医院の文字で構成します。医院を単なる医療施設ではなく、暮らしを支える場所として表現します。

### 使用パターン

- 横組みロゴ: Webヘッダー、フッター、名刺、レターヘッド
- 縦組みロゴ: 小さな紙面、パンフレット表紙、SNS正方形投稿
- シンボル単体: ファビコン、アプリアイコン、地図ピン、SNSプロフィール

### アイソレーション

ロゴ周囲には、シンボル高さの0.5倍以上の余白を確保してください。ヘッダー内でロゴが窮屈に見える場合は、ロゴサイズを下げて余白を優先します。

### 最小サイズ

- デジタル横組み: 幅160px以上
- デジタルシンボル単体: 32px以上
- 印刷横組み: 幅35mm以上
- 印刷シンボル単体: 10mm以上

### 背景との組み合わせ

- 白背景: フルカラーロゴを使用
- クリーム背景: フルカラーロゴを使用
- 濃色背景: 白抜きロゴ、または白カード上にフルカラーロゴ
- 写真上: 写真に直接置かず、白またはクリームの半透明ではないカード上に配置

### 禁止事項

- ロゴを縦横に変形しない。
- シンボルと文字の位置関係を勝手に変えない。
- 指定外の色に変えない。
- 強いシャドウやグローを付けない。
- 写真上に視認性の低い状態で置かない。
- 回転させない。

## Imagery & Illustration

### 写真のトーン

写真は「清潔」「自然光」「余白」「人の気配」を重視します。医療機関としての実在感を担保するため、建物外観、待合室、診療風景、リハビリ室、病室の写真を使います。

### 写真の構図

- 少し引きの構図
- 明るい自然光
- 木目や白壁など温かみのある素材感
- 医師と患者の距離感は近すぎず、安心できる対話の雰囲気
- 顔がはっきりしすぎる場合は許諾や実在感に注意

### 写真加工

- 彩度は少し控えめ
- 明度は高め
- コントラストは弱め
- 黄色すぎる暖色補正は避ける
- 青白すぎる医療写真も避ける

### イラストスタイル

- 線画ベース
- 黒または濃いグレーの細め線
- 塗りはフラットで淡い色
- 顔は細かく描き込みすぎない
- 人物の姿勢はやさしく、相談しやすい印象
- 医療器具は記号的に簡潔に描く

### あしらい

- 鳥
- 雲
- 葉
- 点線パターン
- やわらかな抽象シェイプ
- 医院建物のミニイラスト

あしらいは「地域の空気」「まちのやさしさ」を補うためのものです。主役は情報とユーザー導線です。

### 図解・グラフ

- 線は細く、色はグリーンまたはグレーを基本にする。
- 凡例はチップ状にする。
- 棒グラフやフロー図は角丸を使う。
- 数字はInterで読みやすくする。

## Application Guidelines

### Webサイト

PCサイトでは横幅を活かし、ファーストビューの時点で医院の全体像を見せます。ただし情報過多にせず、診療カテゴリとお知らせ、電話CTAをカードで整理します。

モバイルサイトでは、上から順に迷わず読める1カラム構成を基本にします。重要導線は大きなボタンとして、緑、黄色、青、オレンジの順に区別します。

### スライド

- 背景は `background`
- 見出しは短く中央または左上に配置
- 写真またはイラストを大きく使う
- テキストは詰め込まず、1スライド1メッセージ
- 角丸カードを使って情報をまとめる

### 名刺

- 表面: ロゴ、氏名、役職
- 裏面: 連絡先、住所、Webサイト、診療案内の簡易情報
- 背景は白またはクリーム
- ロゴはフルカラー

### レターヘッド

- 上部左にロゴ
- 下部に住所、電話番号、Webサイト
- 罫線は `line`
- 余白を広めに取る

### SNS

- 正方形投稿は、中央に短いメッセージ、下にロゴまたは小さな医院イラスト
- お知らせはカード型で日付を明確にする
- 写真投稿では、角丸フレームと淡い背景を使う

### サイン・空間

- 外部サインは白地にロゴとグリーンを使用
- 院内サインはアイコンと短い日本語で誘導する
- 高齢者にも読みやすいサイズを優先する
- 黄色や青は行き先区分に使えるが、強く使いすぎない

## Implementation Notes

### CSSカスタムプロパティ例

```css
:root {
  --color-primary: #1E9E6E;
  --color-primary-deep: #087E56;
  --color-primary-soft: #DDF3EA;
  --color-secondary: #FFD968;
  --color-tertiary: #E07A5F;
  --color-blue: #4C5FD6;
  --color-bg: #FFF4E6;
  --color-surface: #FFFFFF;
  --color-surface-warm: #FFF9F0;
  --color-line: #EADFCC;
  --color-text: #2B2B2B;
  --color-muted: #6B6B6B;

  --font-ja: "Noto Sans JP", system-ui, sans-serif;
  --font-en: "Inter", system-ui, sans-serif;

  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-pill: 999px;

  --shadow-card: 0 8px 24px rgba(43, 43, 43, 0.06);
  --shadow-floating: 0 16px 40px rgba(43, 43, 43, 0.10);
}
```

### ボタン実装例

```css
.button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 14px 28px;
  border-radius: var(--radius-pill);
  background: var(--color-primary);
  color: #fff;
  font-family: var(--font-ja);
  font-weight: 700;
  letter-spacing: 0.04em;
  box-shadow: 0 8px 18px rgba(30, 158, 110, 0.18);
}

.button-primary:hover {
  background: var(--color-primary-deep);
}
```

### カード実装例

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: 24px;
}
```

### レスポンシブ方針

```css
.section {
  padding-block: clamp(56px, 8vw, 112px);
}

.container {
  width: min(100% - 40px, 1200px);
  margin-inline: auto;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 32px;
}

@media (min-width: 960px) {
  .hero-grid {
    grid-template-columns: 0.9fr 1.1fr 0.9fr;
    align-items: center;
    gap: 40px;
  }
}
```

## Accessibility

### 文字サイズ

- 本文は原則16px以上。
- 注釈でも12px未満にしない。
- 高齢者や保護者世代が読むことを想定し、ボタン文字と住所情報は小さくしすぎない。

### コントラスト

- 重要な本文は `text` を使用する。
- グリーン背景のボタンには白文字を使う。
- 黄色背景には黒系テキストを使う。
- 淡色背景に淡色文字を置かない。

### タップ領域

- モバイルのタップ領域は44px以上。
- CTAボタンは高さ50px以上を推奨。
- 診療カテゴリカードはカード全体をタップ可能にする。

### 読み上げ対応

- アイコンだけで意味を伝えない。
- ボタンには具体的なラベルを付ける。
- 地図画像には住所と交通情報をテキストでも併記する。

## Content Tone

### 文章のトーン

- 丁寧
- やさしい
- 簡潔
- 不安を煽らない
- 医療機関として信頼できる

### 推奨表現

- ご相談ください
- 安心して通える
- 一人ひとりに寄り添う
- 地域の皆さま
- 健やかな暮らし
- 医療と介護をつなぐ

### 避ける表現

- 過度に広告っぽい言い回し
- 最高、圧倒的、絶対などの強すぎる表現
- 不安を強く煽る表現
- 医療効果を断定する表現

## Page Blueprint

### PCホーム

1. Header
2. Hero
   - Logo
   - Main copy
   - Category shortcuts
   - Illustration group
   - News card
   - Facility photo
   - Phone and reservation CTA
3. About
   - Text block
   - Exterior photo
4. Features
   - Four feature cards
   - Side shortcut CTA stack
5. Services
   - Four service cards
6. Facility
   - Photo gallery
7. Access
   - Map card
   - Address and route information
8. Footer

### Mobile Home

1. Header
2. Hero copy
3. Illustration
4. Category shortcuts
5. News card
6. Colored CTA stack
7. Consultation hours card
8. About
9. Features
10. Services
11. Facility
12. Access
13. News/CTA support
14. Footer

### 注意

PCとモバイルでレイアウトは変えてよいですが、情報の意味と順序を大きく変えないでください。特に「アバウト」「特徴」「診療案内」「施設紹介」「アクセス」「フッター」の流れは揃えます。

## Asset Checklist

実装時に必要な素材は以下です。

### ロゴ

- horizontal-logo.svg
- vertical-logo.svg
- symbol.svg
- symbol-white.svg
- favicon.svg

### イラスト

- clinic-building.svg
- family-and-doctor.svg
- elderly-care.svg
- rehabilitation.svg
- health-check.svg
- birds.svg
- leaves.svg
- organic-shape-green.svg
- organic-shape-yellow.svg
- dotted-pattern.svg

### 写真

- exterior.jpg
- waiting-room.jpg
- doctor-consultation.jpg
- rehabilitation-room.jpg
- patient-room.jpg
- reception.jpg

### UI

- icon-home.svg
- icon-doctor.svg
- icon-stethoscope.svg
- icon-wheelchair.svg
- icon-calendar.svg
- icon-phone.svg
- icon-map.svg
- icon-arrow-right.svg

## Governance

### 更新ルール

- カラー、フォント、角丸、主要コンポーネントを変更する場合は、このDESIGN.mdを先に更新する。
- Web、スライド、紙媒体で表現がズレた場合は、DESIGN.mdを基準に戻す。
- 新しいページやLPを作る場合も、ページ構成、色、余白、イラストスタイルをこのファイルに合わせる。

### 承認フロー

1. 制作担当がデザイン案を作成
2. DESIGN.mdとの差分を確認
3. 医院側またはブランド管理者が確認
4. 実装または公開
5. 変更が恒久的な場合はDESIGN.mdへ反映

### 問い合わせ窓口

- ブランド管理: クロヤナギ医院 広報・事務局
- Web管理: 制作担当または保守担当
- 医療情報確認: 院長または担当医師

