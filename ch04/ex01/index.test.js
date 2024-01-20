import { add, sub, mul, div } from "./index.ts";

describe("add", () => {

  it('should correctly add two complex numbers', () => {
    expect(
      add(
        { real: 1, imaginary: 2 },
        { real: 3, imaginary: 4 }
      )
    ).toEqual({ real: 4, imaginary: 6 });
  });

  it('should throw error when real part is NaN', () => {
    expect(() =>
      add(
        { real: Number.POSITIVE_INFINITY, imaginary: 2 },
        { real: Number.NEGATIVE_INFINITY, imaginary: 2 } // This will result in NaN for the real part
      )
    ).toThrow('Real or imaginary part is NaN');
  });

  it('should throw error when imaginary part is NaN', () => {
    expect(() =>
      add(
        { real: 2, imaginary: Number.POSITIVE_INFINITY },
        { real: 2, imaginary: Number.NEGATIVE_INFINITY } // This will result in NaN for the imaginary part
      )
    ).toThrow('Real or imaginary part is NaN');
  });

});

describe('sub', () => {
  it('should correctly subtract two complex numbers', () => {
    expect(
      sub(
        { real: 5, imaginary: 4 },
        { real: 2, imaginary: 3 }
      )
    ).toEqual({ real: 3, imaginary: 1 });
  });

  it('should throw error when real part is NaN', () => {
    expect(() =>
      sub(
        { real: Number.POSITIVE_INFINITY, imaginary: 2 },
        { real: Number.POSITIVE_INFINITY, imaginary: 2 } // This will result in NaN for the real part
      )
    ).toThrow('Real or imaginary part is NaN');
  });


  it('should throw error when imaginary part is NaN', () => {
    expect(() =>
      sub(
        { real: 2, imaginary: Number.POSITIVE_INFINITY, },
        { real: 2, imaginary: Number.POSITIVE_INFINITY, } // This will result in NaN for the real part
      )
    ).toThrow('Real or imaginary part is NaN');
  });
});

describe('mul', () => {
  it('should correctly multiply two complex numbers', () => {
    expect(
      mul(
        { real: 3, imaginary: 2 },
        { real: 1, imaginary: -1 }
      )
    ).toEqual({ real: 5, imaginary: -1 });
  });
});

describe('div', () => {
  it('should correctly divide two complex numbers', () => {
    expect(
      div(
        { real: 3, imaginary: 2 },
        { real: 1, imaginary: -1 }
      )
    ).toEqual({ real: 0.5, imaginary: 2.5 });
  });

  it('should throw error when dividing by zero', () => {
    expect(() =>
      div(
        { real: 1, imaginary: 2 },
        { real: 0, imaginary: 0 } // This will result in NaN for both parts
      )
    ).toThrow('Real or imaginary part is NaN');
  });
});
