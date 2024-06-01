## 答案

### `f3`

#### 問い

```js
function f3() {
  // NOTE: then のコールバック内の例外は try/catch でキャッチできるだろうか
  try {
    wait(0).then(logA).then(errX);
  } catch (e) {
    logB();
  } finally {
    logC();
  }
}
```

#### 予想

即座に`A`が出力された直後に`C`が出力される。
**`B`は出力されない**。

2つめの`then()`メソッド(引数が`errX`関数の方)の戻り値の`Promise`は`new Error("X")`で _失敗する_ が例外はスローしないため、`logB()`関数が実行されることはない。

#### 結果

```
C
A
ERROR!
```

### `f4`

#### 問い

```js
function f4() {
  // NOTE: f5 との比較用
  wait2()
    .then(() => {
      logA();
      return 40;
    })
    .then((value) =>
      wait(1000).then(() => {
        logB();
        return 100;
      })
    )
    .then((v) => log(v));
}
```

#### 予想

2秒後に`A`が出力された1秒後に`B`が出力され、直後に`100`が出力される。

2つめの`then()`メソッド(引数が

```js
(value) =>
  wait(1000).then(() => {
    logB();
    return 100;
  });
```

関数の方)の戻り値の`Promise`は、コールバック関数の戻り値の`Promise`で解決される。ただし、コールバック関数の実装により、満たされるのは1秒後となる。

コールバック関数も`Promise`を返す。 1秒間 _処理中_ となった後`B`を出力し、`100`で満たされる。
コールバック関数が`100`で満たされると、2つめの`them()`メソッドの戻り値も`100`で満たされる。

#### 結果

予想と一致

```
A
B
100
```

### `f5`

#### 問い

```js
function f5() {
  // NOTE: 2つ目の then の引数が関数でなく Promise になっている (典型的なミス)
  wait2()
    .then(() => {
      logA();
      return 40;
    })
    .then(
      wait1().then(() => {
        logB();
        return 100;
      })
    )
    .then((v) => log(v));
}
```

#### 予想

2秒後に`A`が出力される。

2つ目の`then()メソッド`の引数の`Promise`に対して関数呼び出しを試みエラーになるが、この`Promise`チェーンではエラーは処理されない。3つめの`then()`メソッドも先行する`Promise`がエラーになるので処理されない。

#### 結果

```
B
A
40
```

### `f6`

#### 問い

```js
function f6() {
  // NOTE: 1つの Promise に対し then を2回呼び出すとどうなるか

  const p = wait1().then(logA);
  p.then(() => wait1()).then(logB);
  p.then(() => wait2()).then(logC);
}
```

#### 予想

1秒後に`A`が出力される。`A`の出力の1秒後に`B`が出力される。`A`の出力の2秒後に`C`が出力される。
つまり、`A`, `B`, `C`が1秒間隔で表示される。`A`が表示される前にも1秒待つ。

2つ目の`then()メソッド`の引数の`Promise`に対して関数呼び出しを試みエラーになるが、この`Promise`チェーンではエラーは処理されない。3つめの`then()`メソッドも先行する`Promise`がエラーになるので処理されない。

#### 結果

予想通り

```
A
B
C
```

### `f7`

#### 問い

```js
function f7() {
  // NOTE: 2つ目の wait の引数が実行される差には p は解決済み
  // (= 解決済みの Promise の then を呼び出すとどうなるか)
  const p = wait1().then(logA);
  wait2()
    .then(() => {
      return p.then(logB);
    })
    .then(logC);
}
```

#### 予想

1秒後に`A`が出力される。`A`の出力の1秒後に`B`が出力される。`B`の出力の直後に`C`が出力される。

すでに完了している`Promise`であっても`then()`メソッドで新しいコールバックを追加することは可能。
コールバックは非同期ではあるが、すでに満たされている値で即座に呼ばれる。

#### 結果

予想通り

### `f8`

#### 問い

```js
function f8() {
  // NOTE: f9, f10 との比較用
  wait1()
    .then(errX)
    .then(errY)
    .catch((e) => log(e.message))
    .finally(logA);
}
```

#### 予想

1秒後に`X`が出力される。`X`の出力の直後に`A`が出力される。
1つめの`then()`メソッドの`Promise`は失敗するので2つめの`then()`メソッドの`errY`関数は呼ばれない。

#### 結果

予想通り

### `f9`

#### 問い

```js
function f9() {
  // NOTE: f12 との比較用
  wait1()
    .then(() => 42)
    .then(errY)
    .catch((e) => log(e.message))
    .finally(logA);
}
```

#### 予想

1秒後に`Y`が出力され、その直後`A`が出力される
1つめの`then()`メソッドの`Promise`は`42`で満たされるので、2つめの`then()`メソッドの`errY`関数が呼ばれ、戻り値の`Promise`は失敗する。そのため、`catch()`メソッドが呼ばれるので、`Y`が出力される。

#### 結果

予想通り

### `f10`

#### 問い

```js
function f10() {
  // NOTE: then(r, c) と then(r).catch(c) は等しいか？
  wait1()
    .then(() => 42)
    .then(errY, (e) => log(`********** ${e.message}`))
    .finally(logA);
}
```

#### 予想

1秒後に`A`が出力される
1つめの`then()`メソッドの`Promise`は`42`で満たされるので、2つめの`then()`メソッドの第一引数の`errY`関数が呼ばれる。戻り値の`Promise`は失敗する。第二引数は呼ばれないので、`Y`は**出力されない**。

#### 結果

予想通り

### `f11`

#### 問い

```js
function f11() {
  // f12 との比較用: new Promise 内の throw は .catch でキャッチできるか？
  new Promise((resolve, reject) => {
    errX();
  }).catch((e) => log(e.message));
}
```

#### 予想

何も出力されない。生成した`Promise`は _満たされる_ ことも _失敗する_ こともない

#### 結果

```
X
```

### `f12`

#### 問い

```js
function f12() {
  // new Promise 内だがコールバック関数で throw した場合は？
  new Promise((resolve, reject) => {
    setTimeout(() => errX(), 0);
  }).catch((e) => log(e.message));
}
```

#### 予想

何も出力されない。生成した`Promise`は _満たされる_ ことも _失敗する_ こともない

#### 結果

```
X
```

予想通り

function f12() {
// new Promise 内だがコールバック関数で throw した場合は？
new Promise((resolve, reject) => {
setTimeout(() => errX(), 0);
}).catch((e) => log(e.message));
}
