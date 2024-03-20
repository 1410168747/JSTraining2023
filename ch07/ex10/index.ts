type FixedSizeArray = {
  get(index: number): any;
  set(index: number, value: any): void;
  length(): number;
};

function makeFixedSizeArray(size: number): FixedSizeArray {
  const array = new Array(size);
  return {
    get(index: number) {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      return array[index];
    },
    set(index: number, value: any) {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      array[index] = value;
    },
    length() {
      return array.length;
    },
  };
}

export class DynamicSizeArray {
  static INITIAL_SIZE = 4;

  private len: number;
  private array: FixedSizeArray;

  constructor() {
    this.len = 0;
    this.array = makeFixedSizeArray(DynamicSizeArray.INITIAL_SIZE);
  }
  get(index: number) {
    if (this.isInvalidIndex(index) || this.len <= index) {
      throw new Error(`Array index out of range: ${index}`);
    }
    return this.array.get(index);
  }
  set(index: number, value: any) {
    if (this.isInvalidIndex(index)) {
      throw new Error(`Array index out of range: ${index}`);
    }
    if (this.array.length() <= index) {
      const old = this.array;
      this.array = makeFixedSizeArray(newSize(index));
      relocate(old, this.array);
    }
    this.array.set(index, value);
    if (this.len <= index) {
      this.len = index + 1;
    }
  }
  private isInvalidIndex = (index: number) =>
    Number.isNaN(index) ||
    !Number.isInteger(index) ||
    2 ** 32 - 1 < index ||
    index < 0;
  length() {
    return this.len;
  }
  push(value: any) {
    this.set(this.len, value);
  }
}

export const newSize = (index: number) =>
  Math.pow(2, Math.ceil(Math.log2(index + 1)));

export function relocate(
  oldArray: FixedSizeArray,
  newArray: FixedSizeArray
): void {
  for (let i = 0; i < oldArray.length(); i++) {
    const e = oldArray.get(i);
    if (e !== undefined) {
      newArray.set(i, e);
    }
    console.log(`index: ${i}, value: ${e}`);
  }
}
