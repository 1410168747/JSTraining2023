# 解答

## 問

## 問題 4.8 🖋️

古い JavaScript のコードでは `undefined` と比較を行う際に:

```js
if (foo === undefined) { ... }
```

ではなく以下のように書かれたコードを見ることがある (注: `void 0` は `undefined` を返す)。

```js
if (foo === void 0) { ... }
```

これにはどのような理由があるか、また今ではこのような書き方をしないのは何故か調べて回答しなさい。

**出題範囲**: 4.13

# 解答

`undefined`はJavaScriptのプリミティブ値であり、それを初期値として持つグローバルオブジェクトのプロパティでもある。ECMAScript 5（ES5）より前のバージョンのJavaScriptでは、このグローバルオブジェクトのプロパティであるundefinedは書き換え可能だったため、コード内でその値が上書きされると、以下のような比較が意図通りに機能しなくなる可能性があった。

```js
if (foo === undefined) { ... }// undefinedの値がプリミティブ値のundefinedかわからない。
```

この問題を避けるため、開発者は`void 0`を用いた比較を行っていた。f

```js
if (foo === void 0) { ... }// void 0 の戻り値は常にundefined
```

void演算子は、所与の任意の式を評価し、その結果を破棄、そして無条件でundefinedを返す。その結果、void 0は常にundefinedを意味し、別の値で上書きされることもない。

近年のブラウザ（JavaScript 1.8.5 / Firefox 4以降）では、ECMAScript 5（ES5）仕様により、undefinedは設定不可、書き込み不可のプロパティとなっているため。この変更により、「undefinedの値が意図せずに書き換えられる」問題は解決されている。したがって`foo === undefined`は利用可能。
