import { fibonacci1, fibonacci2, fibonacci3 } from "./index.ts";
describe("fibonacci", () => {

  it("while", () => {
    expect(fibonacci1()).toStrictEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  it("do-while", () => {
    expect(fibonacci2()).toStrictEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  it("for", () => {
    expect(fibonacci3()).toStrictEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });


});