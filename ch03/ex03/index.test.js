/**
 * Tests the isEqual function.
 * @module isEqual
 */

import { isEqual } from "./index.ts";

describe("isEqual", () => {
  /**
   * Tests if the isEqual function returns true when the two numbers are equal.
   */
  it("the two numbers are equal", () => {
    const actual = isEqual(1,1);
    expect(actual).toBe(true);
  });

  /**
   * Tests if the isEqual function returns false when the two numbers are not equal.
   */
  it("the two numbers are not equal.", () => {
    const actual = isEqual(0,-1);
    expect(actual).toBe(false);
  });

  /**
   * Tests if the isEqual function returns false when the two numbers are almost equal.
   */
  it("two numbers are almost equal", () => {
    const actual = isEqual(1 + Math.pow(10, -10),1);
    expect(actual).toBe(false);
  });

  /**
   * Tests if the isEqual function returns true when the two numbers are almost equal.
   */
  it("the two numbers are almost equal", () => {
    const actual = isEqual(1 + Math.pow(10, -11),1);
    expect(actual).toBe(true);
  });

});
