import { bitCount } from "./index.ts";

describe("bitCount", () => {

  it('case1', () => {
    const actual = bitCount(0);
    expect(actual).toEqual(0);
  });
  it('case2', () => {
    const actual = bitCount(0b11111111111111111111111111111111);
    expect(actual).toEqual(32);
  });
  it('case3', () => {
    expect(() => bitCount(0b100000000000000000000000000000000)).toThrow('out of range');
  });
  it('case4', () => {
    expect(() => bitCount(-1)).toThrow('out of range');
  });
  it('case5', () => {
    expect(() => bitCount(0.1)).toThrow('not an integer');
  });
  it('case6', () => {
    const actual = bitCount(2);
    expect(actual).toEqual(1);
  });
});