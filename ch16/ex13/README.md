# 練習問題 16 章

## 問題 16.13 💻

この章では何度か [シェル](https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%A7%E3%83%AB) という単語が登場した。ここまでに学んだ知識を元に簡単なシェルを作ってみよう。

[ex13/shell.js](ex13/shell.js) には作りかけのシェルの実装がある:

1. `node path/to/shell.js` と実行してみなさい
2. プログラム中の `FIXME` という箇所を修正しパイプやリダイレクトを実装しなさい

パイプやリダイレクトの例は以下:

```sh
# Linux
> echo HELLO | tr [:upper:] [:lower:] > hello.txt

# Windows (WSL が必要)
> wsl echo HELLO | wsl tr [:upper:] [:lower:] > hello.txt

# いずれも hello.txt に `hello` と書き込まれる

# Windows (WSL 不要)
# 問題: なぜ直接 dir を使わず cmd /c を書いているのだろうか？これらの意味は？
> cmd /c dir | cmd /c "findstr DIR"
```

**注意**: ここでは説明を簡単にするために `spawn` を利用したが、これは一般的なシェルの実装とは異なることに注意。

**出題範囲**: なし
