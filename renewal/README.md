# クロヤナギ医院 renewal

既存サイトと `clinic/` の作りかけサイトを残したまま、ゼロベースで作り直す新サイト領域です。

## 開発

```bash
npm install
npm run dev
```

開発サーバーは `http://localhost:3001/` で起動します。

## ビルド

```bash
npm run build
```

## 方針

- 既存ルートサイトと `clinic/` は完成前に置き換えない。
- 新サイトの実装は `renewal/` 内に閉じる。
- 写真素材は `renewal/public/photo/` に配置して、Next.js 開発環境で単体確認できるようにする。
