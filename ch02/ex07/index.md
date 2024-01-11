# 解答

## 問

以下のプログラムを実行し、挙動を確認しなさい。

```ts
let a = 0,
  b = 0;

// prettier-ignore
const c
=
a
// prettier-ignore
++
b

console.log(a, b, c);

// prettier-ignore
const e = a++
b;

console.log(a, b, e);
```

## 回答

```
thatanaka@tsugukanoMacBook-Pro JSTraining2023 % npx ts-node ch02/ex07/index.ts
0 1 0
1 1 0
```
