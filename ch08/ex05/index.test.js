import { sequenceToObject } from './index.ts';

describe('sequenceToObject', () => {
  describe('正常系', () => {
    it("可変長引数として渡す", () => {
      expect(sequenceToObject("a", 1, "b", 2)).toEqual({
        a: 1,
        b: 2
      });
    });
    it("引数なしの場合", () => {
      expect(sequenceToObject()).toEqual({});
    });
    const param = [{
      description: "オブジェクトが生成される場合",
      param: ["one", 1, "two", 2, "three", 3],
      expected: {
        one: 1,
        two: 2,
        three: 3
      }
    },
    ];
    param.forEach(({ description, param, expected }) => {
      it(description, () => {
        expect(sequenceToObject(...param)).toEqual(expected);
      });
    });
  });

  describe('異常系', () => {
    const param = [{
      description: "配列の長さが奇数の場合",
      param: ["one", 1, "two"],
      error: "Invalid arguments"
    }, {
      description: "キー名が文字列以外の場合",
      param: ["one", 1, 2, 2],
      error: "Invalid arguments: odd index must be string"
    },
    ];
    param.forEach(({ description, param, error }) => {
      it(description, () => {
        expect(() => { sequenceToObject(...param) }).toThrow(error);
      });
    });
  });
});