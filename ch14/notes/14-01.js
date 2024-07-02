// {value: 1, writable:true, enumerable:true, configurable:true}が返される。
Object.getOwnPropertyDescriptor({ x: 1 }, "x");

// 読み出し専用アクセサプロパティを持つオブジェクト。
const random = {
    get octet() { return Math.floor(Math.random() * 256); },
};

// { get: /*func*/, set:undefined, enumerable:true, configurable:true}が返される。
Object.getOwnPropertyDescriptor(random, "octet");

// 継承プロパティや存在しないプロパティに対しては、undefinedが返される。
Object.getOwnPropertyDescriptor({}, "x")        // => undefined; プロパティが存在しない。
Object.getOwnPropertyDescriptor({}, "toString") // => undefined; 継承プロパティ。

let o = {};     // プロパティが1つもないオブジェクトを生成。
// 列挙不可のデータプロパティxを追加する。値は1。
Object.defineProperty(o, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
});

// プロパティが存在し、列挙不可になっていることを確認する。
o.x             // => 1
Object.keys(o)  // => []

// ここでプロパティxを読み出し専用に変更する。
Object.defineProperty(o, "x", { writable: false });

// プロパティの値を変更しようとする
o.x = 2;        // エラーは発生せず、失敗する。strictモードでは、TypeErrorをスローする。
o.x             // => 1

// プロパティは再定義可のままなので、次のようにして値を変更できる。
Object.defineProperty(o, "x", { value: 2 });
o.x             // => 2

// xをデータプロパティからアクセサプロパティに変更する。
Object.defineProperty(o, "x", { get: function () { return 0; } });
o.x             // => 0

let p = Object.defineProperties({}, {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 1, writable: true, enumerable: true, configurable: true },
    r: {
        get() { return Math.sqrt(this.x * this.x + this.y * this.y); },
        enumerable: true,
        configurable: true
    }
});
p.r     // => Math.SQRT2