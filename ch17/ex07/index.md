## 背景

<dl>
<dt>トランスパイル</dt>
<dd>
<blockquote cite="https://e-words.jp/w/トランスパイル.html">
あるプログラミング言語で書かれたプログラムを、別のプログラミング言語のプログラムに変換すること。「トランスレーション」（translation）と「コンパイル」（compile）を組み合わせた造語。</blockquote>
</dd>
<dt>Polyfill (ポリフィル)</dt>
<dd>
<blockquote cite="https://developer.mozilla.org/ja/docs/Glossary/Polyfill">
ポリフィルとは、最近の機能をサポートしていない古いブラウザーで、その機能を使えるようにするためのコードです。大抵はウェブ上の JavaScript です。</blockquote>
</dd>
</dl>

<q>TypeScriptのトランスパイル</q>はTypeScriptコードをJavaScriptに変換することを意味します。この方法の`@babel/preset-typescript`や`tsc`について違いを述べます。

### `@babel/preset-typescript`

<blockquote cite="https://babeljs.io/docs">
<h2>Babel is a JavaScript compiler</h2>

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

<ul>
<li>Transform syntax</li>
<li>Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)</li>
<li>Source code transformations (codemods)</li>
<li>And more! (check out these videos for inspiration)</li>
</li>
</ul>
</blockquote>

_Babel_ は _JavaScript_ のトランスコンパイラです。_TypeScript_ のコードもトランスコンパイルすることができます。ただし、型の検証は行わず、型定義を削除するのみです。

<blockquote cite="https://babeljs.io/docs#type-annotations-flow-and-typescript">
<h2>Type Annotations (Flow and TypeScript)</h2>
<p>
Babel can strip out type annotations! Check out either our Flow preset or TypeScript preset to get started. <strong>Keep in mind that Babel doesn't do type checking;</strong> you'll still have to install and use Flow or TypeScript to check types.
</p>

</blockquote>

### `tsc`

_TSC_ も _TypeScript_ のトランスコンパイラーです。ただし、_TSC_ は型チェクも行います。

## 参考

[トランスパイル（トランスコンパイル）とは - IT用語辞典 e-Words](https://e-words.jp/w/トランスパイル.html)
[What is Babel?・Babel](https://babeljs.io/docs)
