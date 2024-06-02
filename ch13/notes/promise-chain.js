fetch("https://developer.mozilla.org/ja/")// HTTPリクエストを作成する。
    .then(response => response.json())  // レスポンスのボディ部をJSONとして取得する。
    .then(document => {                 // JSONデータを受け取ったら、
        return render(document);        // ユーザにそのドキュメントを表示する。
    })
    .then(rendered => {                 // レンダリングされたドキュメントを取得したら。
        cacheInDatabase(rendered);      // ローカルのデータベースにキャッシュする。
    })
    .catch(error => handle(error));     // 何かしらエラーが発生したら処理を行う。

fetch("/api/user/profile").then(respose => {
    // Promiseが解決したら、ステータスとヘッダが利用できる。
    if (response.ok &&
        response.headers.get("Content-Type") === "application/json") {
        // ここでは何ができるのか？実際にはボディ部はまだ取得できていない。
    }
});

fetch("/api/user/profile").then(response => {
    response.json()// json()メソッドもPromiseを返す(fetchが満たされてresponseが取得できても、ボディ部がないことがあるらしい)。
        .then(profile => {   // レスポンスのボディ部をJSONとして取得する。
            // レスポンスのボディ部を受け取ったときに、自動的に
            // JSON形式で解釈され、この関数に引数として渡される。
            displayUserProfile(profile);
        });
});

function c1(response) {                 // コールバック1。
    let p4 = response.json();
    return p4;                          // プロミス4を返す。
}

function c2(profile) {                  // コールバック2。
    displayUserProfile(profile);
}

let p1 = fetch("/api/user/profile");    // プロミス1、タスク1。
let p2 = p1.then(c1);                   // プロミス2、タスク2。
let p3 = p2.then(c2);                   // プロミス3、タスク3

{
    const p1 = fetch("/api/user/profile") // HTTPリクエストを送信する。
    const c1 = response => {     // ステータスとヘッダが得られたら呼び出される。
        if (!response.ok) { // 404 Not Foundなどのエラーを得た場合、
            return null;    // ユーザはログアウトしている。nullプロファイルを返す。
        }

        // ヘッダを調べて、サーバがJSONを送っていることを確認する。
        // JSONではなかった場合、サーバが壊れているので、重大なエラーが発生！
        let type = response.headers.get("content-type");

        if (type !== "application/json") {
            throw new TypeError(`Expected JSON, got ${type}`);
        }

        // ここに来たら、2xx ステータスを取得して、JSON形式のcontent-typeを
        // 得ているので、レスポンスのボディ部をJSONオブジェクトとして
        // 処理するためのPromiseを返すことができる。
        return response.json();
    };
    const p2 = p1.then(c1);
    const c2 = profile => {      // 解釈されたレスポンスのボディ部またはnullで呼び出される。
        if (profile) {
            displayUserProfile(profile);
        }
        else { // 404エラーを受け取りnullが渡されたなら、ここで終了する。
            displayLoggedOutProfilePage();
        }
    };
    const p3 = p2.then(c2);
    const c3 = e => {
        if (e instanceof NetworkError) {
            // インターネット接続が切断している場合、このような理由でfetch()は失敗する。
            displayErrorMessage("Check your internet connection.");
        }
        else if (e instanceof TypeError) {
            // TypeErrorをスローした場合に、この処理が行われる。
            displayErrorMessage("Something is wrong with our server!");
        }
        else {
            // 予期しないエラーが発生した。
            console.error(e);
        }
    }
    p3.catch(c3);

    // URLの配列から始める。
    const urls = [ /* 0個以上のURLを記述する。 */];
    // そして、Promiseオブジェクトの配列に変換する。
    promises = urls.map(url => fetch(url).then(r => r.text()));
    // ここで、すべてのPromiseを並行処理するためのPromiseが得られる。
    Promise.all(promises)
        .then(bodies => { /* 文字列の配列に対して何らかの処理を行う。 */ })
        .catch(e => console.error(e));
}

function wait(duration) {
    // 新たにPromiseを生成し、返す。
    return new Promise((resolve, reject) => {   // 以下のコードでPromiseを制御する。
        // 引数に問題があれば、Promiseを失敗させる。
        if (duration < 0) {
            reject(new Error("Time travel not yet implemented"));
        }
        // 問題がなければ、非同期に待機し、そしてPromiseを解決する。
        // setTimeoutは、引数を指定せずresolve()を呼び出す。 つまり、
        // Promiseは未定義値で満たされることになる。
        setTimeout(resolve, duration);
    });
}

{
    function getJSON(url) {
        // 新たにPromiseを生成し、返す。
        return new Promise((resolve, reject) => {
            // 指定したURLに対してHTTP GETリクエストを送信する。
            request = http.get(url, response => { // レスポンスが届いたら呼び出される。
                // HTTPステータスに問題があれば、Promiseを失敗させる。
                if (response.statusCode !== 200) {
                    reject(new Error(`HTTP status ${response.statusCode}`));
                    response.resume();  // メモリリークを防ぐ。
                    // また、レスポンスのヘッダに問題があれば失敗させる。
                } else if (response.headers["content-type"] !== "application/json") {
                    reject(new Error("Invalid content-type"));
                    response.resume();  // メモリリークを防ぐ。
                } else {
                    // 問題がなければ、レスポンスのボディ部を読むためのイベントを登録する。
                    let body = "";
                    response.setEncoding("utf-8");
                    response.on("data", chunk => { body += chunk; });
                    response.on("end", () => {
                        // レスポンスのボディ部の読み込みが完了したら、解析を試みる。
                        try {
                            let parsed = JSON.parse(body);
                            // 解析に成功したら、Promiseを満たす。
                            resolve(parsed);
                        } catch (e) {
                            // 解析が失敗したら、Promiseを失敗させる。
                            reject(e);
                        }

                    });
                }
            });
            // （ネットワークが切断しているなど）レスポンスを受け取る前に、
            // リクエストが失敗した場合もPromiseを失敗させる。
            request.on("error", error => {
                reject(error);
            });
        });
    }

}
{
    function fetchSequentially(urls) {
        // URLを取得したときに、この配列でボディ部が保存される。
        const bodies = [];

        // この関数でボディ部を取得し、Promiseを返す。
        function fetchOne(url) {
            return fetch(url)
                .then(response => response.text())
                .then(body => {
                    // 配列にボディ部を保存する。ここではあえて戻り値は
                    // 返さないようにしている（未定義値を返す）。
                    bodies.push(body);
                });
        }

        // （未定義値で）すぐに満たされるPromiseから始める。
        let p = Promise.resolve(undefined);

        // ここで取得するURLを巡回し、任意の長さのPromiseチェーンを組み立て、
        // チェーンの各段階でURLを1つ取得する。
        for (url of urls) {
            p = p.then(() => fetchOne(url));
        }

        // チェーンの最後のPromiseが満たされたとき、ボディ部が保存された
        // 配列が使えるようになる。このため、このボディ部の配列のために
        // Promiseを返すようにする。ここではエラー処理を行っていないことに
        // 注意。エラーが呼び出し元に伝播するようにしている。
        return p.then(() => bodies);
    }
}

{
    // この関数は入力値の配列と、「promiseMaker」関数を引数として受け取る。
    // 配列中の任意の入力値xに対して、promiseMaker(x)はPromiseを返すようにする。
    // このPromiseは出力値で満たされる。この関数は、計算した出力値の配列で
    // 満たされるPromiseを返す。
    //
    // ただし、Promiseを一度にすべて作成して並行処理するのではなく、
    // promiseSequence()は一度に1つのPromiseだけを実行する。直前の
    // Promiseが満たされるまで、次の値に対してpromiseMaker()を
    // 呼び出さない。
    function promiseSequence(inputs, promiseMaker) {
        // 変更できるように配列のコピーを作る。
        inputs = [...inputs];

        // この関数をPromiseコールバックとして使用する。
        // この擬似的な再帰呼び出しの魔法で、すべての処理を実現する。
        function handleNextInput(outputs) {
            if (inputs.length === 0) {
                // 入力が残っていない場合、出力値の配列を返す。最後に、
                // このPromiseが満たされ、これより前の「解決されているが
                // まだ満たされていない」Promiseもすべて満たされる。
                return outputs;
            } else {
                // まだ処理する入力値がある場合、Promiseオブジェクトを
                // 返す。新しいPromiseから将来返される値で、現在のPromiseが
                // 解決されるようにする。
                let nextInput = inputs.shift();     // 次の入力値を取得し、
                return promiseMaker(nextInput)      // 次の出力値を計算する。
                    // そして、新たな出力値で、出力となる配列を新たに作成する。
                    .then(output => outputs.concat(output))
                    // この新しい長くなった出力配列を渡して、「再帰処理」を行う。
                    .then(handleNextInput);
            }
        }

        // 空の配列で満たされるPromiseから始めて、前記した関数を
        // コールバックとして利用する。
        return Promise.resolve([]).then(handleNextInput);
    }

    // あるURLに対して、そのURLのボディ部のテキストで満たされるPromiseを返す。
    function fetchBody(url) { return fetch(url).then(r => r.text()); }
    // この関数を使って、逐次的にURLのボディ部を取得する。
    promiseSequence(urls, fetchBody)
        .then(bodies => { /* 文字列の配列を使って何かしらの処理を行う。 */ })
        .catch(console.error);
}