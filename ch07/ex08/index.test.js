import { reverseGraphemeCluster } from "./index.ts";

test("reverseGraphemeCluster", () => {
  console.log(reverseGraphemeCluster("家族 👨‍👨‍👧‍👧"));
  expect(reverseGraphemeCluster("家族 👨‍👨‍👧‍👧")).toEqual("👨‍👨‍👧‍👧 族家");
});
