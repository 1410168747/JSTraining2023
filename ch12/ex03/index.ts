/**
 * Generator function that generates a counter that starts at 0 and increments by 1 each time it is called.
 * If the generator is passed an error, the counter is reset to -1.
 * @returns Generator<number, void, unknown>
 * @example
 * const counter = counterGen();
 * console.log(counter.next()); // { value: 0, done: false }
 * console.log(counter.next()); // { value: 1, done: false }
 * console.log(counter.next()); // { value: 2, done: false }
 * console.log(counter.throw(new Error('Error'))); // { value: -1, done: false }
 * console.log(counter.next()); // { value: 0, done: false }
 * console.log(counter.next()); // { value: 1, done: false }
 */
function* counterGen(): Generator<number, void, unknown> {
  let count = 0;
  while (true) {
    try {
      yield count++;
    } catch (e) {
      count = -1;
    }
  }
}

export { counterGen };
