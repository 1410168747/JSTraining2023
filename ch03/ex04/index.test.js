
const hundredPointsSymbol = '💯'
const hundredPointsSymbolUTF16 = '\uD83D\uDCAF'
const hundredPointsSymbolUTF32 = '\u{1F4AF}'

describe("isEqual", () => {
  /**
   * Tests if the isEqual function returns true when the two numbers are equal.
   */
  it("the two numbers are equal", () => {
    expect(hundredPointsSymbol.length).toBe(2);
    expect(hundredPointsSymbol).toBe(hundredPointsSymbolUTF16);
    expect(hundredPointsSymbolUTF16).toBe(hundredPointsSymbolUTF32);
  });
});
