## 問題 11.11 🖋️

`performance.now` を使ってプログラムの処理時間を測定してみよう。
ch11/ex11/index.js は `"Hello".length` にどれだけの時間がかかるか測定しようと実装したコードである。

コードを実行すると以下の事実に気付くだろう:

- costOfLength が負の値を返すことがある (`"Hello".length` を実行すると時が巻き戻るのだろうか?)
- costOfLength の引数の値を大きくすれば大きくする程結果が小さくなる (`"Hello".length` を実行すればする程速くなるのだろうか?)

どうやら何かがおかしい。どうしてこのような結果になるか調べて説明しなさい。

**出典**: [microbenchmarks fairy tale](https://mrale.ph/blog/2012/12/15/microbenchmarks-fairy-tale.html)

**出題範囲**: 11.4
