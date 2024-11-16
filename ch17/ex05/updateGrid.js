// Life Game のルールに従ってセルを更新する
export function updateGrid(grid, rows, colmuns) {
    const nextGrid = grid.map((arr) => [...arr]);

    function countNeighbors(grid, x, y) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue; // セル自体をカウントしない
                const newX = x + i;
                const newY = y + j;
                if (newX >= 0 && newX < colmuns && newY >= 0 && newY < rows) {
                    count += grid[newY][newX] ? 1 : 0;
                }
            }
        }
        return count;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < colmuns; col++) {
            const neighbors = countNeighbors(grid, col, row);
            const cell = grid[row][col];
            if (cell && (neighbors < 2 || neighbors > 3)) {
                nextGrid[row][col] = false; // 死亡
            } else if (!cell && neighbors === 3) {
                nextGrid[row][col] = true; // 生命誕生
            }
            // 他の場合、変更なし (生き残る場合や、すでに死んでいる場合)
        }
    }
    return nextGrid;
}
