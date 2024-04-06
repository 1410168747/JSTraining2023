# 解答

## 問

## 問題 4.5 🖋️

以下のプログラムは 1 から 100 までの FizzBuzz を出力する。
Fizz、Buzz、FizzBuzz、数値、それぞれのケースで式がどのように評価されるか言及しつつ処理を説明しなさい。

```javascript
for (i = 1; i < 101; i++)
  console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
```

**出題範囲**: 4.10

# 解答

```
(i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i
```

について、最初に`||`の左辺: `(i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz")`が評価される。
`(i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz")`が空文字に評価されるケースにのみ、短絡演算子`||`の右辺`i`が評価される

左辺値が空文字になるケースは
`i % 3 ? "" : "Fizz"`と`i % 5 ? "" : "Buzz"`の両方が空文字に評価されるケースである。

`i % 3 ? "" : "Fizz"`が空文字に評価されるのは`i % 3`が`true`に評価される場合、つまり、`i % 3`が0以外になる場合である。言い換えると`i`が3で割り切れない場合である。

同様に`i % 5 ? "" : "Buzz"`が空文字に評価されるのは`i`が5で割り切れない場合である。

`i % 3`の評価と`i % 5`の評価は独立して行われるので、iが3でも5でも割り切れる場合は`i % 3 ? "" : "Fizz"`は`Fizz`、と`i % 5 ? "" : "Buzz"`は`Buzz`と評価され、`+`演算子で連結されるので、`FizzBuzz`となる。

以上を考慮に入れると、
`(i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i`が"Fizz"と評価されるのは
iが3で割り切れ、かつ5で割り切れない場合である。

"Buzz"と評価されるのは
iが5で割り切れ、かつ3で割り切れない場合である。

"FizzBuzz"と評価されるのは
5でも3でも割り切れる場合、つまり15で割り切れる場合である。

それ以外のケースでは```i```が評価されその値が出力される。