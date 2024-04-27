## 問題 11.9 💪💻📄

正規表現は魔法ではない。簡単な正規表現のエンジンを書いてみよう。ch11/ex09/index.js を完成させなさい。
ここでは `/([Jj]ava([Ss]cript)?) is fun/` という正規表現を以下のような JavaScript の式で表現するものとする:

```js
const p = seq(
  seq(
    charFrom("Jj"),
    quote("ava"),
    repeat(seq(charFrom("Ss"), quote("cript")), 0, 1)
  ),
  quote(" is fun")
);
```

**出題範囲**: 11.3
