import { promises as fs } from 'fs'; // 正しいインポート

// ファイルの作成/初期化
const filePath = './test.txt';

async function processFile() {
    try {
        // ファイルに書き込み
        await fs.writeFile(filePath, 'Hello, World!', 'utf8');

        // ファイルサイズの変更
        await fs.truncate(filePath, 30);

        console.log('File truncated to 30 bytes.');
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}

processFile();