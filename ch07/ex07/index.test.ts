import { sort } from "./index.ts";

describe("sort", () => {
  test("it should return true", () => {
    const arr = [1, 3, 5, 7, 9, 0, 8, 6, 4, 2];
    expect(sort(arr)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("it should return true", () => {
    const arr = [1, 3, 5, 7, 9, 0, 8, 6, 4, 2];
    expect(sort(arr, (a, b) => b - a)).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });
});
