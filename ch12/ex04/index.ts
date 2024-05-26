function* generatePrime() {
  const primes = [];
  while (true) {
    const newPrime = nextPrime(primes);
    primes.push(newPrime);
    yield newPrime;
  }
}

function nextPrime(primes: Array<number>): number {
  // 制約:
  // エラストテネスの篩を使った素数の生成では、指定した最大値の1/2乗までの素数をチェックすることで、最大値までの素数を生成できる。
  // 生成した最大の素数の2乗を次の素数の探索範囲の上限とすることでより効率的に素数を生成できるはずだが、
  // 素数の生成と素数のyieldを分離するのが難しいため、今回は実施できない。
  if (primes.length === 0) {
    return 2;
  }
  const greatestPrime = primes[primes.length - 1];
  // ベルトラン＝チェビシェフの定理により、greatestPrimeより大きく、2 * greatestPrime以下の数の中には必ず素数が存在するので、
  // 前の素数の次から前の素数 * 2までの間を走査する
  const candidates = [...Array(greatestPrime)].map(
    (_, i) => i + greatestPrime + 1
  );
  for (const e of candidates) {
    if (isNewPrime(primes, e)) {
      return e; // 次の素数を見つけたら走査を打ち切る
    }
  }
  throw new Error("Unreachable from the Bertrand-Chebyshev theorem");
}

const isNewPrime = (allKnownPrimes: number[], candidate: number): boolean =>
  // candidateが既知のいずれかの素数で割り切れる、つまり素数ではない場合、someはtrueを返す。この操作がエラストテネスの篩に相当する。
  // つまり、既知の全ての素数で割り切れない(=someがfalseを返す)場合、candidateは素数なので、この関数はtrueを返す。
  !allKnownPrimes.some((p) => p ** 2 <= candidate && candidate % p === 0);

export { generatePrime };
