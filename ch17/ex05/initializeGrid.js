// ライフゲームのセル (true or false) をランダムに初期化する
export function initializeGrid(rows, cols) {
    return new Array(rows)
        .fill(null)
        .map(() =>
            new Array(cols).fill(null).map(() => !!Math.floor(Math.random() * 2))
        );
}
