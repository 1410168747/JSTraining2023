export class C1 {
  private _x = 42;
  getX() {
    return this._x;
  }
}

export class C2 {
  getX = () => {
    const result = 42;
    return (() => result)();
  };
}
