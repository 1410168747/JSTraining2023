import { cache, slowFn } from './index';

describe("slowFn", () => {

  test("slowFn is time consuming.", async () => {
    const expected = {};
    const startTime = performance.now();
    const actual = await slowFn(expected);
    const time = performance.now() - startTime;
    expect(actual).toBe(expected);
    expect(time).toBeGreaterThanOrEqual(2000);
  }, 5000);
});

describe("cachedSlowFn", () => {

  test("It doesn't take long to get the same value from cachedSlowFn", async () => {
    const cachedSlowFn = cache(slowFn);
    await cachedSlowFn({})
    const expected = {};
    const startTime = performance.now();
    const actual = await cachedSlowFn(expected)
    const time = performance.now() - startTime;
    expect(actual).toBe(expected);
    expect(time).toBeLessThan(3000);
  }, 12000);

  test("Getting values from cachedSlowFn for the first time takes time.", async () => {
    const cachedSlowFn = cache(slowFn);
    await cachedSlowFn({})
    const expected = { new: "new" };
    const startTime = performance.now();
    const actual = await cachedSlowFn(expected)
    const time = performance.now() - startTime;
    expect(actual).toBe(expected);
    expect(time).toBeGreaterThanOrEqual(2000);
  }, 12000);
});