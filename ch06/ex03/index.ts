/*
## 問題 6.4 💻

[Object.defineProperty()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) を使うと、writable 属性/enumerable 属性/configurable 属性を設定してオブジェクトのプロパティを定義できる。
このメソッドを使って明示的に各属性を設定したプロパティを定義し、プロパティの変更、削除、`hasOwnProperty` と `propertyIsEnumerable` の結果に対してどのように影響するか確認するコードを書きなさい。

**出題範囲**: 6.3 - 6.6
*/
let obj: any = {};
obj.x = 1;
let p = Object.create(obj);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
q.x + q.y;

console.log(`o.isPrototypeOf(p): ${obj.isPrototypeOf(p)}`); // true
console.log(`o.isPrototypeOf(q): ${obj.isPrototypeOf(q)}`); // true
console.log(`p.isPrototypeOf(q): ${p.isPrototypeOf(q)}`); // true

const o = new Object();
const a = new Array();
const d = new Date();
const m = new Map();

console.log(
  `Object.prototype.isPrototypeOf(o): ${Object.prototype.isPrototypeOf(o)}`
); // true
console.log(
  `Array.prototype.isPrototypeOf(o): ${Array.prototype.isPrototypeOf(o)}`
); // false
console.log(
  `Date.prototype.isPrototypeOf(o): ${Date.prototype.isPrototypeOf(o)}`
); // false
console.log(
  `Map.prototype.isPrototypeOf(o): ${Map.prototype.isPrototypeOf(o)}`
); // false

console.log(
  `Object.prototype.isPrototypeOf(a): ${Object.prototype.isPrototypeOf(a)}`
); // true
console.log(
  `Array.prototype.isPrototypeOf(a): ${Array.prototype.isPrototypeOf(a)}`
); // true
console.log(
  `Date.prototype.isPrototypeOf(a): ${Date.prototype.isPrototypeOf(a)}`
); // false
console.log(
  `Map.prototype.isPrototypeOf(a): ${Map.prototype.isPrototypeOf(a)}`
); // false

console.log(
  `Object.prototype.isPrototypeOf(d): ${Object.prototype.isPrototypeOf(d)}`
); // true
console.log(
  `Array.prototype.isPrototypeOf(d): ${Array.prototype.isPrototypeOf(d)}`
); // false
console.log(
  `Date.prototype.isPrototypeOf(d): ${Date.prototype.isPrototypeOf(d)}`
); // true
console.log(
  `Map.prototype.isPrototypeOf(d): ${Map.prototype.isPrototypeOf(d)}`
); // false

console.log(
  `Object.prototype.isPrototypeOf(m): ${Object.prototype.isPrototypeOf(d)}`
); // true
console.log(
  `Array.prototype.isPrototypeOf(m): ${Array.prototype.isPrototypeOf(d)}`
); // false
console.log(
  `Date.prototype.isPrototypeOf(m): ${Date.prototype.isPrototypeOf(d)}`
); // false
console.log(
  `Map.prototype.isPrototypeOf(m): ${Map.prototype.isPrototypeOf(d)}`
); // true
