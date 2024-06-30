# 練習問題 15 章 15.1-3

## 問題 15.1-3.5 💻

index1.html と index2.html についてなるべく速くスクリプトがロードされて画面に"Hello"と表示されるようにしなさい。

ただし、以下の書き換えのみが許可される。

1. script タグに async="true"を付与
2. script タグに defer="true"を付与
3. js 内の処理を window.addEventListener("domcontentloaded", () => {})で囲む
4. js 内の処理を document.addEventListener("loaded", () => {})で囲む

ヒント: ロードされる速さはデベロッパーツールでネットワークタブを開きキャッシュを無効化にチェックを付けてリロードすると確認できる

**出題範囲 15.1.5.2**
