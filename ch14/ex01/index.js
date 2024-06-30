function unwritableAndUnconfigurableObj() {
  const obj = { a: 1 };
  Object.freeze(obj);//オブジェクトを拡張不可にし、プロパティを再定義不可にするだけでなく、オブジェクトの独自データプロパティを読み出し専用にする
  return obj;
}

function writableAndUnconfigurableObj() {
  const obj = { b: 2 };
  Object.defineProperty(obj, "b", { configurable: false });
  return obj;
}

function nestedUnwritableObj() {
  const obj = { c: { d: { e: 3 } } };

  Object.freeze(obj.c);
  Object.freeze(obj.c.d);
  return obj;
}

export { nestedUnwritableObj, unwritableAndUnconfigurableObj, writableAndUnconfigurableObj };
