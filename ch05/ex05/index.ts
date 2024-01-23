/*
## 問題 5.5 💻🧪

{a: 1, b: 2, c: 3} のような値が数値のオブジェクトを引数にとり、値が偶数のプロパティだけを持ち(つまり奇数は取り除かれた)オブジェクトを返す書きなさい。例えば{a: 1, b: 2, c: 3}であれば、{b: 2}を返しなさい。

**出題範囲**: 5.4.4, 5.4.5
*/

type NumericPropertyObject = {
  [key: string]: number;
  [sym: symbol]: number;
};

export function pickEven1(obj: NumericPropertyObject): NumericPropertyObject {
  const result: NumericPropertyObject = {};
  const allKeys = [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];

  for (const key of allKeys) {
    const value = obj[key];
    if (value % 2 === 0) {
      result[key] = value;
    }
  }
  return result;
}

export const pickEven2 = (obj: NumericPropertyObject): NumericPropertyObject =>
  [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)]
    .filter((k) => obj[k] % 2 === 0)
    .reduce((acc, k) => ({ ...acc, [k]: obj[k] }), {}); // using spread operator
