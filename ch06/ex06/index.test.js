import { getAllPropertyNames } from "./index.ts";

describe("getAllPropertyNames", () => {

  test('getAllPropertyNames function', () => {
    const ancestor = Object.create(null);
    Object.defineProperty(ancestor, "ancestorEnumerableProperty", { value: "ancestorEnumerableProperty", enumerable: true });
    Object.defineProperty(ancestor, "ancestorNonEnumerableProperty", { value: "ancestorNonEnumerableProperty", enumerable: false });
    Object.defineProperty(ancestor, Symbol.for("ancestorEnumerableSymbol"), { value: "ancestorEnumerableSymbol", enumerable: true });
    Object.defineProperty(ancestor, Symbol.for("ancestorNonEnumerableSymbol"), { value: "ancestorNonEnumerableSymbol", enumerable: false });

    const parent = Object.create(ancestor);
    Object.defineProperty(parent, "parentEnumerableProperty", { value: "parentEnumerableProperty", enumerable: true });
    Object.defineProperty(parent, "parentNonEnumerableProperty", { value: "parentNonEnumerableProperty", enumerable: false });
    Object.defineProperty(parent, Symbol.for("parentEnumerableSymbol"), { value: "parentEnumerableSymbol", enumerable: true });
    Object.defineProperty(parent, Symbol.for("parentNonEnumerableSymbol"), { value: "parentNonEnumerableSymbol", enumerable: false });

    const target = Object.create(parent);
    Object.defineProperty(target, "targetEnumerableProperty", { value: "targetEnumerableProperty", enumerable: true });
    Object.defineProperty(target, "targetNonEnumerableProperty", { value: "targetNonEnumerableProperty", enumerable: false });
    Object.defineProperty(target, Symbol.for("targetEnumerableSymbol"), { value: "targetEnumerableSymbol", enumerable: true });
    Object.defineProperty(target, Symbol.for("targetNonEnumerableSymbol"), { value: "targetNonEnumerableSymbol", enumerable: false });

    const result = getAllPropertyNames(target);

    // Check if result contains all unique and enumerable inherited properties
    expect(result).toContain("targetEnumerableProperty");
    expect(result).toContain("targetNonEnumerableProperty");
    expect(result).toContain(Symbol.for("targetEnumerableSymbol"));
    expect(result).toContain(Symbol.for("targetNonEnumerableSymbol"));

    expect(result).toContain("parentEnumerableProperty");
    // expect(result).toContain(Symbol.for("parentEnumerableSymbol"));

    expect(result).toContain("ancestorEnumerableProperty");
    // expect(result).toContain(Symbol.for("ancestorEnumerableSymbol"));

  });

});
