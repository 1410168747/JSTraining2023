# 練習問題: 13 章

## 問題 13.3 💻🧪

`Promise` コンストラクタを使うことでコールバックを要求する非同期関数を `Promise` を返す関数に変換することができる。
以下は Node.js 標準ライブラリのディレクトリ (フォルダ) を作成する関数 `fs.mkdir` を変換する例である:

```js
import * as fs from "node:fs";

function mkdir(path, options) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, options, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

// ディレクトリ A → B → C を順に作る以下のコード (※ エラーハンドリングは省略) を...
fs.mkdir("A", () => {
  fs.mkdir("B", () => {
    fs.mkdir("C", () => console.log("COMPLETED"));
  });
});

// 以下のように書くことができる
mkdir("A")
  .then(() => mkdir("B"))
  .then(() => mkdir("C"))
  .then(() => console.log("COMPLETED"));
```

同様にして以下の関数の Promise 版を作成しなさい:

- [fs.readdir](https://nodejs.org/api/fs.html#fsreaddirpath-options-callback)
- [fs.stat](https://nodejs.org/api/fs.html#fsstatpath-options-callback)

**出題範囲**: 13.2
