# 解答

## 問

## 問題 5.7 🖋️

以下のプログラムの出力を予想し、実際の実行結果を確認しなさい。

```
function f() {
    try {
        return true;
    } finally {
        return false;
    }
}

console.log(f());
```

**出題範囲**: 5.5.7

# 解答

falseが表示される。

> 制御フロー文（return, throw, break, continue）を finally ブロック内で使うと、try ブロックや catch ブロックの完了値を「マスク」します。この例では、try ブロックは 1 を返そうとしますが、返す前にまず finally ブロックに制御を委ねるので、代わりに finally ブロックの返値が返されます。

<https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/try...catch>
