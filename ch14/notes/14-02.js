// 凍結されたプロトタイプと列挙不可のプロパティを持つ封印されたオブジェクトを作成する。
let o = Object.seal(Object.create(Object.freeze({ x: 1 }),
    { y: { value: 2, writable: true } }));