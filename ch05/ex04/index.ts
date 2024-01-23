/*
## 問題 5.4 💻 🧪

初項と第 2 項を 1 とするフィボナッチ数列 (1, 1, 2, 3, ...) の最初の 10 個を返す関数を、while 文によるループを使って書きなさい。

同様に、do/while 文を使って書きなさい。

同様に、for 文を使って書きなさい。*/

export function fibonacci1(): number[] {
  let a = 1;
  let b = 1;
  const result = [a, b];
  while (result.length < 10) {
    const c = a + b;
    result.push(c);
    [a, b] = [b, c];
  }
  return result;
}

export function fibonacci2(): number[] {
  let a = 1;
  let b = 1;
  const result = [a, b];
  do {
    const c = a + b;
    result.push(c);
    [a, b] = [b, c];
  } while (result.length < 10);
  return result;
}

export function fibonacci3(): number[] {
  let a = 1;
  let b = 1;
  const result = [a, b];
  for (; result.length < 10; ) {
    const c = a + b;
    result.push(c);
    [a, b] = [b, c];
  }
  return result;
}
