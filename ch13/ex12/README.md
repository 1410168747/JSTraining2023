# 練習問題: 13 章

## 問題 13.12 🖋️

問題 13.1 で非同期処理について学んだあなたは「時間のかかる同期関数があるならば、非同期関数に変換して適宜 `await` すればいいのではないか」と思いついた。

それでは以下のコードを実行すると何が出力されるか予想し実際に確認しなさい。
また「[マイクロタスク](https://developer.mozilla.org/ja/docs/Web/API/HTML_DOM_API/Microtask_guide)」について調査し、この用語を用いて理由を説明しなさい。

```js
setTimeout(() => console.log("Hello, world!"), 1000);

async function longRunningButAsyncFunction() {
  while (true) {
    // NOTE: ループの中で凄く時間のかかる処理 (大きい行列の処理とか...) を実行していると想像して下さい。
    // (適当な値で await するのが目的であり null に理由はない)
    await null;
  }
}

longRunningButAsyncFunction();
```

**出題範囲**: なし

**出題範囲**: 13.3
