# 解答

## 問

## 問題 5.11 🖋️

Node で debugger 文を使ってデバッグする方法を調べなさい。

**出題範囲**: 5.6.2

# 解答

## 結果

TypeScriptをコンパイルします: TypeScriptファイル 'index.ts' をJavaScriptにコンパイルするには、ターミナルで以下のコマンドを入力します。:

```bash
tsc {{TypeScriptファイル名}}
```

tsc コマンドは、デフォルトで同じディレクトリにコンパイルしたJavaScriptファイル ('index.js')を出力します。

Node.jsをデバッグモードで実行します: ターミナルで以下のコマンドを実行します:

```bash
node --inspect {{JavaScriptファイル名}}
```

このコマンドを実行すると、"Debugger listening on ws://127.0.0.1:9229/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"というメッセージが表示されます。

Chrome DevToolsでデバッグします:

1. Chrome/Chromiumベースのブラウザで chrome://inspect を開きます。
1. "Devices" タブを開き、"Open dedicated DevTools for Node" というリンクをクリックします。
1. 新しく開いた DevTools ウィンドウで、"Connection" タブを開き、"localhost:9229" がターゲットとしてリストされていることを確認します。
1. "Pause on exceptions"をオンにしたり、コード内の特定の行にブレイクポイントを追加したりしてデバッグを開始できます。
