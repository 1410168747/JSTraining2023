import { instanceOf } from "./index.ts"; // ts でも可

describe("instanceOf", () => {
  const props = [
    {
      description: "{} is an instance of Object",
      target: {},
      f: Object,
      expected: true,
    },
    {
      description: "{} is not an instance of Array",
      target: {},
      f: Array,
      expected: false,
    },
    {
      description: "Object.create(null) is not an instance of Object",
      target: Object.create(null),
      f: Object,
      expected: false,
    },
    {
      description: "[1, 2, 3] is an instance of Object",
      target: [1, 2, 3],
      f: Object,
      expected: true,
    },
    {
      description: "[1, 2, 3] is an instance of Array",
      target: [1, 2, 3],
      f: Array,
      expected: true,
    },
  ];
  props.forEach(({ description, target, f, expected }) => {
    test(description, () => {
      expect(instanceOf(target, f)).toBe(expected);
    });
  });
});
