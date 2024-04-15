function generateClass(a: number, b: number) {
  return class {
    static method(): number {
      return a;
    }
    method(): number {
      return b;
    }
  };
}

export class C extends generateClass(1, 2) {
  constructor() {
    super();
  }
  static C = generateClass(3, 4);
  C = generateClass(5, 6);
}
