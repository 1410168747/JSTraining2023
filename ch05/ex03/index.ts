/*
## 問題 5.3 💻🧪🖋️

1. "月","火","水","木","金","土","日"のいずれかの文字列リテラルを受け取って、その曜日が完全週休二日制で休日であれば true、そうでなければ false を返すメソッドを書きなさい。if-else を使うバージョンと switch を使うバージョンの両方を作りなさい。
2. if-else を使う場合と switch を使う場合で、それぞれ可読性に対してどのようなメリットがあるか書きなさい。

**出題範囲**: 5.3*/

type Day = "月" | "火" | "水" | "木" | "金" | "土" | "日";

export const isWeekEnd1 = (day: Day) => day === "土" || day === "日";

export function isWeekEnd2(day: Day): boolean {
  if (day === "土" || day === "日") {
    return true;
  }
  return false;
}

export function isWeekEnd3(day: Day): boolean {
  switch (day) {
    case "土":
    case "日":
      return true;
    default:
      return false;
  }
}
