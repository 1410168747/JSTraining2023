onmessage = function (e) {
    let { tile, depth } = e.data;
    let imageData = renderTile(tile, depth);
    postMessage({ tile: tile, imageData: imageData });
};

function renderTile(tile, depth) {
    const { x, y, width, height } = tile;
    let canvas = new OffscreenCanvas(width, height);
    let context = canvas.getContext("2d");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "#000000";
    drawSierpinski(context, 0, 0, width, height, depth);
    return context.getImageData(0, 0, width, height);
}

function drawSierpinski(context, x, y, width, height, depth) {
    if (depth === 0) {
        context.fillRect(x, y, width, height);
        return;
    }

    let w = width / 2;
    let h = height / 2;

    drawSierpinski(context, x, y, w, h, depth - 1);
    drawSierpinski(context, x + w, y, w, h, depth - 1);
    drawSierpinski(context, x, y + h, w, h, depth - 1);
}