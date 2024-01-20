/*
## 問題 4.4 💻🧪

与えられた数値を 32 ビット整数表現形式で表現した場合に 1 であるビットの数を返す関数 `bitCount` を書きなさい。

例として `bitCount(0b111)` は 3 を返し、`bitCount(0b1111111111111111111111111111111)` は `31` を返しなさい。

**出題範囲**: 4.8
*/
export function bitCount(n: number) {
  if (!Number.isInteger(n)) {
    throw new Error("not an integer");
  }
  if (n < 0 || 4294967295 < n) {
    throw new Error("out of range");
  }
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n >>>= 1;
  }
  return count;
}
