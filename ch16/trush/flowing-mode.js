const fs = require("fs");

// 「フローイングモード」のストリームAPIによるファイルコピー関数。
// 指定されたコピー元ファイルの内容を、指定されたコピー先ファイルにコピーする。
// 成功した場合は、nullを引数にしてコールバックを呼び出す。エラーの場合は、
// Errorオブジェクトを引数にしてコールバックを呼び出す。
function copyFile(sourceFilename, destinationFilename, callback) {
    let input = fs.createReadStream(sourceFilename);
    let output = fs.createWriteStream(destinationFilename);

    input.on("data", (chunk) => {           // 新しいデータが得られたときに、
        let hasRoom = output.write(chunk);  // そのデータをoutputストリームに書き込む。
        if (!hasRoom) {                     // outputストリームが一杯の場合は、
            input.pause();                  // inputストリームを一時停止する。
        }
    });
    input.on("end", () => {                 // inputの最後まで到達したら、
        output.end();                       // outputストリームを終了させる。
    });
    input.on("error", err => {              // inputでエラーが発生した場合、
        callback(err);                      // エラーを引数にコールバックを呼び出し、
        process.exit();                     // 終了する。
    });

    output.on("drain", () => {              // outputが一杯ではなくなったときに、
        input.resume();                     // inputのdataイベントを再開する。
    });
    output.on("error", err => {             // outputでエラーが発生した場合、
        callback(err);                      // エラーを引数にコールバックを呼び出し、
        process.exit();                     // 終了する。
    });
    output.on("finish", () => {             // outputが完全に書き込まれたときに、
        callback(null);                     // エラーなしでコールバックを呼び出す。
    });
}

// ファイルをコピーするための簡単なコマンドラインユーティリティ。
let from = process.argv[2], to = process.argv[3];
console.log(`Copying file ${from} to ${to}...`);
copyFile(from, to, err => {
    if (err) {
        console.error(err);
    } else {
        console.log("done.");
    }
});