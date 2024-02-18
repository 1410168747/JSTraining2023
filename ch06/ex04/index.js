/*
## 問題 6.4 💻

[Object.defineProperty()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) を使うと、writable 属性/enumerable 属性/configurable 属性を設定してオブジェクトのプロパティを定義できる。
このメソッドを使って明示的に各属性を設定したプロパティを定義し、プロパティの変更、削除、`hasOwnProperty` と `propertyIsEnumerable` の結果に対してどのように影響するか確認するコードを書きなさい。

**出題範囲**: 6.3 - 6.6
*/

function createObject() {
  const result = {};
  Object.defineProperty(result, "wec", {
    value: "writable: true, enumerable: true, configurable: true",
    writable: true,
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(result, "we_", {
    value: "writable: true, enumerable: true, configurable: false",
    writable: true,
    enumerable: true,
    configurable: false,
  });
  Object.defineProperty(result, "w_c", {
    value: "writable: true, enumerable: false, configurable: true",
    writable: true,
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(result, "_ec", {
    value: "writable: false, enumerable: true, configurable: true",
    writable: false,
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(result, "w__", {
    value: "writable: true, enumerable: false, configurable: false",
    writable: true,
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(result, "_e_", {
    value: "writeable: false, enumerable: true, configurable: false",
    writable: false,
    enumerable: true,
    configurable: false,
  });
  Object.defineProperty(result, "__c", {
    value: "writable: false, enumerable: false, configurable: true",
    writable: false,
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(result, "___", {
    value: "writable: false, enumerable: false, configurable: false",
    writable: false,
    enumerable: false,
    configurable: false,
  });
  return result;
}

const target2 = createObject();

target2.wec = "changed";
target2.we_ = "changed";
target2.w_c = "changed";
target2._ec = "changed";
target2.w__ = "changed";
target2._e_ = "changed";
target2.__c = "changed";
target2.___ = "changed";

// configurableがtrueのみ変更可能
console.log("--- change properties - start");
console.log(`wec: ${target2.wec}`);//changed
console.log(`wec: ${target2.we_}`);//changed
console.log(`wec: ${target2.w_c}`);//changed
console.log(`wec: ${target2._ec}`);//writable: false, enumerable: true, configurable: true
console.log(`wec: ${target2.w__}`);//changed
console.log(`wec: ${target2._e_}`);//writable: false, enumerable: true, configurable: false
console.log(`wec: ${target2.__c}`);//writable: false, enumerable: false, configurable: true
console.log(`wec: ${target2.___}`);//writable: false, enumerable: false, configurable: false
console.log("--- change properties - end");

const target3 = createObject();

delete target3.wec;
delete target3.we_;
delete target3.w_c;
delete target3._ec;
delete target3.w__;
delete target3._e_;
delete target3.__c;
delete target3.___;

// writableがtrueのみ削除可能
console.log("--- delete properties - start");
console.log(`wec: ${target3.wec}`);//undefined
console.log(`we_: ${target3.we_}`);//writable: true, enumerable: true, configurable: false
console.log(`w_c: ${target3.w_c}`);//undefined
console.log(`_ec: ${target3._ec}`);//undefined
console.log(`w__: ${target3.w__}`);//writable: true, enumerable: false, configurable: false
console.log(`_e_: ${target3._e_}`);//writable: false, enumerable: true, configurable: false
console.log(`__c: ${target3.__c}`);//undefined
console.log(`___: ${target3.___}`);//writable: false, enumerable: false, configurable: false
console.log("--- delete properties - end");


const target4 = createObject();
console.log("--- hasOwnPropery - start");
console.log(`wec: ${target4.hasOwnProperty('wec')}`);//true
console.log(`we_: ${target4.hasOwnProperty('we_')}`);//true
console.log(`w_c: ${target4.hasOwnProperty('w_c')}`);//true
console.log(`_ec: ${target4.hasOwnProperty('_ec')}`);//true
console.log(`w__: ${target4.hasOwnProperty('w__')}`);//true
console.log(`_e_: ${target4.hasOwnProperty('_e_')}`);//true
console.log(`__c: ${target4.hasOwnProperty('__c')}`);//true
console.log(`___: ${target4.hasOwnProperty('___')}`);//true
console.log("--- hasOwnPropery - end");

const target5 = createObject();
console.log("--- propertyIsEnumerable - start");
console.log(`wec: ${target4.propertyIsEnumerable('wec')}`);//true
console.log(`we_: ${target4.propertyIsEnumerable('we_')}`);//true
console.log(`w_c: ${target4.propertyIsEnumerable('w_c')}`);//false
console.log(`_ec: ${target4.propertyIsEnumerable('_ec')}`);//true
console.log(`w__: ${target4.propertyIsEnumerable('w__')}`);//false
console.log(`_e_: ${target4.propertyIsEnumerable('_e_')}`);//true
console.log(`__c: ${target4.propertyIsEnumerable('__c')}`);//false
console.log(`___: ${target4.propertyIsEnumerable('___')}`);//false
console.log("--- propertyIsEnumerable - end");
