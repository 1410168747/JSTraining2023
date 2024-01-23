# 解答

## 問

## 問題 5.8 🖋️

以下のプログラムの出力を予想し、実際の実行結果を確認しなさい。

```
let x = 0;

for(let i = 1; i <= 5; i++) {
    x = i;
    try {
        throw Error();
    } catch {
        break;
    } finally {
        continue;
    }
}

console.log(x);
```

**出題範囲**: 5.5.7

# 解答

## 予測
以下の挙動により5が表示される。

1. iが1となる
1. try節のthrowが実行されると、制御がcatch節内に移る。
1. break文が実行される直前に、次はfinally節内に制御が移る。
1. その結果continue文が実行され、iがインクリメントされる。
1. iが5未満の場合は#2に戻る
1. iを出力する