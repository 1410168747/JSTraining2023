# 練習問題 15 章 15.11-15

## 問題 15.11-15.7 💻

書籍では一言しか触れられていないが、[ContentSecurity-Policy (CSP)](https://developer.mozilla.org/ja/docs/Web/HTTP/CSP) はクロスサイトスクリプティング (XSS) やデータインジェクションなどのリスクを軽減するための仕組みで、主にブラウザ上のコンテンツの読み込みを信頼されたコンテンツのみに制限することで実現される。

CSP には様々なディレクティブが存在するが、その中の `script-src` ディレクティブによって有効な JavaScript のソースを指定することができる。

この問題においても、サーバを `node ex07/server.js` のコマンドで実行し、http://localhost:3000/ にアクセスすると `contents/index.html` のコンテンツをロードすることができる。

このコンテンツをブラウザで表示すると、"RICOH", "Hello", "World" の 3 つのアラートを表示するようになっている。
`server.js` の以下の箇所を変更して CSP ヘッダを設定することで、"RICOH" および "Hello" のアラートは表示されるが、 "World" のアラートは表示されないようにしなさい。

```js
// CSP のヘッダを返すミドルウェア
function cspMiddleware(_url, req, res) {
  // TODO: CSP ヘッダを設定する
  // res.setHeader("Content-Security-Policy", "TODO");
  return true;
}
```

**出題範囲: 15.15.3**
