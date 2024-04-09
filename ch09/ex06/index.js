export class TypedMap extends Map {

  #keyType;
  #valueType;

  constructor(keyType, valueType, entries) {
    // entriesが指定されている場合、型をチェックする。
    if (entries) {
      for (let [k, v] of entries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
        }
      }
    }
    super();
    // (型チェックされた)entriesを使って、スーパークラスを初期化する。
    this.m = new Map(entries);
    // 次に、型を保存して、サブクラスを初期化する。
    this.#keyType = keyType;
    this.#valueType = valueType;
  }
  // set()メソッドを再定義して、マップに追加されるキーと値のペアに対して
  // 型チェックを行うようにする。
  set(key, value) {
    // keyやvalueの型が異なっている場合は、エラーをスローする。
    if (this.#keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not of type ${this.keyType}`);
    }
    if (this.#valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);
    }
    // 型が正しい場合、スーパークラスのset()メソッドを呼び出し、
    // エントリをマップに追加する。スーパークラスから返されたものを
    // そのまま返す。
    return this.m.set(key, value);
  }

  clear() {
    this.m.clear();
  }
  delete() {
    return this.m.delete();
  }
  forEach(callbackfn, thisArg) {
    return this.m.forEach(callbackfn, thisArg);
  }
  get(key) {
    return this.m.get(key);
  }
  has(key) {
    return this.m.has(key);
  }
  get size() {
    return this.m.size;
  }

  get keyType() {
    return this.#keyType;
  }

  get valueType() {
    return this.#valueType;
  }
}
