# tasklist.md

## 対象作業

`renewal/` 配下でのクロヤナギ医院サイト新規構築。

## タスク一覧

- [x] 既存サイトを残し、`renewal/` で新サイトを作る方針を決める
- [x] `AGENTS.md` を現在のリポジトリ構成に合わせて更新する
- [x] `requirements.md` を `renewal/` 新規構築方針へ更新する
- [x] `design.md` を `renewal/` 新規構築方針へ更新する
- [x] `tasklist.md` を `renewal/` 新規構築方針へ更新する
- [x] `requirements_definition.md` を新サイト方針として作成する
- [x] `renewal/` に Next.js の最小構成を作成する
- [x] 既存画像素材を `renewal/public/photo/` に配置する
- [x] トップページの初期セクションを実装する
- [x] `npm install` を実行する
- [x] `npm run build` を実行する
- [ ] ローカル表示確認を行う

## 現在の進捗

- 方針: 既存サイトと `clinic/` を残し、`renewal/` でゼロベース構築する方針に決定
- ドキュメント: `renewal/` 新規構築方針へ更新済み
- 実装: `renewal/` にトップページ初期骨格を作成済み
- 検証: `npm run build` 成功。`http://localhost:3001/` でデスクトップ表示の主要要素、画像読み込み、横スクロールなしを確認済み。スクリーンショットとモバイル幅確認はツール呼び出し拒否により未完了
- 注意: `npm audit --omit=dev` で Next.js 由来の high severity vulnerability を 1 件確認。自動修正は Next.js 16 系への破壊的更新になるため、別タスクで判断する

## 完了条件

- `renewal/` に新サイトの独立した作業領域がある
- 既存ルートサイトと `clinic/` が残っている
- `renewal/` のトップページ骨格が表示できる
- `renewal/` で `npm run build` が成功する
- ドキュメントと実装方針が一致している
