import { fs } from "fs";// 「fs」モジュールは、ファイルシステム関連のAPIを持つ。

let options = {
    // プログラム用のオプションを保持するオブジェクト。
    // デフォルトのオプションをここに記述する。
};

// 設定ファイルを読み込み、コールバック関数を呼び出す。
fs.readFile("config.json", "utf-8", (err, text) => {
    if (err) {
        // エラーが発生した場合、警告を表示する。処理は継続する。
        console.warn("Could not read config file:", err);
    } else {
        // エラーがなかった場合、ファイルの内容を解釈しoptionsオブジェクトに代入する。
        Object.assign(options, JSON.parse(text));
    }

    // どちらの場合でも、ここでプログラムを開始できる。
    startProgram(options);
});