import { f } from "./index.ts";

describe("f", () => {
  describe("正常系", () => {
    const param = [
      {
        description: "引数が0つの場合",
        body: "0",
        args: [],
        expected: 0,
      },
      {
        description: "引数が1つの場合",
        body: "$1",
        args: [1],
        expected: 1,
      },
      {
        description: "引数が2つの場合",
        body: "$1 + $2",
        args: [1, 2],
        expected: 3,
      },
      {
        description: "引数が3つの場合",
        body: "$1 + $2 + $3",
        args: [1, 2, 3],
        expected: 6,
      },
      {
        description: "引数が4つの場合",
        body: "$1 + $2 + $3 + $4",
        args: [1, 2, 3, 4],
        expected: 10,
      },
      {
        description: "引数が5つの場合",
        body: "$1 + $2 + $3 + $4 + $5",
        args: [1, 2, 3, 4, 5],
        expected: 15,
      },
      {
        description: "引数が6つの場合",
        body: "$1 + $2 + $3 + $4 + $5 + $6",
        args: [1, 2, 3, 4, 5, 6],
        expected: 21,
      },
      {
        description: "引数が7つの場合",
        body: "$1 + $2 + $3 + $4 + $5 + $6 + $7",
        args: [1, 2, 3, 4, 5, 6, 7],
        expected: 28,
      },
      {
        description: "引数が8つの場合",
        body: "$1 + $2 + $3 + $4 + $5 + $6 + $7 + $8",
        args: [1, 2, 3, 4, 5, 6, 7, 8],
        expected: 36,
      },
      {
        description: "引数が9つの場合",
        body: "$1 + $2 + $3 + $4 + $5 + $6 + $7 + $8 + $9",
        args: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        expected: 45,
      },
      {
        description: "引数が10つの場合",
        body: "$1 + $2 + $3 + $4 + $5 + $6 + $7 + $8 + $9 + $10",
        args: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        expected: 55,
      },
      {
        description: "引数が11つの場合",
        body: "$1 + $2 + $3 + $4 + $5 + $6 + $7 + $8 + $9 + $10 + $11",
        args: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        expected: 66,
      },
      {
        description: "引数が溢れる場合",
        body: "$1 + $2 + $3 + $4 + $5 + $6 + $7 + $8 + $9 + $10 + $11",
        args: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, NaN],
        expected: 66,
      },
      // {
      //   description: "複数行の関数の場合",
      //   body: "(const x = $1 + $2; const y = x + $3)",
      //   args: [1, 2, 3],
      //   expected: 6,
      // },
      // {
      //   description: "文字列が空の場合",
      //   n: 2,
      //   c: "",
      //   expected: ["", ""],
      // },
      // {
      //   description: "文字列が1文字の場合",
      //   n: 2,
      //   c: "a",
      //   expected: ["a", "a"],
      // },
      // {
      //   description: "文字列が2文字以上の場合",
      //   n: 2,
      //   c: "ab",
      //   expected: ["ab", "ab"],
      // },
    ];
    param.forEach(({ description, body, args, expected }) => {
      it(description, () => {
        expect(f(body)(...args)).toEqual(expected);
      });
    });
  });
});
