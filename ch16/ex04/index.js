import fs from 'fs';
import iconv from 'iconv-lite';

const filePath = 'hello.txt';

// ファイルをバイナリ形式で読み込む
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Shift_JIS から UTF-8 にデコード
    const decodedText = iconv.decode(data, 'Shift_JIS');

    // コンソールに表示
    console.log(decodedText);
});