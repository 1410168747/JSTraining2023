import http from 'http';
import { resolve, extname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url'; // 追加

const port = 8080;
const __filename = fileURLToPath(import.meta.url); // 現在のファイルの絶対パスを取得
const __dirname = resolve(__filename, '..'); // 現在のファイルがあるディレクトリの絶対パスを取得
const rootDir = resolve(__dirname, './root'); // サーバーファイルからプロジェクトディレクトリまで

const server = http.createServer((req, res) => {
    let url = req.url === '/' ? '/index.html' : req.url; // デフォルトページをindex.htmlに設定
    const filePath = resolve(rootDir, url.slice(1)); // ドキュメントルートを基点としたパスを生成

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.statusCode = 404;
                res.end('file not found');
            } else {
                res.statusCode = 500;
                res.end('internal server error');
            }
            console.error(err);
            return;
        }

        const contentType = getContentType(filePath) || 'application/octet-stream';
        res.setHeader('Content-Type', contentType);
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`サーバーがポート ${port} で起動しました。`);
});

function getContentType(filePath) {
    const ext = extname(filePath).toLowerCase();
    switch (ext) {
        case '.html':
            return 'text/html';
        case '.js':
            return 'application/javascript';
        case '.css':
            return 'text/css';
        default:
            return 'text/plain';
    }
}