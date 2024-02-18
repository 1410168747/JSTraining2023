/*
## 問題 6.5 💻

次の条件を満たすオブジェクトを作成し、for/in ループで順番を確認しなさい。

- プロトタイプを一つ以上もつ
- プロトタイプと同名と同名でない数字、文字列のプロパティをもつ
- プロトタイプはオブジェクトと同名ではない数字、文字列のプロパティももつ
- プロトタイプは列挙可のプロパティをもち、それと同名の列挙不可のプロパティをオブジェクトにもたせること

**出題範囲**: 6.6.1
*/
const proto = Object.create(null);
Object.defineProperty(proto, "proto_enumerable", {
  value: "proto_enumerable",
  writable: false,
  enumerable: true,
  configurable: false,
});
proto[-1] = -1;
proto[0] = 0;
proto[0.1] = 0.1;
proto[Number.POSITIVE_INFINITY] = 0;
proto.a = "a";
proto.b = "b";

const target = Object.create(proto);
target[-1] = "-1(target)";
target[0] = "0(target)";
target[0.1] = "0.1(target)";
target[Number.POSITIVE_INFINITY] = "Number.POSITIVE_INFINITY(target)";

target[-2] = -2;
target[1] = 1;
target[0.5] = 0.5;
target[2] = 2;
target[Number.NEGATIVE_INFINITY] = Number.NEGATIVE_INFINITY;

target.a = "A";
target.b = "B";
target.c = "C";

Object.defineProperty(target, "proto_enumerable", {
  value: "target_enumerable",
  writable: false,
  enumerable: false,
  configurable: false,
});

for (const p in target) {
  console.log(`${p}=${target[p]}`);
}

// -- result --
// 0=0(target)
// 1=1
// -1=-1(target)
// 0.1=0.1(target)
// Infinity=Number.POSITIVE_INFINITY(target)
// -2=-2
// 0.5=0.5
// -Infinity=-Infinity
// a=A
// b=B
// c=C

//数字のプロパティは配列のインデックスとして有効なものが順番に列挙される。
//その後、数字のプロパティでインデックスとして無効なものが順に列挙される。
//上書き可能なものは上書きされる。
//継承先でenumerableをfalseにしたプロパティは列挙されない。
