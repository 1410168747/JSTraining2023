const little2Big = (input: Uint32Array): Uint32Array => input.map(swap32);
const big2Little = little2Big;

const swap32 = (number: number): number =>
  ((number & 0x000000ff) << 24) |
  ((number & 0x0000ff00) << 8) |
  ((number & 0x00ff0000) >> 8) |
  ((number & 0xff000000) >> 24);

export { little2Big, big2Little };
