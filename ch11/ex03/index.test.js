import { little2Big, big2Little } from './index';

describe("byteSapping", () => {

  test("Convert twice to return to original sequence", () => {
    const target = Uint32Array.of(0x01234567);
    expect(little2Big(big2Little(target))).toStrictEqual(target);
    expect(little2Big(little2Big(target))).toStrictEqual(target);
    expect(big2Little(big2Little(target))).toStrictEqual(target);
  });

  test("Convert little endian to big endian", () => {
    const target = Uint32Array.of(0x01234567);
    expect(little2Big(target)).toStrictEqual(Uint32Array.of(0x67452301));
  });

  test("Convert big endian to little endian", () => {
    const target = Uint32Array.of(0x01234567);
    expect(big2Little(target)).toStrictEqual(Uint32Array.of(0x67452301));
  });
});