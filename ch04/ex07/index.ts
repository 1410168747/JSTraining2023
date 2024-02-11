function add(a: number, b: number): number {
  while (b) {
    [a, b] = [a ^ b, (a & b) << 1];
  }
  return a;
}

export function sub(a: number, b: number): number {
  return add(a, add(~b, 1));
}
