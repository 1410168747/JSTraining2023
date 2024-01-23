/*
**出題範囲**: 4.13

## 問題 4.9 💻

typeof 演算子のオペランドに、`undefined`, `null`, `オブジェクト`, `NaN`, `数値`, `関数` を指定したときの返り値を予想しなさい。
その後実装しコンソール出力で確認しなさい。

**出題範囲**: 4.13.3
*/
console.log(typeof undefined); // expected: undefined, actual: undefined
console.log(typeof null); // expected: null, actual: object
console.log(typeof {}); // expected: object, actual: object
console.log(typeof NaN); // expected: object, actual: number
console.log(typeof 1); // expected: number, actual: number
console.log(typeof (() => {})); // expected: function, actual: function
