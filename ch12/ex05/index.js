import * as fs from "node:fs";

function* readLines(filePath, bufferSize = 1024) {
    const fd = fs.openSync(filePath, 'r');
    let buffer = Buffer.alloc(bufferSize);
    let leftover = ''; // 前の読み込みで改行に至らなかった残り部分を保持
    let bytesRead = null;

    try {
        while ((bytesRead = fs.readSync(fd, buffer, 0, bufferSize, null)) !== 0) {
            let chunk = leftover + buffer.slice(0, bytesRead).toString();
            let lines = chunk.split('\n');
            leftover = lines.pop(); // `lines` の最後は次のチャンクにまたがる可能性があるため保持

            for (let line of lines) {
                yield line;
            }
        }

        // 最後のチャンクが改行で終わらなかった場合の処理。余ったテキストを返す。
        if (leftover) {
            yield leftover;
        }
    } finally {
        fs.closeSync(fd);
    }
}