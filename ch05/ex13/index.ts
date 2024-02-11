export function* fibonacci(): Generator<number, void, unknown> {
  let [result, next] = [1, 1];
  while (true) {
    yield result;
    [result, next] = [next, result + next];
  }
}
