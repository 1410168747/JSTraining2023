/**
 * This file contains unit tests for the math functions in index.js.
 */

// TypeScript の場合は以下
import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  /**
   * Test suite for the `abs` function.
   */
  describe("abs", () => {

    /**
     * Test case: returns same value when positive value given.
     */
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    /**
     * Test case: returns negated value when negative value given.
     */
    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    /**
     * Test case: returns zero value when zero given.
     */
    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  /**
   * Test suite for the `sum` function.
   */
  describe("sum", () => {
    /**
     * Test case: should return 0 when no arguments are provided.
     */
    it('should return 0 when no arguments are provided', () => {
      expect(sum()).toBe(0);
    });

    /**
     * Test case: returns the sum of two numbers.
     */
    it("returns the sum of two numbers", () => {
      expect(sum(0, 1)).toBe(1);
    });

    /**
     * Test case: returns the sum of multiple numbers.
     */
    it("returns the sum of multiple numbers", () => {
      expect(sum(0, 1, 2)).toBe(3);
    });

    /**
     * Test case: returns the sum of numbers including floating point numbers.
     */
    it("returns the sum of numbers including floating point numbers", () => {
      expect(sum(0, 0.1, 2)).toBe(2.1);
    });

    /**
     * Test case: returns NaN when one of the numbers is NaN.
     */
    it("returns NaN when one of the numbers is NaN", () => {
      expect(sum(1, Number.NaN)).toBe(Number.NaN);
    });

    /**
     * Test case: returns NaN when one of the numbers is positive infinity and the other is negative infinity.
     */
    it("returns NaN when one of the numbers is positive infinity and the other is negative infinity", () => {
      expect(sum(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)).toBe(Number.NaN);
    });

    /**
     * Test case: returns 0 when positive zero and negative zero are provided.
     */
    it("returns 0 when positive zero and negative zero are provided", () => {
      expect(sum(+0, -0)).toBe(0);
    });

    /**
     * Test case: returns 0 when multiple negative zeros are provided.
     */
    it.skip("returns 0 when multiple negative zeros are provided", () => {
      expect(sum(-0, -0, -0)).toBe(0);
    });
  });

  /**
   * Test suite for the `factorial` function.
   */
  describe("factorial", () => {
    /**
     * Test case: throws an error when a non-integer value is provided.
     */
    it('throws an error when a non-integer value is provided', () => {
      const arg = 0.1
      expect(() => factorial(arg)).toThrow(`Not an integer: ${arg}`);
    });

    /**
     * Test case: throws an error when a negative integer is provided.
     */
    it('throws an error when a negative integer is provided', () => {
      const arg = -1
      expect(() => factorial(arg)).toThrow(`Not an integer greater than or equal to 0: ${arg}`);
    });

    /**
     * Test case: returns the factorial of a positive integer.
     */
    it('returns the factorial of a positive integer', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(18)).toBe(6402373705728000);
      expect(() => factorial(19)).toThrow(`Result exceeds Number.MAX_SAFE_INTEGER: ${19}`);
    });
  });
});
