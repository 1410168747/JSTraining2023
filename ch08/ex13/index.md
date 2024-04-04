## 問題 8.13 🖋(💻)

以下のコードが Web サービスの一部で使われており、引数の `input` には Web サービスの利用者が入力した文字列が渡されるものとする。

```js
function f(input) {
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
}
```

このコードには重大な問題が含まれている。何が問題と考えられるか記述しなさい。
可能なら問題を実証できるコードも記載しなさい。

**出題範囲**: 8.7.7

### 答案

`${input}`を評価するとコードが実行されるような`input`を検討することで、任意のコードを実行できる。

たとえば以下の`maliciousInput`の例では、`input`を空文字と _IIFE_ を連結したものにしている。

```js
const maliciousCode = `console.log('💀💀💀');`;
const maliciousInput = `"" + (function () {${maliciousCode} return ""})();`;
f(maliciousInput);
```

`input`の値を決定するためには、 _IIFE_ が先行して評価される。その評価の中で`mariciousCode`が実行される。

`f(maliciousInput)`を実行すると

> 💀💀💀
> Hello,

という出力が得られる。`maliciousCode`を`while(true){};`などとすれば無限ループに陥らせることもできる。
