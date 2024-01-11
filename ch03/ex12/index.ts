// 任意の型のプロパティを持つオブジェクト型を定義
export type GenericObject = { [key: string]: unknown };

// `obj1`と`obj2`の内容が同一であるかどうかを確認する関数
export function equals(obj1: GenericObject, obj2: GenericObject): boolean {
  let keys1 = Object.keys(obj1).sort();
  let keys2 = Object.keys(obj2).sort();

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i] || obj1[keys1[i]] !== obj2[keys2[i]]) {
      return false;
    }
  }

  return true;
}