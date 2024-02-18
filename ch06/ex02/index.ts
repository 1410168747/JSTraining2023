/*
**出題範囲**: 6.1

## 問題 6.2 💻

オブジェクトリテラルで独自プロパティを持つオブジェクトを定義し、`Object.create` を使用してその継承オブジェクトを生成しなさい。
[Object.getPrototypeOf()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
を利用して、生成した継承オブジェクトのプロトタイプが`Object.create` で渡したオブジェクトになっていることを確認しなさい。
*/

const myObject: object = {
  myProp: "myProp",
};
const myInheritedObject = Object.create(myObject);
console.log(Object.getPrototypeOf(myInheritedObject) === myObject); // true
