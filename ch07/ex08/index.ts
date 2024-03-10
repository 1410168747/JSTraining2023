// ## 問題 7.8 💻📄

// 文字列の書記素を反転させる関数を実装しなさい。例えば "家族 👨‍👨‍👧‍👧" が与えられれば "👨‍👨‍👧‍👧 族家" を返しなさい。
// ヒント: [Intl.Segmenter](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)
// を使うか ゼロ幅接合子 について調べて実装しなさい。( [Intl.Segmenter](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)を使う場合 tsconfig.js で ES2022 以上であることを確認して使用してください。)
// **出題範囲**: 7.8.7

export function reverseGraphemeCluster(str: string): string {
  const segmenterFr = new Intl.Segmenter();
  const ite = segmenterFr.segment(str)[Symbol.iterator]();
  return (
    [...ite]
      .map((e) => e["segment"])
      .reverse()
      .join("")
  );
}

