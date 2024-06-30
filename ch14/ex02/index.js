export class MyArrayLike {

  constructor(length) {
    this.length = length;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; i++) {
      yield this[i];
    }
  };

}

export class MyArray extends Array {

  static get [Symbol.species]() {
    return MyArrayLike;
  }

  constructor(items) {
    super(...items);
  }
}
