/*
## 問題 7.4 💻

以下のデータを使い、下記の各値を求めなさい。
ただし、配列イテレータメソッドを利用し、ループ文(for, while)を使わないこと。

``` ts
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
```

1. `math`の全員の合計点
2. クラスAの`chemistry`の平均点
3. 3科目合計点のクラスC内での平均点
4. 3科目合計点が最も高い人の`name`
5. 全体の`geography`の標準偏差

**出題範囲**: 7.8.1
*/
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

type TestResult = {
  name: string;
  class: string;
  math: number;
  chemistry: number;
  geography: number;
};

const sumAllMathScores = (records: TestResult[]): number =>
  records.reduce((acc, e) => acc + e["math"], 0);

const calculateClassAChemistryAverage = (records: TestResult[]): number =>
  records
    .filter((e) => e["class"] === "A")
    .map((e) => e["chemistry"])
    .reduce(
      (acc, e, _, arr) => [acc[0] + e, (acc[0] + e) / arr.length],
      [0, 0]
    )[1];

const calculateClassCTotalScoreAverage = (records: TestResult[]): number =>
  average(
    records
      .filter((e) => e["class"] === "C")
      .map((e) => e["math"] + e["chemistry"] + e["geography"])
  );

const average = (records: number[]): number =>
  records.reduce(
    (acc, e, _, arr) => [acc[0] + e, (acc[0] + e) / arr.length],
    [0, 0]
  )[1];

const findStudentWithHighestTotalScore = (records: TestResult[]): string =>
  records
    .map((e) => ({
      name: e.name,
      sum: e.math + e.chemistry + e.geography,
    }))
    .reduce((acc, e) => (acc.sum < e.sum ? e : acc)).name;

const calculateOverallGeographyStddev = (records: TestResult[]): number => {
  const ave = average(records.map((e) => e["geography"]));
  return records
    .filter((e) => e["geography"])
    .reduce(
      (acc, e, _, arr) => {
        let temp = acc[0] + (e["geography"] - ave) ** 2;
        return [temp, (temp / arr.length) ** 0.5];
      },
      [0, 0]
    )[1];
};

console.log(`\`math\`の全員の合計点(期待値: 530): ${sumAllMathScores(data)}`);
console.log(
  `クラスAの\`chemistry\`の平均点(期待値: 45): ${calculateClassAChemistryAverage(
    data
  )}`
);
console.log(
  `3科目合計点のクラスC内での平均点(期待値: 176.66667): ${calculateClassCTotalScoreAverage(
    data
  )}`
);
console.log(
  `3科目合計点が最も高い人の\`name\`(期待値: Frank): ${findStudentWithHighestTotalScore(
    data
  )}`
);
console.log(
  `全体の\`geography\`の母標準偏差(期待値: 22.33306): ${calculateOverallGeographyStddev(
    data
  )}`
);
