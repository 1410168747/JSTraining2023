/*
## 問題 7.3 💻📄

reduce を使って関数 (sum, join, reverse, every, some) を実装しなさい。

**出題範囲**: 7.8.1
*/
export const sum = (array: number[] = [0]): number =>
  array.reduce((result, e) => (result += e), 0);

export const join = (array: any[], separator: string = ","): string =>
  array.length === 0
    ? ""
    : array.reduce((result, e) => result + String(separator) + (e ?? ""));

export const reverse = (array: any[]): any[] =>
  new Array(...array).reduce((acc, e, i) => {
    acc[array.length - 1 - i] = e;
    return acc;
  }, array);

export const every = (
  thisArg: any,
  callbackFn: (element: any, index: number, array: any[]) => boolean
): boolean => {
  return thisArg.reduce((acc: any, e: any, i: number, arr: any) => {
    return (acc &&= callbackFn(e, i, arr));
  }, true);
};

export const some = (
  thisArg: any,
  callbackFn: (element: any, index: number, array: any[]) => boolean
): boolean => {
  return thisArg.reduce((acc: any, e: any, i: number, arr: any) => {
    return (acc ||= callbackFn(e, i, arr));
  }, false);
};
