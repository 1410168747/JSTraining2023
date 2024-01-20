/*
三項演算子を用いた複雑な式は可読性が低く、一般的に避けたほうが良いとされている。
複雑な式の例として、以下のプログラムは 1 から 100 までの [FizzBuzz](https://ja.wikipedia.org/wiki/Fizz_Buzz) を出力する。
このプログラムを三項演算子のかわりに `if` 文を用いて実装し直しなさい。

```javascript
for (i = 1; i < 101; i++)
  console.log(i % 15 ? (i % 3 ? (i % 5 ? i : "Buzz") : "Fizz") : "FizzBuzz");
```

**出題範囲**: 4.7
*/
for (let i = 1; i < 101; i++) {
  if (i % 15) {
    if (i % 3) {
      if (i % 5) {
        console.log(i);
      } else {
        console.log("Buzz");
      }
    } else {
      console.log("Fizz");
    }
  } else {
    console.log("FizzBuzz");
  }
}
