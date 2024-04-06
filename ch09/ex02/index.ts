export class C {
  private _x: number = 0;
  get x() {
    return this._x++;
  }
}
