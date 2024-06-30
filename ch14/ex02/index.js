export class MyArrayLike {

  constructor(length) {// mapおよびsliceからはlengthが渡されるように見えるが、根拠は不明
    this.length = length;
  }
}

export class MyArray extends Array {

  static get [Symbol.species]() {
    return MyArrayLike;
  }

  constructor(items) {
    super(...items);
  }
}
