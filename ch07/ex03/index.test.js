/* eslint no-sparse-arrays: 0 */

import { sum, join, reverse, every, some } from "./index.ts";

describe("join", () => {
  test("sum", () => {
    expect(sum()).toStrictEqual(0);
  });
  test("sum", () => {
    expect(sum([])).toStrictEqual(0);
  });
  test("sum", () => {
    expect(sum([-1])).toStrictEqual(-1);
  });
  test("sum", () => {
    expect(sum([1, 2, 3, 4, 5])).toStrictEqual(15);
  });
});

describe("join", () => {
  test("[]", () => {
    expect(join([])).toStrictEqual([].join());
  });
  test("[1, null, 3]", () => {
    expect(join([1, null, 3])).toStrictEqual([1, null, 3].join());
  });
  test("[1, 2, 3], null", () => {
    expect(join([1, 2, 3], null)).toStrictEqual([1, 2, 3].join(null));
  });
  test('["Hello", 2, 3], ""', () => {
    expect(join(["Hello", 2, 3], "")).toStrictEqual(["Hello", 2, 3].join(""));
  });
  test('["", "", ""], "-"', () => {
    expect(join(["", "", ""], "-")).toStrictEqual(["", "", ""].join("-"));
  });
  test("", () => {
    expect(() => {
      join();
    }).toThrowError();
  });
});

describe("reverse", () => {
  test("[]", () => {
    expect(reverse([])).toStrictEqual([].reverse());
  });
  test('["a"]', () => {
    expect(reverse(["a"])).toStrictEqual(["a"].reverse());
  });
  test('[1, 2, 3, 4, 5]', () => {
    expect(reverse([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5].reverse());
  });
  test('["Hello", "World"]', () => {
    expect(reverse(["Hello", "World"])).toStrictEqual(["Hello", "World"].reverse());
  });
  test("reverse", () => {
    expect(() => {
      reverse();
    }).toThrowError();
  });
});


describe("every", () => {
  const isBelowThreshold = (currentValue) => currentValue < 40;
  test("[1, 2, 3, 4, 5]", () => {
    expect(every([1, 2, 3, 4, 5], isBelowThreshold)).toStrictEqual([1, 2, 3, 4, 5].every(isBelowThreshold));
  });
  test("[1, 2, 3, 45, 5]", () => {
    expect(every([1, 2, 3, 45, 5], isBelowThreshold)).toStrictEqual([1, 2, 3, 45, 5].every(isBelowThreshold));
  });
  test("[]", () => {
    expect(every([], isBelowThreshold)).toStrictEqual([].every(isBelowThreshold));
  });
  test("[1, , 1]", () => {
    expect(every([1, , 1], (x) => x === 1)).toStrictEqual([1, , 1].every((x) => x === 1));
  });
  test("[1, , 3]", () => {
    expect(every([1, , 3], (x) => x !== undefined)).toStrictEqual([1, , 3].every((x) => x !== undefined));
  });
  const original = [1, 2, 3];
  const cb = (elem, index, arr) => {
    if (arr.length > index + 1) {
      arr[index + 1]--;
    }
    return elem < 3;
  };
  test("every", () => {
    expect(every(original, cb)).toStrictEqual(original.every(cb));
  });
});

describe("some", () => {
  const isBelowThreshold = (currentValue) => currentValue < 40;
  test("[41, 42, 3, 44, 45]", () => {
    expect(some([41, 42, 3, 44, 45], isBelowThreshold)).toStrictEqual([41, 42, 3, 44, 45].some(isBelowThreshold));
  });
  test("[]", () => {
    expect(some([], isBelowThreshold)).toStrictEqual([].some(isBelowThreshold));
  });
  test("[41, null, 42]", () => {
    expect(some([41, null, 42], isBelowThreshold)).toStrictEqual([41, null, 42].some(isBelowThreshold));
  });
  test("[41, undefined, 42]", () => {
    expect(some([41, undefined, 42], isBelowThreshold)).toStrictEqual([41, undefined, 42].some(isBelowThreshold));
  });
});