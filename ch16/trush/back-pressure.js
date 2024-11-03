// この関数は、指定したチャンクを指定したストリームに書き込み、再度
// 書き込めるようになったときに満たされるPromiseを返す。Promiseを
// 返すので、awaitと一緒に使うことができる。
function write(stream, chunk) {
    // 指定したチャンクを指定したストリームに書き込む。
    let hasMoreRoom = stream.write(chunk);

    if (hasMoreRoom) {                      // バッファが一杯ではない場合、
        return Promise.resolve(null);       // 既に解決されたPromiseオブジェクトを返す。
    } else {
        return new Promise(resolve => {     // バッファが一杯の場合、 drainイベント
            stream.once("drain", resolve);  // 発生時に解決されるPromiseを返す。
        });
    }
}

// sourceストリームからdestinationストリームへ、destination
// ストリームからのバックプレッシャーを考慮してデータをコピーする。
// これは、source.pipe(destination)を呼び出すのと同じ。
async function copy(source, destination) {
    // 標準出力が想定外に閉じた場合に備えて、destinationストリームに
// エラーハンドラを設定する（例えば、出力を「head」にパイプした場合）。
    destination.on("error", err => process.exit());

    // for/awaitループを使って、入力ストリームから非同期的にチャンクを読み込む。
    for await (let chunk of source) {
        // チャンクを書き込み、バッファに余裕ができるまで待つ。
        await write(destination, chunk);
    }
}

// 標準入力を標準出力にコピーする。
copy(process.stdin, process.stdout);