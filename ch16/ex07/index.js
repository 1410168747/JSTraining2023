import { fs } from "fs";

function checkEntry(path, callback) {
    fs.stat(path, (err, stats) => {
        if (err) {
            // エラー時の処理 (ファイル/ディレクトリが存在しないか、アクセス権限がない場合など)
            if (err.code === 'ENOENT') {
                return callback('not_found', null);
            } else {
                return callback('error', null);
            }
        }
        // ファイルの場合
        if (stats.isFile()) {
            return callback(null, 'file');
        }
        // ディレクトリの場合
        if (stats.isDirectory()) {
            return callback(null, 'directory');
        }
        // その他 (シンボリックリンク等)
        return callback(null, 'other');
    });
}

export { checkEntry };