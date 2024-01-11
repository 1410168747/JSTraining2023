import {RomanNumerals} from "./index.ts"

test("Example", () => {
  const obj = new RomanNumerals(1);
  expect(+obj).toBe(1);
  expect(`${obj}`).toBe("I");
});