Object.getPrototypeOf({})       // => Object.prototype
Object.getPrototypeOf([])       // => Array.prototype
Object.getPrototypeOf(() => { })   // => Function.prototype

{
    let p = { x: 1 };                     // プロトタイプオブジェクトを定義する。
    let o = Object.create(p);           // このプロトタイプを使ってオブジェクトを生成する。
    p.isPrototypeOf(o)                  // => true: oはpを継承する。
    Object.prototype.isPrototypeOf(p)   // => true: pはObject.prototypeを継承する。
    Object.prototype.isPrototypeOf(o)   // => true: oも同様。
}


{
    let o = { x: 1 };
    let p = { y: 2 };
    Object.setPrototypeOf(o, p); // oのプロトタイプをpにする。
    o.y     // => 2: oはプロパティyを継承するようになる。
    let a = [1, 2, 3];
    Object.setPrototypeOf(a, p); // 配列aのプロトタイプをpにする。
    a.join // => undefined: aはjoin()メソッドを持たなくなる。
}

let p = { z: 3 };
let o = {
    x: 1,
    y: 2,
    __proto__: p
};
o.z // => 3: oはpを継承する。