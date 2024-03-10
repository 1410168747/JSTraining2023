// ## 問題 7.7 💻🧪🖋️

// 本章で登場した sort 関数について考えてみよう。配列をソートする方法は色々なものが考えられる。例えば以下は「挿入ソート」と呼ばれるソートである。

// ```js
// function sort(
//   array,
//   compare = (lhs, rhs) => (lhs < rhs ? -1 : lhs > rhs ? +1 : 0)
// ) {
//   // array[0 ... i-1] が常にソート済みになるように処理を進める
//   // (0 <= j < i-1 に対して compare(array[j], array[j + 1]) <= 0 が成り立つ)
//   for (let i = 1; i < array.length; i++) {
//     const v = array[i];

//     // array[i] を array[0 ... i] の適切な場所に挿入する
//     let j = i;
//     while (j > 0 && compare(array[j - 1], v) > 0) {
//       array[j] = array[j - 1];
//       j--;
//     }
//     array[j] = v;
//   }
//   return array;
// }
// ```

// 問題を解決するための計算方法や処理の手順のことを [アルゴリズム](https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%BC%E3%83%88) と呼ぶ。
// ソートのアルゴリズムには様々なものが存在している ([参考](https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%BC%E3%83%88))。

// 問題に対して複数のアルゴリズムが存在する場合、アルゴリズムをどうやって比較すべきだろうか。
// 具体的な計算時間は計算機によって結果が異なるため比較が難しい。
// 一般的にはアルゴリズムを [O-記法](https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%B3%E3%83%80%E3%82%A6%E3%81%AE%E8%A8%98%E5%8F%B7#%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AA%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC) を用いた [時間計算量](https://ja.wikipedia.org/wiki/%E8%A8%88%E7%AE%97%E8%A4%87%E9%9B%91%E6%80%A7%E7%90%86%E8%AB%96#%E8%A8%88%E7%AE%97%E5%95%8F%E9%A1%8C%E3%81%A8%E8%A8%88%E7%AE%97%E9%87%8F%E3%83%BB%E8%A4%87%E9%9B%91%E6%80%A7) で評価する。
// 例えば上記の「挿入ソート」のアルゴリズムは配列の長さの二乗に計算時間が比例するため、配列の長さを $`n`$ とした時の時間計算量は $`O(n^2)`$ と表現される。

// 挿入ソート以外のソート関数を実装しなさい。また実装したアルゴリズムの入力の配列長 `n` に対する時間計算量を O-記法で説明しなさい。

// **出題範囲**: 7.8.6.3

export function sort(
  array: any[],
  compare = (lhs: any, rhs: any): number =>
    lhs < rhs ? -1 : lhs > rhs ? +1 : 0
) {
  // バブルソート
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = array.length - 1; i < j; j--) {
      if (0 < compare(array[j - 1], array[j])) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(sort([1, 3, 5, 7, 9, 8, 6, 4, 2, 0]));
