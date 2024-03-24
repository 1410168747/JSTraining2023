// ## 問題 8.5 💻🧪

// 可変長引数を受け取り、以下の仕様でオブジェクトを返却する関数 `sequenceToObject(...values)`を作成しなさい。

// 1. 奇数番に string の値を受け取り偶数番に任意の値を受け取り、各偶数奇数のペアで `{奇数番の値: 偶数番の値}`の形式になるオブジェクトを返却する。例えば`sequenceToObject("a", 1, "b", 2)`は`{a: 1, b: 2}`を返却する
// 2. いずれかの奇数番の値が string でない場合、または値の個数の合計が偶数ではない場合は例外を発生させる

// また作成した sequenceToObject に対してスプレッド演算子で配列を与えられることを確認しなさい。

// **出題範囲**: 8.3.2, 8.3.4

export function sequenceToObject(...values: Array<string | any>) {// 可変長引数が引数なしで呼ばれる場合の挙動を確認する
  if (values.length % 2 !== 0) {
    throw new Error("Invalid arguments");
  }
  return values
    .map((e, i) => {
      if (i % 2 === 0 && typeof e !== "string") {
        throw new Error("Invalid arguments: odd index must be string");
      }
      return e;
    })
    .reduce(
      (acc, cur, i) => (i % 2 === 0 ? ((acc[cur] = values[i + 1]), acc) : acc),
      {}
    );
}
