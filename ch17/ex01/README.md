# 練習問題 17 章

今までの章では presets に用意された package.json や設定ファイルを利用して解答を作成してきたが、この章では ch17 ディレクトリの下に npm プロジェクトを作成して、自分で package.json やその他の設定ファイルを整備しなさい。

また npm は package.json の祖先ディレクトリに package.json がある場合、そのディレクトリの node_modules にある依存パッケージを探索する。
この章ではそれを利用せずに、祖先ディレクトリの依存関係に存在しているパッケージでも、明示的に ch17 の package.json に依存関係を記述すること。

## 問題 17.1 💻

ESLint と Prettier は昨今よく使われおり、併用されることもよくある。
この二つを package.json に[scripts](https://docs.npmjs.com/cli/v9/using-npm/scripts)を追加してそれぞれ実行できるようにしなさい。
追加した Prettier の scripts 実行時は警告が表示されるだけでなく、コードの修正がされるようオプションで設定すること。
[Prettier vs. Linters](https://prettier.io/docs/en/comparison.html)にあるように ESLint ではバグ検知のための検知を、フォーマットに関しては Prettier で行うようにすること。

ESLint、Prettier の各種設定はプロジェクトで採用したスタイルによって設定すべき内容も変わるが、ここでは設定の練習として[Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)になるべく従うように設定しなさい。

実行確認用のファイルとして `ex01` に`format_sample.js` と `lint_sample.js` を用意した。それぞれのファイルに追加した scripts を実行し、lint の警告は修正しなさい。
ただし `format_sample.js` は lint の警告を修正するのではなく、ESLint の設定で lint 対象から除外し、警告がでないようにすること。
実行確認用のファイルはあくまで例として上記のガイドのいくつかを反映されているのみであるため、設定に関しては実行確認用ファイルがガイドに従う最小設定ではなく、[Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)に従うこと。

- **出題範囲 17.1, 17,2**
