## 問題 13.4 💻🧪

実は最近の Node.js は `Promise` 版の `fs` ライブラリを提供している。
このため先の問題のようにわざわざ自分で Promise 版の関数を作る必要はない。

```js
import * as fs from "node:fs";
import * as fsPromises from "node:fs/promises";

fsPromises
  .mkdir("A")
  .then(() => fsPromises.mkdir("B"))
  .then(() => fsPromises.mkdir("C"));
```

それでは以下の 2 つの関数を `node:fs/promises` を利用し Promise を返す関数に書き換えなさい:

```js
function fetchFirstFileSize(path, callback) {
  fs.readdir(path, (err, files) => {
    if (err) {
      callback(err);
      return;
    }
    if (files.length === 0) {
      callback(null, null);
      return;
    }

    fs.stat(join(path, files[0]), (err, stats) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, stats.size);
    });
  });
}

function fetchSumOfFileSizes(path, callback) {
  fs.readdir(path, (err, files) => {
    if (err) {
      callback(err);
      return;
    }

    let total = 0;
    const rest = [...files];

    function iter() {
      if (rest.length === 0) {
        callback(null, total);
        return;
      }

      const next = rest.pop();
      fs.stat(join(path, next), (err, stats) => {
        if (err) {
          callback(err);
          return;
        }
        total += stats.size;
        iter();
      });
    }
    iter();
  });
}
```

**出題範囲**: 13.2
