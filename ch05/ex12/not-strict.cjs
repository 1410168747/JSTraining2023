/*
## 問題 5.12 💻

非 strict モードでは動作するが strict モードでは動作しないプログラムを書き、それぞれ `not-strict.js`, `strict.js` として作成しなさい。
`strict.js` を変更することによって、strict モードでも動作するようにしたプログラム `strict-fixed.js` を作成しなさい。
ただし、拡張子 `.js` は必要があれば変更してよい。

**ヒント**:
package.json で `"type": "module"` が指定されている場合、Node 上では `.js` ファイルが常に strict モードで実行される。
非 strict モードで実行したい場合は `.js` ではなく `.cjs` ファイルとして作成するとよい。
他には `.html` ファイルとして作成してブラウザ上で実行する方法もある。

**出題範囲**: 5.6.3
*/
let obj = { property: "value" };

let start = performance.now();

for (let i = 0; i < 1000000; i++) {
    let temp = obj.property;
}

let end = performance.now();
console.log("No 'with': ", end - start, "milliseconds");