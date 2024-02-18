/*
/*
## 問題 6.6 💻🧪

任意のオブジェクトを受け取り、そのオブジェクトのすべての独自プロパティ（列挙不可、プロパティ名が `Symbol`のものを含む）および列挙可能な継承プロパティのプロパティ名の配列を返す関数を作成しなさい。

**出題範囲**: 6.6
*/

export function getAllPropertyNames(obj: object): (number | string | symbol)[] {
  const result: (number | string | symbol)[] = [];
  result.push(...Object.getOwnPropertyNames(obj));
  result.push(...Object.getOwnPropertySymbols(obj));
  result.push(...inheritedEnumerablePropertyNames(obj));
  return result;
}

const inheritedEnumerablePropertyNames = (
  obj: object
): (string | number | symbol)[] => {
  const result: (number | string | symbol)[] = [];
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop) === false) {
      result.push(prop);
    }
  }
  return result;
};
