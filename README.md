# 英心館サイト

`npm install` の後、`npm run dev` で起動します。`npm run build` で本番ビルド、`npm start` で起動します。Next.js 対応環境へデプロイしてください。

稽古情報は `lib/data.js` で一元管理しています。CMS・管理画面は未接続です。既存サイトにアクセスできず、館長の氏名・経歴、住所、連絡先、料金、ロゴ等は未確認です。原文の「測る」「身につけれらる」は提供文のままです。公開前に管理者へ確認してください。

画像は `pics` のコピーを `public/images` に配置。道場.jpg は共通、館長.jpg は館長、双葉道場*・南アルプス道場*・酒折道場* はそれぞれ該当道場の詳細で使用しています。道場1〜5は共通写真ですが現在未使用です。

## GitHub Pages
リポジトリの Settings → Pages → Build and deployment → Source で GitHub Actions を選択し、変更を main に push します。Actions の Deploy GitHub Pages が成功すると、ジョブの github-pages 環境に公開 URL が表示されます。静的ファイルは out/ に生成されます。
