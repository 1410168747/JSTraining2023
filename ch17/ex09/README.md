# 練習問題 17 章

今までの章では presets に用意された package.json や設定ファイルを利用して解答を作成してきたが、この章では ch17 ディレクトリの下に npm プロジェクトを作成して、自分で package.json やその他の設定ファイルを整備しなさい。

また npm は package.json の祖先ディレクトリに package.json がある場合、そのディレクトリの node_modules にある依存パッケージを探索する。
この章ではそれを利用せずに、祖先ディレクトリの依存関係に存在しているパッケージでも、明示的に ch17 の package.json に依存関係を記述すること。

## 問題 17.9 💻

`ex09/task.js`のコードをTypeScript、Flowを使ったコードにそれぞれ書き換えなさい。
また、`ex09/caller.ts`(TypeScript)、`ex09/caller.js`(Flow)からの呼び出しがそれぞれ動作することを確認しなさい。
ただし、関数内部の実装は変更しないこと。また、`isUserObject`の引数以外で`any`を使わないこと。

**出題範囲 17.8**
