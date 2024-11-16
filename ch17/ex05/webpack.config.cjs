const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production', // 本番モード
    devtool: 'source-map' // ソースマップを有効にする
};