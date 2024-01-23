/*
## 問題 5.6 💻

try-catch-finallyの実行順序が確認できるコードを書きなさい。

**出題範囲**: 5.5.7
*/

try {
  console.log("try");
  throw new Error("error");
} catch (e) {
  console.log("catch");
} finally {
  console.log("finally");
}
