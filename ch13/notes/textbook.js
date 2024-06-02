// **** 13.1.1 タイマー *****
setTimeout(checkForUpdates, 60000);

// 1分後にcheckForUpdatesを呼び出し、その後は1分ごとに繰り返し呼び出す。
let updateIntervalId = setInterval(checkForUpdates, 60000);

// setInterval()は値を返す。この値を引数にしてclearInterval()を呼び出せば、繰り返し呼び出しを停止できる
//（同じように、setTimeout()の返す値をclearTimeout()に渡せば停止できる）。
function stopCheckingForUpdates() {
    clearInterval(updateIntervalId);
}

// **** 13.1.2 イベント *****

// このCSSセレクタにマッチするHTMLの<button>要素を表すオブジェクトを返すように、Webブラウザにリクエストする。
let okay = document.querySelector('#confirmUpdateDialog button.okay');

// そして、ユーザがこのボタンをクリックしたときに呼び出されるコールバック関数を登録する。
okay.addEventListener('click', applyUpdate);

// ***** 13.1.3 ネットワークイベント *****

function getCurrentVersionNumber(versionCallback) { // 引数はコールバック。
    // バックエンドのversion APIに対してHTTPリクエストを送信する。
    let request = new XMLHttpRequest();
    request.open("GET", "http://www.example.com/api/version");
    request.send();
    // レスポンスを受け取ったときに呼び出されるコールバックを登録する。
    request.onload = function () {
        if (request.status === 200) {
            // HTTPステータスが正常であれば、バージョン番号を取得してコールバックを呼び出す。
            let currentVersion = parseFloat(request.responseText);
            versionCallback(null, currentVersion);
        } else {
            // 異常な場合は、コールバックに対してエラーを通知する。
            versionCallback(response.statusText, null);
        }
    };
    // ネットワークエラーが発生したときに呼び出されるコールバックも登録する。
    request.onerror = request.ontimeout = function (e) {
        versionCallback(e.type, null);
    };
}