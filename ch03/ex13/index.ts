const ROMAN_NUMERALS_UNITS = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] as const;
type RomanNumeralsUnit = typeof ROMAN_NUMERALS_UNITS[number];

const ARABIC_VALUES_OF_ROMAN_UNITS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1] as const;
type ArabicValuesOfRomanUnit = typeof ARABIC_VALUES_OF_ROMAN_UNITS[number];

export class RomanNumerals {

  private static UPPER_LIMIT = 3999;
  private static LOWER_LIMIT = 0;

  _number:number;
  _roman:string;

  constructor(number: number) {
    if (number < RomanNumerals.LOWER_LIMIT || RomanNumerals.UPPER_LIMIT < number ) {
      throw new Error("Error");
    }
    this._number = number;
    let ans: string = "";

    for (let i = 0; i < 13; i++) {
      let ii = Math.floor(number / ARABIC_VALUES_OF_ROMAN_UNITS[i]);
      for (let j = 0; j < ii; j++) {
        ans += ARABIC_VALUES_OF_ROMAN_UNITS[i];
      }
      number = number % ARABIC_VALUES_OF_ROMAN_UNITS[i];
    }
    this._roman = ans;
  }

  get number() {
    return this._number;
  }

  get roman() {
    return this._roman;
  }

  valueOf() {
    return this.number;
  }

  toString() {
    return this.roman;
  }
}