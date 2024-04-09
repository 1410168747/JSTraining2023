import { TypedMap } from "./index.js"; // ts でも可

describe("TypedMap", () => {
  test("init TypedMap", () => {
    const keyType = "string";
    const valueType = "number";
    const entries = [
      ["one", 1],
      ["two", 2],
    ];
    const sut = new TypedMap(keyType, valueType, entries);
    expect(sut.keyType).toBe("string");
    expect(sut.valueType).toBe("number");
  });
  test("enties have illigal elements", () => {
    const keyType = "string";
    const valueType = "number";
    const entries = [
      [1, "one"],
      [2, "two"],
    ];
    expect(() => new TypedMap(keyType, valueType, entries)).toThrow();
  });
  test("set", () => {
    const keyType = "string";
    const valueType = "number";
    const sut = new TypedMap(keyType, valueType);
    sut.set("three", 3);
    expect(sut.get("three")).toBe(3);
    expect(() => sut.set(4, 4)).toThrow();
    expect(() => sut.set("four", "four")).toThrow();
  });
});
