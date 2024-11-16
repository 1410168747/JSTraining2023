# 練習問題 17 章

今までの章では presets に用意された package.json や設定ファイルを利用して解答を作成してきたが、この章では ch17 ディレクトリの下に npm プロジェクトを作成して、自分で package.json やその他の設定ファイルを整備しなさい。

また npm は package.json の祖先ディレクトリに package.json がある場合、そのディレクトリの node_modules にある依存パッケージを探索する。
この章ではそれを利用せずに、祖先ディレクトリの依存関係に存在しているパッケージでも、明示的に ch17 の package.json に依存関係を記述すること。

## 問題 17.5 💻🖋️

[問題 15.4-10.10](../ch15.04-10/README.md#問題-154-1010-) で作成したライフゲームのプログラムについて、プログラム中の関数(`updateGrid`, `renderGrid`)をそれぞれ別のファイルで export し、`index.js` から import して利用するよう修正しなさい。必要に応じて定数の export や関数の引数の変更を行ってもよい。
上記のコードを webpack を利用してバンドルし、バンドル前後のコードについて以下の点を調査して結果を記載しなさい。

- バンドルしたコードと元のコードを比較し、どのような処理が行われたかを確認しなさい。
- バンドル前後それぞれのコードを利用するページをローカルサーバで配信してブラウザから閲覧できるようにしなさい。  
  開発者ツールで `ネットワーク` タブを開き、スクリプトのダウンロード時間、ページの読み込み完了時間について比較しなさい。

**出題範囲 17.5**