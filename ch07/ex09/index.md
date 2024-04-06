> `"𠮷野家"[0]`や `tar[0]` が何を返す調べなさい。それぞれの結果について説明しなさい。問題 7.8 で得た絵文字に対する知見も述べなさい。

`"𠮷野家"[0]`としたときは"𠮷"の上位サロゲートである`\uD842`が返る。
"𠮷野家"は3つのコードポイントで構成される文字列である。
ただし、"𠮷"はサロゲートペアのコードポイントで、2つのコードユニットで表現される。
そのため、`"𠮷野家"[0]`としたときは"𠮷"の上位サロゲートである`\uD842`が返る。

`"👨‍👨‍👧‍👧"[0]`としたときは"👨"の上位サロゲートである`\uD83D`が返る。
"👨‍👨‍👧‍👧"は7つのコードポイントで構成される文字列である。
\u{1f468}(👨), \u{1f468}, \u{1f467}(👧), \u{1f467}
が順に\u200D(ゼロ幅接合子)で結合されている。
\u{1f468}はサロゲートペアのコードポイントで、\uD83Dと\uDC68の2つのコードユニットで表現される。
そのため、`"👨‍👨‍👧‍👧"[0]`としたときは"👨"の上位サロゲートである`\uD83D`が返る。