import TypeMap from "./index.js";

class Foo {
  constructor() {
    this.name = "Foo";
  }
}

describe("TypeMap", () => {

  it.each`
  key | value
  ${String} | ${"string"}
  ${Number} | ${123}
  ${BigInt} | ${123n}
  ${Boolean} | ${false}
  ${Symbol} | ${Symbol("symbol")}
  ${Foo} | ${new Foo()}
  ${Date} | ${new Date()}
  ${Object} | ${new Foo()}
  ${Object} | ${null}
  ${Object} | ${undefined}
  `("set($key.name, $value) and get($key.name) then $value", ({ key, value }) => {
    const sut = new TypeMap();
    sut.set(key, value);
    expect(sut.get(key)).toBe(value);
  });

  it.each`
  key | value
  ${Date} | ${"not a date"}
  ${Array} | ${new Foo()}
  ${Object} | ${"string"}
  ${null} | ${"n.a."}
  ${undefined} | ${"n.a."}
  ${"not a function"} | ${"n.a."}
  `("set($key?.name, $value) throws an Error", ({ key, value }) => {
    const sut = new TypeMap();
    expect(() => { sut.set(key, value) }).toThrow("Type Error");
  });

  it.each`
  key | previousValue | latestValue
  ${String} | ${"previousValue"} | ${"latestValue"}
  ${Number} | ${123} | ${456} 
  ${BigInt} | ${123n} | ${456n}
  ${Boolean} | ${false} | ${true}
  ${Symbol} | ${Symbol("symbol1")} | ${Symbol("symbol2")}
  ${Foo} | ${new Foo()} | ${new Foo()} 
  ${Date} | ${new Date()} | ${new Date()}
  ${Object} | ${new Foo()} | ${new Date()}
  `("Multiple sets with the same key to get the latest value", ({ key, previousValue, latestValue }) => {
    const sut = new TypeMap();
    sut.set(key, previousValue);
    sut.set(key, latestValue);
    expect(sut.get(key)).toBe(latestValue);
  });

});