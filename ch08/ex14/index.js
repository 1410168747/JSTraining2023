// ## 問題 8.14 💻🧪

// 以下の高階関数を実装しなさい

// 1. 残余パラメータとして任意の数の関数を受け取り、いずれかの関数が true を返せば true を返す新たな関数を返す`any` 関数

//   ```js
// const isNonZero = any(
//   (n) => n > 0,
//   (n) => n < 0
// );

// console.log(isNonZero(0)); // => false
// console.log(isNonZero(42)); // => true
// console.log(isNonZero(-0.5)); // => true
// ```

// 2.  引数として 2 つの関数を受け取り、1 つ目の関数で発生した例外を 2 つ目の関数の引数として処理し結果を返す新たな関数を返す`catching` 関数

//   ```js
// const safeJsonParse = catching(JSON.parse, (e) => {
//   return { error: e.toString() };
// });

// console.log(safeJsonParse('{"a": 1}')); // => {a: 1}
// console.log(safeJsonParse("{Invalid Json}")); // => {error: "SyntaxError: ..."}
// ```

//   ** 出題範囲 **: 8.8.2

export const any = (...fns) => {
  return (...args) => {
    return fns.some(fn => fn(...args));
  };
}

export const catching = (fn, errorHandler) => {
  return (...args) => {
    try {
      return fn(...args);
    } catch (e) {
      return errorHandler(e);
    }
  };
}