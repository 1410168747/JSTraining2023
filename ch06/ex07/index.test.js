import { assign } from "./index.ts";

const cases = [
  {
    description: "オブジェクトへの単純なプロパティ追加",
    target: { a: "a" },
    source: { a: 1 },
    sources: [{ a: 1 }]
  },
  {
    description: "null の場合",
    target: { a: "a" },
    sources: [null],
  },
  {
    description: "空オブジェクトの場合",
    target: { a: "a" },
    sources: [{}],
  },
  {
    description: "undefined の場合",
    target: { a: "a" },
    sources: [undefined],
  },
  {
    description: "複数のソースオブジェクトの場合",
    target: { a: "a" },
    source1: { a: 1, b: 2 },
    source2: { a: 2, c: 4 },
    sources: [this.source1, this.source2],
  },
  {
    description: "多数のソースオブジェクトの場合",
    target: { a: "a" },
    source1: { a: 1, b: 2 },
    source2: { a: 2, c: 4 },
    source2: { a: 8, d: 16 },
    sources: [this.source1, this.source2, this.source3],
  },
  {
    description: "シンボルプロパティを含む場合",
    target: { [Symbol.for("prop")]: "a" },
    source: { [Symbol.for("prop")]: 1 },
    sources: [this.source],
  },
  {
    description: "オブジェクトがネストしている場合",
    target: { a: "a" },
    source1: { a: 1, b: 2 },
    source2: { a: 2, c: { d: 4, f: 8 } },
    sources: [this.source1, this.source2],
  },
];

describe("assign", () => {
  cases.forEach((c) => {
    it(c.description, () => {
      expect(assign(c.target, ...c.sources)).toEqual(assign(c.target, ...c.sources));
    });
  });
});