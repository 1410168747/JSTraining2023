// grid を canvas に描画する
export function renderGrid(grid, ROWS, columns, ctx, resolution) {
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < columns; col++) {
            const cell = grid[row][col];
            ctx.beginPath();
            ctx.rect(col * resolution, row * resolution, resolution, resolution);
            ctx.fillStyle = cell ? "black" : "white";
            ctx.fill();
            ctx.stroke();
        }
    }
}
