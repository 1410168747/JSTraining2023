## 問題 8.11 🖋️

組み込み関数と自作関数の `toString()` の出力内容を確認しなさい

**出題範囲**: 8.7.6

### 答案

```js
const f = alert;
console.log(f.toString()); //function alert() { [native code] }
const of = () => console.log("an original function");
console.log(of.toString()); //() => console.log("an original function")
```
