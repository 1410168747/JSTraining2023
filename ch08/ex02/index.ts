// ## 問題 8.2 💻🧪

// べき乗 ($x^n$) を計算する関数を、べき乗演算子 (`**`) を使わずに再帰およびループでぞれぞれ実装しなさい。

// 可能なら再帰・ループの回数を少なくする工夫をしなさい。

// **出題範囲**: 8.2.1

export function powerRecursion(x: number, n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("n must be a non-negative integer");
  }
  if (n === 0) {
    return 1;
  }
  if (n % 2 === 0) {
    const base = powerRecursion(x, n / 2); // べき乗の計算回数を減らす工夫
    return base * base;
  }
  return x * powerRecursion(x, n - 1);
}

export function powerLoop(x: number, n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("n must be a non-negative integer");
  }
  if (n === 0) {
    return 1;
  }
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
