import { powerRecursion, powerLoop } from './index.ts';

describe('powerRecursion', () => {
  describe('整数', () => {
    const param = [
      {
        x: 0,
        n: 0,
        expected: 1,
      },
      {
        x: 0,
        n: 1,
        expected: 0,
      },
      {
        x: 2,
        n: 2,
        expected: 4,
      },
      {
        x: -1,
        n: 2,
        expected: 1,
      },
      {
        x: Number.NaN,
        n: 2,
        expected: Number.NaN,
      },
    ];
    param.forEach(({ x, n, expected }) => {
      it(`${x} ** ${n} === ${expected}`, () => {
        expect(powerRecursion(x, n)).toEqual(expected);
      });
    });
  });
  describe('小数', () => {
    const param = [
      {
        x: 0.5,
        n: 2,
        expected: 0.25,
      },
      {
        x: -0.5,
        n: 2,
        expected: 0.25,
      },
    ];
    param.forEach(({ x, n, expected }) => {
      it(`${x} ** ${n} === ${expected}`, () => {
        expect(powerRecursion(x, n)).toBeCloseTo(expected);
      });
    });
  });
  describe('例外系', () => {
    const param = [
      {
        x: 1,
        n: 0.5,
      },
      {
        x: 1,
        n: -1,
      },
    ];
    param.forEach(({ x, n }) => {
      it(`${x} ** ${n}`, () => {
        expect(() => { powerRecursion(x, n) }).toThrow();
      });
    });
  });
});


describe('powerLoop', () => {
  describe('整数', () => {
    const param = [
      {
        x: 0,
        n: 0,
        expected: 1,
      },
      {
        x: 0,
        n: 1,
        expected: 0,
      },
      {
        x: 2,
        n: 2,
        expected: 4,
      },
      {
        x: -1,
        n: 2,
        expected: 1,
      },
      {
        x: Number.NaN,
        n: 2,
        expected: Number.NaN,
      },
    ];
    param.forEach(({ x, n, expected }) => {
      it(`${x} ** ${n} === ${expected}`, () => {
        expect(powerLoop(x, n)).toEqual(expected);
      });
    });
  });
  describe('小数', () => {
    const param = [
      {
        x: 0.5,
        n: 2,
        expected: 0.25,
      },
      {
        x: -0.5,
        n: 2,
        expected: 0.25,
      },
    ];
    param.forEach(({ x, n, expected }) => {
      it(`${x} ** ${n} === ${expected}`, () => {
        expect(powerLoop(x, n)).toBeCloseTo(expected);
      });
    });
  });
  describe('例外系', () => {
    const param = [
      {
        x: 1,
        n: 0.5,
      },
      {
        x: 1,
        n: -1,
      },
    ];
    param.forEach(({ x, n }) => {
      it(`${x} ** ${n}`, () => {
        expect(() => { powerLoop(x, n) }).toThrow();
      });
    });
  });
});