// モジュールの非同期インポート
(async () => {
    const { message } = await import('./main.js');
    console.log(message); // モジュールからエクスポートされたメッセージを出力
})();