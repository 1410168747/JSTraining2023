let t = { x: 1, y: 2 };
let p = new Proxy(t, {});
p.x         // => 1
delete p.y  // => true: Proxyのyプロパティを削除。
t.y         // => undefined: ターゲットのプロパティも削除。
p.z = 3;    // Proxyに新しいプロパティを定義。
t.z         // => 3: ターゲットにもプロパティを定義。