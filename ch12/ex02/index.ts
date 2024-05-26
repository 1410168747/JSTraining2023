function fibonacciSequence(): IterableIterator<number> {
  let [x, y] = [1, 1];
  let done = false;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (done) {
        return { value: undefined, done: true };
      }
      const value = x;
      [x, y] = [y, x + y];
      return {
        value,
        done: false,
      };
    },
    return(arg: any) {
      done = true;
      return {
        value: arg,
        done: true,
      };
    },
    throw(e: any) {
      done = true;
      throw e;
    },
  };
}

export { fibonacciSequence };
