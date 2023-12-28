export const abs = (n: number): number => Math.abs(n);

export const sum = (first = 0, ...rest: number[]): number =>
  rest.reduce((a, b) => a + b, first);

const FACTORIAL_ARGUMENT_MAX = 18;

const memoizedFactorial = (): ((num: number) => number) => {
  const cache: number[] = [];
  return (num: number): number => {
    if (!Number.isInteger(num)) {
      throw new Error(`Not an integer: ${num}`);
    }
    if (num < 0) {
      throw new Error(`Not an integer greater than or equal to 0: ${num}`);
    }
    if (FACTORIAL_ARGUMENT_MAX < num) {
      throw new Error(`Result exceeds Number.MAX_SAFE_INTEGER: ${num}`);
    }
    if (0 < cache[num]) {
      return cache[num];
    }
    return (cache[num] = num === 0 || num === 1 ? 1 : factorial(num - 1) * num);
  };
};

export const factorial = memoizedFactorial();

const FIBONACCHI_ARGUMENT_MAX = 77;

const memoizedFibonacci = (): ((num: number) => number) => {
  const cache: number[] = [];
  return (num: number): number => {
    if (!Number.isInteger(num)) {
      throw new Error(`Not an integer: ${num}`);
    }
    if (num < 0) {
      throw new Error(`Not an integer greater than or equal to 0: ${num}`);
    }
    if (FIBONACCHI_ARGUMENT_MAX < num) {
      throw new Error(`Result exceeds Number.MAX_SAFE_INTEGER: ${num}`);
    }
    if (0 <= cache[num]) {
      return cache[num];
    }
    if (num === 0) {
      return (cache[num] = 0);
    } else if (num === 1) {
      return (cache[num] = 1);
    } else {
      return (cache[num] = fib(num - 1) + fib(num - 2));
    }
  };
};

export const fib = memoizedFibonacci();
