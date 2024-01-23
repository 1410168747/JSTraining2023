import { pickEven1, pickEven2 } from "./index.ts";
describe("pickEven1", () => {

  it("case1", () => {
    const arg = {
      a: 1,
      b: 2,
    };
    expect(pickEven1(arg)).toEqual({ b: 2 });
  });

  it("case2", () => {
    const arg = {
      a: 1,
      b: 3,
    };
    expect(pickEven1(arg)).toEqual({});
  });

  it("case3", () => {
    const arg = {
      a: 2,
      b: 4,
    };
    expect(pickEven1(arg)).toEqual({
      a: 2,
      b: 4,
    });
  });

  it("case4", () => {
    const sym1 = Symbol();
    const sym2 = Symbol();
    const arg = {
      a: 1,
      b: 2,
      [sym1]: 3,
      [sym2]: 4,
    };
    expect(pickEven1(arg)).toEqual({
      b: 2,
      [sym2]: 4,
    });
  });
});

describe("pickEven2", () => {

  it("case1", () => {
    const arg = {
      a: 1,
      b: 2,
    };
    expect(pickEven2(arg)).toEqual({ b: 2 });
  });

  it("case2", () => {
    const arg = {
      a: 1,
      b: 3,
    };
    expect(pickEven2(arg)).toEqual({});
  });

  it("case3", () => {
    const arg = {
      a: 2,
      b: 4,
    };
    expect(pickEven2(arg)).toEqual({
      a: 2,
      b: 4,
    });
  });

  it("case4", () => {
    const sym1 = Symbol();
    const sym2 = Symbol();
    const arg = {
      a: 1,
      b: 2,
      [sym1]: 3,
      [sym2]: 4,
    };
    expect(pickEven2(arg)).toEqual({
      b: 2,
      [sym2]: 4,
    });
  });
});