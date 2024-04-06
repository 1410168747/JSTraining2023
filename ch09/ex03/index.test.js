import { C1, C2 } from "./index.ts"; // ts でも可

describe("", () => {
  const param = [{
    description: "C1",
    f: C1,
    expected: 42,
  },
  {
    description: "C2",
    f: C2,
    expected: 42,
  },
  ];
  param.forEach(({ description, f, expected }) => {
    it(description, () => {
      const sut = new f();
      expect(sut.getX()).toBe(expected);
      expect(sut?.["x"]).toBeUndefined();
    });
  });
});
