// ## 問題 8.8 💻📄

// 文中の counter をグループ化したクロージャを持つ関数 counterGroup を実装しなさい。
// 具体的には counterGroup は以下のメソッドを持つオブジェクトを返却しなさい。

// - counterGroup#newCounter(): 文中の count と reset 同等の機能を持つ counter オブジェクトを返却する
// - counterGroup#total(): これまで返却された counter が保持しているカウントの合計を返却する

// **出題範囲**: 8.6

type CounterGroup = {
  newCounter: () => Counter;
  total: () => number;
};

type Counter = {
  count: () => number;
  reset: () => void;
};

export function counterGroup(): CounterGroup {
  let total = 0;
  return {
    newCounter: (): Counter => {
      let count = 0;
      return {
        count: () => (total++, count++),
        reset: () => void ((total -= count), (count = 0)),
      };
    },
    total: (): number => total,
  };
}
