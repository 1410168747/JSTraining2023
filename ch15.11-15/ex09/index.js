const canvas = document.getElementById('lifeGameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const ws = new WebSocket('ws://localhost:3003');
const ROWS = 50;
const COLS = 50;
const CELL_SIZE = canvas.width / COLS;
let grid = [];

function drawGrid(grid) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      ctx.beginPath();
      ctx.rect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      ctx.fillStyle = grid[row][col] ? 'black' : 'white';
      ctx.fill();
      ctx.stroke();
    }
  }
}

canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const col = Math.floor(x / CELL_SIZE);
  const row = Math.floor(y / CELL_SIZE);
  ws.send(JSON.stringify({ type: 'toggle', row, col }));
});

startButton.addEventListener('click', () => {
  ws.send(JSON.stringify({ type: 'start' }));
});

pauseButton.addEventListener('click', () => {
  ws.send(JSON.stringify({ type: 'pause' }));
});

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'update') {
    grid = data.grid;
    drawGrid(grid);
  }
};

ws.onopen = () => {
  console.log('WebSocket connection established');
};

ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};

ws.onclose = () => {
  console.log('WebSocket connection closed');
};