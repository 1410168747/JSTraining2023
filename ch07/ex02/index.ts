/*
## 問題 7.2 💻

以下の関数を繰り返し (`for`, `while`) や条件分岐 (`if`) を利用せず `map`, `filter`, `reduce`, `forEach` 等のメソッドを利用して書き直しなさい。

```js
function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function sumOfSquaredDifference(f, g) {
  let result = 0;
  for (let i = 0; i < f.length; i++) {
    result += (f[i] - g[i]) ** 2;
  }
  return result;
}

function sumOfEvensIsLargerThan42(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      continue;
    }
    sum += array[i];
    if (sum >= 42) {
      return true;
    }
  }
  return false;
}
```

**出題範囲**: 7.8.1
*/
export const fizzbuzz = (n: number): void =>
  [...Array(n).keys()]
    .map((i) => i + 1)
    .map((e) => "number" === typeof e && (e % 15 === 0 ? "FizzBuzz" : e))
    .map((e) => "number" === typeof e && (e % 3 === 0 ? "Fizz" : e))
    .map((e) => "number" === typeof e && (e % 3 === 0 ? "Buzz" : e))
    .forEach(console.log);

export const sumOfSquaredDifference = (f: number[], g: number[]): number =>
  f.reduce((result, e, i) => (result += (e - g[i]) ** 2), 0);

export const sumOfEvensIsLargerThan42 = (array: number[]): boolean =>
  42 <=
  array.filter((e) => e % 2 === 0).reduce((result, e) => (result += e), 0);
