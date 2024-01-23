/*
## 問題 5.10 💻🖋️

オブジェクトのプロパティアクセスで、`with`を使用した場合と使用しない場合での速度をそれぞれ計測しなさい。

**出題範囲**: 5.6.1
*/
let obj = { property: "value" };

let start = performance.now();

for (let i = 0; i < 1000000; i++) {
  let temp = obj.property;
}

let end = performance.now();
console.log("No 'with': ", end - start, "milliseconds");

let obj2 = { property: "value" };

let start2 = performance.now();

for (let i = 0; i < 1000000; i++) {
  with (obj2) {
    let temp = property;
  }
}

let end2 = performance.now();
console.log("With 'with': ", end2 - start2, "milliseconds");

//厳格モードが無効にできなかったのでオンラインエディタで実施
// node /tmp/32laIJrZ7a.js
// No 'with':  15.962650000001304 milliseconds
// With 'with':  88.0256980000122 milliseconds