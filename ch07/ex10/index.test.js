import { newSize, DynamicSizeArray } from './index.ts';

describe('newSize', () => {
  const testCases = [
    { index: 0, expected: 1 },
    { index: 1, expected: 2 },
    { index: 2, expected: 4 },
    { index: 3, expected: 4 },
    { index: 4, expected: 8 },
    { index: 5, expected: 8 },
    { index: 6, expected: 8 },
    { index: 7, expected: 8 },
    { index: 8, expected: 16 },
  ];
  it.each(testCases)('should return $expected when index is $index', ({ index, expected }) => {
    expect(newSize(index)).toBe(expected);
  });
});

describe('DynamicSizeArray', () => {
  const sut = new DynamicSizeArray();
  const index = 0;
  describe('初期化直後', () => {
    it('長さが0', () => {
      expect(sut.length()).toBe(0);
    });
    it('0番目の要素が存在しない', () => {
      expect((() => sut.get(index))).toThrow(`Array index out of range: ${index}`);
    });
  });
  describe('無効なインデックス', () => {
    const testCases = [
      { index: -1 },
      { index: 0.5 },
      { index: 2 ** 32 },
      { index: NaN },
    ];
    it.each(testCases)('should throw error when index is $index', ({ index }) => {
      const sut = new DynamicSizeArray();
      expect((() => sut.get(index))).toThrow(`Array index out of range: ${index}`);
    });
  });

  describe('要素をsetした後', () => {
    const sut = new DynamicSizeArray();
    sut.set(0, 1);
    it('setした要素を取得できる', () => {
      expect(sut.get(0)).toBe(1);
    });
    it('lengthが更新される', () => {
      expect(sut.length()).toBe(1);
    });
  });

  describe('要素をpushした後', () => {
    const sut = new DynamicSizeArray();
    sut.push(0);
    it('pushした要素を取得できる', () => {
      expect(sut.get(0)).toBe(0);
    });
    it('lengthが更新される', () => {
      expect(sut.length()).toBe(1);
    });
  });

  describe('要素を書き換えた後', () => {
    const sut = new DynamicSizeArray();
    sut.push(0);
    sut.set(0, 1);
    it('書き換えた要素を取得できる', () => {
      expect(sut.get(0)).toBe(1);
    });
    it('lengthはそのまま', () => {
      expect(sut.length()).toBe(1);
    });
  });

  describe('長さを変えない範囲で要素を追加した後', () => {
    const sut = new DynamicSizeArray();
    sut.set(0, 1);
    sut.set(3, 4);
    it('要素を取得できる', () => {
      expect(sut.get(0)).toBe(1);
      expect(sut.get(3)).toBe(4);
    });
    it('未定義の要素はundefinedになる', () => {
      expect(sut.get(1)).toBe(undefined);
      expect(sut.get(2)).toBe(undefined);
    });
    it('lengthは最後の要素のindex + 1になる', () => {
      expect(sut.length()).toBe(4);
    });
  });

  describe('長さを変えない範囲で要素を追加した後、未定義の要素を書き換える', () => {
    const sut = new DynamicSizeArray();
    sut.set(0, 1);
    sut.set(3, 4);
    sut.set(1, 2);
    it('要素を取得できる', () => {
      expect(sut.get(0)).toBe(1);
      expect(sut.get(1)).toBe(2);
      expect(sut.get(3)).toBe(4);
    });
    it('未定義の要素はundefinedになる', () => {
      expect(sut.get(2)).toBe(undefined);
    });
    it('lengthは最後の要素のindex + 1になる', () => {
      expect(sut.length()).toBe(4);
    });
  });

  describe('内部配列の長さを超える場合', () => {
    const sut = new DynamicSizeArray();
    sut.set(0, 1);
    sut.set(3, 4);
    sut.set(1, 2);
    sut.push(5);
    it('要素を取得できる', () => {
      expect(sut.get(0)).toBe(1);
      expect(sut.get(1)).toBe(2);
      expect(sut.get(3)).toBe(4);
      expect(sut.get(4)).toBe(5);
    });
    it('未定義の要素はundefinedになる', () => {
      expect(sut.get(2)).toBe(undefined);
    });
    it('lengthは最後の要素のindex + 1になる', () => {
      expect(sut.length()).toBe(5);
    });
  });

  describe('内部配列の長さを超える場合', () => {
    const sut = new DynamicSizeArray();
    sut.set(0, 1);
    sut.set(3, 4);
    sut.set(1, 2);
    sut.set(4, 5);
    it('要素を取得できる', () => {
      expect(sut.get(0)).toBe(1);
      expect(sut.get(1)).toBe(2);
      expect(sut.get(3)).toBe(4);
      expect(sut.get(4)).toBe(5);
    });
    it('未定義の要素はundefinedになる', () => {
      expect(sut.get(2)).toBe(undefined);
    });
    it('lengthは最後の要素のindex + 1になる', () => {
      expect(sut.length()).toBe(5);
    });
  });

  describe('内部配列の長さを超える場合', () => {
    const sut = new DynamicSizeArray();
    sut.set(0, 1);
    sut.set(3, 4);
    sut.set(1, 2);
    sut.set(9, 10);
    it('要素を取得できる', () => {
      expect(sut.get(0)).toBe(1);
      expect(sut.get(1)).toBe(2);
      expect(sut.get(3)).toBe(4);
      expect(sut.get(9)).toBe(10);
    });
    it('未定義の要素はundefinedになる', () => {
      expect(sut.get(2)).toBe(undefined);
      expect(sut.get(4)).toBe(undefined);
      expect(sut.get(5)).toBe(undefined);
      expect(sut.get(6)).toBe(undefined);
      expect(sut.get(7)).toBe(undefined);
      expect(sut.get(8)).toBe(undefined);
    });
    it('lengthは最後の要素のindex + 1になる', () => {
      expect(sut.length()).toBe(10);
    });
  });
});