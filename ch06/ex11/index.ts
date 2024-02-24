/*
## 問題 6.11 💻 🧪

極座標 `r` と `theta` をプロパティにもち、ゲッターとセッターをもつ読み書き可のアクセサプロパティとしてデカルト座標 `x` と `y` をもつオブジェクトを実装しなさい。

セッターメソッドにおいて `x` と `y` それぞれに `NaN` が設定される場合にはエラーにしなさい。

**出題範囲**: 6.10.6
*/
export class Polar {
  constructor(
    public _r: number,
    public _theta: number
  ) {}
  get r() {
    return this._r;
  }
  get theta() {
    return this._theta;
  }
  get x() {
    return this._r * Math.cos(this._theta);
  }
  get y() {
    return this._r * Math.sin(this._theta);
  }
  set x(x: number) {
    if (isNaN(x)) {
      throw new Error("x is NaN");
    }
    this._r = Math.sqrt(x ** 2 + this.y ** 2);
    this._theta = Math.atan2(this.y, x);
  }
  set y(y: number) {
    if (isNaN(y)) {
      throw new Error("y is NaN");
    }
    this._r = Math.sqrt(this.x ** 2 + y ** 2);
    this._theta = Math.atan2(y, this.x);
  }
}

const a = new Polar(1, 0);
console.log(a.x, a.y); // 1 0

const b = new Polar(1, Math.PI / 2);
console.log(b.x, b.y); // 6.123233995736766e-17 1

const c = new Polar(1, Math.PI);
console.log(c.x, c.y); // -1.2246467991473532e-16 -1

const d = new Polar(1, (Math.PI * 3) / 2);
console.log(d.x, d.y); // -1.8369701987210297e-16 -1

const e = new Polar(1, Math.PI * 2);
console.log(e.x, e.y); // 1 0
