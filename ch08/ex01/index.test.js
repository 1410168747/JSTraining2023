import { outputArray, squre, now } from './index.ts';

describe('outputArray', () => {
  describe('正常系', () => {
    const param = [
      {
        description: "長さが0の場合",
        n: 0,
        c: "N.A.",
        expected: [],
      },
      {
        description: "長さが1の場合",
        n: 1,
        c: "a",
        expected: ["a",],
      },
      {
        description: "長さが1の場合",
        n: 2,
        c: "a",
        expected: ["a", "a",],
      },
      {
        description: "文字列が空の場合",
        n: 2,
        c: '',
        expected: ['', '',],
      },
      {
        description: "文字列が1文字の場合",
        n: 2,
        c: 'a',
        expected: ['a', 'a',],
      },
      {
        description: "文字列が2文字以上の場合",
        n: 2,
        c: 'ab',
        expected: ['ab', 'ab',],
      },
    ];
    param.forEach(({ description, n, c, expected }) => {
      it(description, () => {
        expect(outputArray(n, c)).toEqual(expected);
      });
    });
  });
  describe('例外系', () => {
    const param = [
      {
        description: "長さが負の場合",
        n: -1,
        c: 'N.A.',
      },
      {
        description: "長さが非整数の場合",
        n: 0.5,
        c: 'N.A.',
      },
      {
        description: "長さが配列の仕様を超える場合",
        n: 2 ** 32,
        c: 'N.A.',
      },
    ];
    param.forEach(({ description, n, c, expected }) => {
      it(description, () => {
        expect(() => { outputArray(n, c) }).toThrow();
      });
    });
  });
});

describe('整数の場合', () => {
  const param = [
    {
      description: '0の場合',
      n: 0,
      expected: 0,
    },
    {
      description: '正の整数の場合',
      n: 1,
      expected: 1,
    },
    {
      description: '負の整数の場合',
      n: -2,
      expected: 4,
    },
    {
      description: 'NaNの場合',
      n: Number.NaN,
      expected: Number.NaN,
    },
    {
      description: 'POSITIVE_INFINITYの場合',
      n: Number.POSITIVE_INFINITY,
      expected: Number.POSITIVE_INFINITY,
    },
    {
      description: 'NEGATIVE_INFINITYの場合',
      n: Number.NEGATIVE_INFINITY,
      expected: Number.POSITIVE_INFINITY,
    },
  ];
  param.forEach(({ description, n, expected }) => {
    it(description, () => {
      expect(squre(n)).toBe(expected);
    });
  });
});

describe('小数の場合', () => {
  const param = [
    {
      description: '0.5の場合',
      n: 0.5,
      expected: 0.25,
    },
    {
      description: '-0.5の場合',
      n: -0.5,
      expected: 0.25,
    },
  ];
  param.forEach(({ description, n, expected }) => {
    it(description, () => {
      expect(squre(n)).toBeCloseTo(expected);
    });
  });
});

describe('now', () => {

  const mockDate = new Date('2024-03-23T10:00:00.000Z');
  global.Date = class MockDate {
    constructor() {
      return mockDate;
    }
  };
  it('正常系', () => {
    const expected = { now: new Date() };
    const actual = now();
    expect(actual).toEqual(expected);
  });
  global.Date = Date;
});