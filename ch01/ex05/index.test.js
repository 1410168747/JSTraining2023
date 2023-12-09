import { abs, sum, factorial } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("returns same value when positive value given", () => {
      expect(sum(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(sum(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(sum(0)).toBe(0);
    });
  });

  describe("factorial", () => {
    it("returns same value when positive value given", () => {
      expect(factorial(0)).toBe(1);
    });

    it("returns same value when positive value given", () => {
      expect(factorial(-0)).toBe(1);
    });

    it("returns negated value when negative value given", () => {
      expect(factorial(1)).toBe(1);
    });

    it("returns zero value when zero given", () => {
      expect(factorial(-1)).toBe(0);
    });

    it("returns zero value when zero given", () => {
      expect(factorial(1.5)).toBe(0);
    });

    it("returns zero value when zero given", () => {
      expect(factorial(Number.NEGATIVE_INFINITY)).toBe(0);
    });

    it("returns zero value when zero given", () => {
      expect(factorial(Number.POSITIVE_INFINITY)).toBe(0);
    });

    it("returns zero value when zero given", () => {
      expect(factorial(Number.NEGATIVE_INFINITY)).toBe(0);
    });
  });
});
