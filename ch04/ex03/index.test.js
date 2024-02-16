import { sub } from "./index.ts";

const MAX = 2147483647;
const MIN = -2147483648;

describe("sub", () => {

  it('#01: when inputs and output are within a 32-bit number range', () => {
    const [a, b] = [MIN, MIN];
    expect(sub(a, b)).toEqual(a - (b));
  });

  it('#02: when inputs and output are within a 32-bit number range', () => {
    const [a, b] = [MIN, 0];
    expect(sub(a, b)).toEqual(a - (b));
  });

  it('#03: when inputs and output are within a 32-bit number range', () => {
    const [a, b] = [-1, MAX];
    expect(sub(a, b)).toEqual(a - (b));
  });

  it('#04: when inputs and output are within a 32-bit number range', () => {
    const [a, b] = [0, 0];
    expect(sub(a, b)).toEqual(a - (b));
  });

  it('#05: when inputs and output are within a 32-bit number range', () => {
    const [a, b] = [0, MAX];
    expect(sub(a, b)).toEqual(a - (b));
  });

  it('#06: when inputs and output are within a 32-bit number range', () => {
    const [a, b] = [MAX, 0];
    expect(sub(a, b)).toEqual(a - (b));
  });

  it('#07: when inputs and output are within a 32-bit number range', () => {
    const [a, b] = [MAX, MAX];
    expect(sub(a, b)).toEqual(a - (b));
  });

  it('#08: when input and output exceed the 32-bit range.', () => {
    const [a, b] = [MIN, 1];
    expect(sub(a, b)).not.toEqual(a - (b));
  });

  it('#09: when input and output exceed the 32-bit range.', () => {
    const [a, b] = [0, MIN];
    expect(sub(a, b)).not.toEqual(a - (b));
  });

  it('#10: when input and output exceed the 32-bit range.', () => {
    const [a, b] = [-2, MAX];
    expect(sub(a, b)).not.toEqual(a - (b));
  });

  it('#11: when input and output exceed the 32-bit range.', () => {
    const [a, b] = [MAX, -1];
    expect(sub(a, b)).not.toEqual(a - (b));
  });

});