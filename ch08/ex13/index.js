// ## 問題 8.13 🖋(💻)

// 以下のコードが Web サービスの一部で使われており、引数の `input` には Web サービスの利用者が入力した文字列が渡されるものとする。

// ```js
// function f(input) {
//   const f = new Function(`return "Hello, " + ${input}`);
//   console.log(f());
// }
// ```

// このコードには重大な問題が含まれている。何が問題と考えられるか記述しなさい。
// 可能なら問題を実証できるコードも記載しなさい。

// **出題範囲**: 8.7.7

function f(input) {
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
}

const maliciousCode = `console.log('💀💀💀');`
const maliciousInput = `"" + (function () {${maliciousCode} return ""})();`;
f(maliciousInput);