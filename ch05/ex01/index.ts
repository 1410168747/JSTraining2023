/*
# 練習問題: 5 章

## 問題 5.1 💻

文ブロックを使って同じ関数内に同じ変数名の const を複数宣言する関数を書きなさい。

**出題範囲**: 5.2
*/
function f() {
  {
    const x = 1;
    console.log(x);
  }
  {
    const x = 2;
    console.log(x);
  }
  // console.log(x);// 参照できない
}
