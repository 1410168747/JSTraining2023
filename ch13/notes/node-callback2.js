import { https } from "https";// 「fs」モジュールは、ファイルシステム関連のAPIを持つ。

function getText(url, callback) {
    // URLに対してHTTP GETリクエストを送信する。
    request = https.get(url);

    // "response"イベントを処理するための関数を登録する。
    request.on("response", response => {
        // "response"イベントはレスポンスヘッダを受け取ったときに発生する。
        let httpStatus = response.statusCode;
        // HTTPレスポンスのボディ部はまだ受け取っていない。
        // このためボディ部を受け取ったときに呼び出されるイベントハンドラを登録する。
        response.setEncoding("utf-8");  // Unicodeのテキストを受け取る。
        let body = "";                  // 受け取ったテキストをこの変数に蓄積する。

        // ボディ部が読み込めたときに、このイベントハンドラが呼び出される。
        response.on("data", chunk => { body += chunk; });

        // レスポンスの受信が完了したら、このイベントハンドラが呼び出される。
        response.on("end", () => {
            if (httpStatus === 200) {   // HTTPレスポンスが正常であった場合、
                callback(null, body);   // レスポンスのボディ部をコールバックに渡す。
            } else {                    // 異常の場合は、エラーを渡す。
                callback(httpStatus, null);
            }
        });
    });

    // 低レベルのネットワークエラーのためにイベントハンドラを登録する。
    request.on("error", (err) => {
        callback(err, null);
    });
}