// ## 問題 8.1 💻🧪

// 以下のアロー関数を簡潔に記載しなさい。なお、引数や戻り値の括弧の要否などをコードコメントで説明しなさい。

// 1. 自然数`n`と英数文字`c`を引数にとり、文字`c`を`n`回コンソール出力してから文字`c`を`n`個含む配列を返す
// 2. 数値`x`を引数にとり、`x`の二乗の数値を返す
// 3. 引数なしで、現在時刻のプロパティ`now`を含むオブジェクトを返す

// **出題範囲**: 8.1.3

export const outputArray = (n: number, c: string): Array<string> => {
  if (n < 0 || 2 ** 32 <= n || !Number.isInteger(n)) {
    throw new Error("n must be a positive integer");
  }
  console.log(c.repeat(n));
  return Array(n).fill(c); // 複数行に渡るためreturnで返す
};

export const squre = (x: number): number => x ** 2; // 1行の場合はreturnを省略できる

export const now = (): { now: Date } => ({ now: new Date() }); // オブジェクトを返す場合は括弧が必要
