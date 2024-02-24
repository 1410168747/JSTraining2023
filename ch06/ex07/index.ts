/*
## 問題 6.7 💻 🧪

`Object.assign()`と等価な関数 `assign()` を作成しなさい。
双方の関数が等価であることを確認するテストも作成しなさい。
少なくとも 6.7 節に記載された `Object.assign()` の仕様をカバーするテストケースを作成すること。

**出題範囲**: 6.7*/

export const assign = <T extends object, U extends object[]>(
  target: T,
  ...sources: U[]
): T & U =>
  sources.reduce((acc, source) => (acc = { ...acc, ...source }), {
    ...target,
  }) as T & U;
