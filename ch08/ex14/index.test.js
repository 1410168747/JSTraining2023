import { any, catching } from "./index.js";

//   ```js
// const safeJsonParse = catching(JSON.parse, (e) => {
//   return { error: e.toString() };
// });

// console.log(safeJsonParse('{"a": 1}')); // => {a: 1}
// console.log(safeJsonParse("{Invalid Json}")); // => {error: "SyntaxError: ..."}
// ```

describe("any", () => {
  const isNonZero = any(
    (n) => n > 0,
    (n) => n < 0
  );

  it("should return true if any function returns true", () => {
    expect(isNonZero(0)).toBe(false);
    expect(isNonZero(42)).toBe(true);
    expect(isNonZero(-0.5)).toBe(true);
  });
});

describe("catching", () => {
  const safeJsonParse = catching(JSON.parse, (e) => {
    return { error: e.toString() };
  });

  it("should return result of JSON.parse if it does not throw", () => {
    expect(safeJsonParse('{"a": 1}')).toEqual({ a: 1 });
  });

  it("should return error message if JSON.parse throws", () => {
    expect(safeJsonParse("{Invalid Json}")).toEqual({ error: "SyntaxError: Unexpected token I in JSON at position 1" });
  });
});