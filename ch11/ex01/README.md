## 問題 11.1 💻🧪

以下のような動作を実現する、 `TypeMap` クラスを作成しなさい。

```js
class Foo {}

const typeMap = new TypeMap();
typeMap.set(String, "string");
typeMap.set(Number, 123);
typeMap.set(Foo, new Foo());
typeMap.set(Date, "not a date"); // -> Error

typeMap.get(String); // -> "string"
typeMap.get(Number); // -> 123
```

- `Map` と同様のインタフェース(`get`, `set`)を持つ。ただし、`key` はコンストラクタ関数に限定する
- `set` では、 コンストラクタ関数の `key` と そのクラスの `value` のみ受け付け、それ以外の値が渡された場合はエラーとする。これにより、`get` で取得する値が `key` に指定したコンストラクタ関数のクラスであることを保証する。
  - TypeScriptの場合はそのような `key`, `value` の型定義とする
- プリミティブ値は、ラッパークラスのコンストラクタ関数で `get`/`set` 可能とする

**出題範囲**: 11.1
