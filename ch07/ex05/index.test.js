import { pop, push, shift, unshift, sort } from "./index.ts";

describe("pop", () => {
  describe.each`
    input | expected
    ${[1, 2, 3]}  | ${[1, 2]}
    ${[1]}  | ${[]}
    ${[]}  | ${[]}`
    ("pop", ({ input, expected }) => {
      test(`pop(${input}) returns ${expected} `, () => {
        const output = pop(input);
        expect(output).toEqual(expected);
        expect(input).toBe(input);
      })
    });
  test("target array is null", () => {
    expect(() => pop(null)).toThrow();
  });
});

describe("push", () => {
  describe.each`
    input1 | input2 | expected
    ${[1]} | ${2} | ${[1, 2]}
    ${[1]} | ${null} | ${[1, null]}
    ${[1]} | ${[]} | ${[1]}
    ${[1]} | ${[2]} | ${[1, 2]}
    ${[1]} | ${[2, 3]} | ${[1, 2, 3]}`
    ("push", ({ input1, input2, expected }) => {
      test(`push(${input1}, ${input2}) returns ${expected} `, () => {
        const output = push(input1, input2);
        expect(output).toEqual(expected);
        expect(input1).toBe(input1);
      })
    });
  test("target array is null", () => {
    expect(() => push(null, null)).toThrow();
  });
});

describe("shift", () => {
  describe.each`
    input | expected
    ${[1, 2, 3]}  | ${[2, 3]}
    ${[1]}  | ${[]}
    ${[]}  | ${[]}`
    ("shift", ({ input, expected }) => {
      test(`shift(${input}) returns ${expected} `, () => {
        const output = shift(input);
        expect(output).toEqual(expected);
        expect(input).toBe(input);
      })
    });
  test("target array is null", () => {
    expect(() => shift(null)).toThrow();
  });
});

describe("unshift", () => {
  describe.each`
    input1 | input2 | expected
    ${[1]} | ${2} | ${[2, 1]}
    ${[1]} | ${[2]} | ${[[2], 1]}
    ${[1]} | ${[]} | ${[[], 1]}
    ${[1]} | ${null} | ${[null, 1]}
    ${[]} | ${2} | ${[2]}`
    ("unshift", ({ input1, input2, expected }) => {
      test(`unshift(${input1}, ${input2}) returns ${expected} `, () => {
        const output = unshift(input1, input2);
        expect(output).toEqual(expected);
        expect(input1).toBe(input1);
      })
    });
  test("rest param", () => {
    const input1 = [1];
    const output = unshift(input1, 2, 3);
    expect(output).toEqual([2, 3, 1]);
    expect(input1).toEqual(input1);
  });
  test("target array is null", () => {
    expect(() => unshift(null, null)).toThrow();
  });
});


describe("sort", () => {
  describe.each`
    input1 | expected 
    ${[1, 3, 5, 4, 2, 0]} | ${[0, 1, 2, 3, 4, 5]}
    ${[]} | ${[]}`
    ("unshift", ({ input1, expected }) => {
      test(`unshift(${input1}, (a,b) => a - b) returns ${expected} `, () => {
        const output = sort(input1, (a, b) => a - b);
        expect(output).toEqual(expected);
        expect(input1).toBe(input1);
      })
    });
  test("rest param", () => {
    const input1 = [1, 3, 5, 4, 2, 0];
    const output = sort(input1);
    expect(output).toEqual([0, 1, 2, 3, 4, 5]);
    expect(input1).toEqual(input1);
  });
  test("rest param", () => {
    const input1 = ["001", "002", "0001", "0002"];
    const output = sort(input1);
    expect(output).toEqual(["0001", "0002", "001", "002"]);
    expect(input1).toEqual(input1);
  });
  test("target array is null", () => {
    expect(() => sort(null)).toThrow();
  });
  test("target array is null", () => {
    expect(() => sort([1, 2], null)).toThrow();
  });
});
