export const abs = (n: number) => Math.abs(n);
export const sum = (...rest: number[]) => rest.reduce((a, b) => a + b);
export function factorial(n: number) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error(`Not an integer greater than or equal to 0: ${n}`);
  }
  let f: number[] = [];
  function fact(n: number): number {
    if (n == 0 || n == 1) return 1;
    if (f[n] > 0) return f[n];
    return (f[n] = factorial(n - 1) * n);
  }
  return fact(n);
}
