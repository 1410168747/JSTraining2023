# 練習問題 17 章

今までの章では presets に用意された package.json や設定ファイルを利用して解答を作成してきたが、この章では ch17 ディレクトリの下に npm プロジェクトを作成して、自分で package.json やその他の設定ファイルを整備しなさい。

また npm は package.json の祖先ディレクトリに package.json がある場合、そのディレクトリの node_modules にある依存パッケージを探索する。
この章ではそれを利用せずに、祖先ディレクトリの依存関係に存在しているパッケージでも、明示的に ch17 の package.json に依存関係を記述すること。

## 問題 17.7 🖋

TypeScriptのトランスパイルは`@babel/preset-typescript`や`tsc`によって可能だが、それぞれの違いを調べなさい。

**出題範囲 17.6**