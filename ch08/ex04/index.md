## 問題 8.4 🖋️

以下の入れ子の関数とアロー関数のコード実行結果を予想してから実行し、結果を説明しなさい。

```js
const obj = {
  om: function () {
    const nest = {
      nm: function () {
        console.log(this === obj, this === nest);
      },
      arrow: () => {
        console.log(this === obj, this === nest);
      },
    };
    nest.nm();
    nest.arrow();
  },
};
obj.om();
```

**出題範囲**: 8.2.2

### 答案

#### 予想

`nest.nm()`が起動したとき、`nm`直下の`this`にはメソッドが呼び出されたオブジェクト`nest`が設定されます。
その結果、`this === obj`は`false`に`this === nest`は`true`に評価されます。

アロー関数では`this`はそれを囲む構文上のコンテキストの`this`の値が設定されます。
`nest.arrow()`が起動したとき、`arrow`を囲むコンテキストの`this`は`om`の`this`と一致する。
`om`の`this`は`obj`なので`this === obj`は`true`に`this === nest`は`false`に評価されます。
