// モジュールの非同期インポート
// (async () => {
//     console.log(globalThis.navigator);
// })();

// この関数はウェブページが読み込まれたときに実行される
window.onload = function () {
    // 描画する情報を含む配列を作成する
    const info = [];
    for (let i in navigator) {
        info.push(i);
    }

    // HTML要素を取得する
    const displayElement = document.getElementById('navigator-info');

    // 情報を要素に追加する
    info.forEach(function (item) {
        // 各情報項目をリスト項目として追加する
        if (!(navigator[item] instanceof Object) && navigator[item] !== "") {
            const listItem = document.createElement('li');
            listItem.textContent = `${item}: ${navigator[item]}`;
            displayElement.appendChild(listItem);
        }
    });
};