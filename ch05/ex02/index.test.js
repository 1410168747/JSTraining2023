import { ExcapeUtil } from "./index.ts";
describe("escape1", () => {

  it("case1", () => {
    const input = "\0\b\t\n\v\f\r\"\'\\\a"
    expect(ExcapeUtil.escape1(input)).toBe(String.raw`\0\b\t\n\v\f\r\"\'\\a`);
  });

  it("case2", () => {
    const input = "\0\b\t\n\v\f\r\"\'\\\a"
    expect(ExcapeUtil.escape2(input)).toBe(String.raw`\0\b\t\n\v\f\r\"\'\\a`);
  });
});
