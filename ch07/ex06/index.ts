// **出題範囲**: 7.8.4

// ## 問題 7.6 💻

// 問題7.4のデータを`math`の点数が高い順にソートしなさい。
// ただし、`math`が同点数の場合は`chemistry`の点数が高い順に、さらに同点数の場合は`geography`の点数が高い順にソートされること。

// **出題範囲**: 7.8.6.3

const data = [
  { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
  { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
  { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
  { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
  { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
  { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
  { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
  { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
  { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

data.sort((a, b) => {
  if (a.math === b.math) {
    if (a.chemistry === b.chemistry) {
      return b.geography - a.geography;
    }
    return b.chemistry - a.chemistry;
  }
  return b.math - a.math;
});
console.log(data);
