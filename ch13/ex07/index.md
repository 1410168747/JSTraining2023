## 答案

### `h1`

#### 問い

```js
async function h1() {
  try {
    await wait3();
    logA();
    await wait2();
    logB();
    await wait1();
    logC();
  } catch (e) {
    log(e.message);
  }
}
```

#### 予想

`h1()`関数呼び出しから3秒後に`A`が出力される。
`A`が出力された2秒後に`B`が出力される。
`B`が出力された1秒後に`C`が出力される。

#### 結果

予想通り

### `h2`

#### 問い

```js
function h2() {
  // NOTE: h3 との比較用
  new Promise(() => {
    errX();
  }).catch((e) => log(e.message));
}
```

#### 予想

`h2()`関数呼び出し直後にエラー`X`が同期的に生成される。
エラーは同期的に生成されるので、ログメッセージとしては表示されない。

#### 結果

```
X
```

> executor については、以下のことを理解することが重要です。
>
> executor の返値は無視されます。
> executor の中でエラーが発生した場合、プロミスは拒否されます。

[Promise() コンストラクター](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

### `h3`

#### 問い

```js
function h3() {
  // NOTE: new Promise の引数が async function の場合、例外はどう扱われるだろう
  new Promise(async () => {
    errX();
  }).catch((e) => log(e.message));
}
```

#### 予想

`Promise`コンストラクタのコールバックに`async`キーワードが付与されているので`errX()`関数からスローされる例外オブジェクトは`Promise`でラップされる。
ただし、`catch()`関数で値が取り出されるため、`X`が表示される。

関数呼び出しから3秒後に`A`が出力される。
`A`が出力された2秒後に`B`が出力される。
`B`が出力された1秒後に`C`が出力される。

#### 結果

```
throw new Error("X");
```

が発生する。

### `h4`

#### 問い

```js
async function h4() {
  // NOTE: 2つの例外は両方 catch できるか？
  try {
    const p1 = wait2().then(() => {
      errX();
    });
    const p2 = wait1().then(() => {
      errY();
    });
    await p1;
    await p2;
  } catch (e) {
    log(e.message);
  }
}
```

#### 予想

`Promise`コンストラクタのコールバックに`async`キーワードが付与されているので`errX()`関数からスローされる例外オブジェクトは`Promise`でラップされる。
ただし、`catch()`関数で値が取り出されるため、`X`が表示される。

関数呼び出しから3秒後に`A`が出力される。
`A`が出力された2秒後に`B`が出力される。
`B`が出力された1秒後に`C`が出力される。

#### 結果

双方ともキャッチできない
