class Tile {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    static *tiles(width, height, numRows, numCols) {
        let columnWidth = Math.ceil(width / numCols);
        let rowHeight = Math.ceil(height / numRows);
        for (let row = 0; row < numRows; row++) {
            let tileHeight = (row < numRows - 1) ? rowHeight : height - rowHeight * (numRows - 1);
            for (let col = 0; col < numCols; col++) {
                let tileWidth = (col < numCols - 1) ? columnWidth : width - columnWidth * (numCols - 1);
                yield new Tile(col * columnWidth, row * rowHeight, tileWidth, tileHeight);
            }
        }
    }
}

class WorkerPool {
    constructor(numWorkers, scriptURL) {
        this.workers = [];
        this.idleWorkers = [];
        this.workQueue = [];
        this.workerMap = new Map();

        for (let i = 0; i < numWorkers; i++) {
            let worker = new Worker(scriptURL);
            worker.onmessage = (e) => {
                this.workerMap.get(worker)(e);
                this.workerMap.delete(worker);
                if (this.workQueue.length > 0) {
                    let [work, callback] = this.workQueue.shift();
                    this.workerMap.set(worker, callback);
                    worker.postMessage(work);
                } else {
                    this.idleWorkers.push(worker);
                }
            };
            this.workers.push(worker);
            this.idleWorkers.push(worker);
        }
    }

    addWork(work) {
        return new Promise((resolve, reject) => {
            const callback = (e) => resolve(e.data);
            if (this.idleWorkers.length > 0) {
                let worker = this.idleWorkers.pop();
                this.workerMap.set(worker, callback);
                worker.postMessage(work);
            } else {
                this.workQueue.push([work, callback]);
            }
        });
    }
}

class PageState {
    static initialState() {
        return { depth: 0 };
    }

    static fromURL(url) {
        let u = new URL(url);
        let depth = parseInt(u.searchParams.get("depth"));
        return isNaN(depth) ? null : { depth: depth };
    }

    toURL() {
        let u = new URL(window.location);
        u.searchParams.set("depth", this.depth);
        return u.href;
    }
}

const ROWS = 3, COLS = 4, NUMWORKERS = navigator.hardwareConcurrency || 2;

class SierpinskiCanvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.workerPool = new WorkerPool(NUMWORKERS, "sierpinskiWorker.js");

        this.tiles = null;
        this.pendingRender = null;
        this.wantsRerender = false;
        this.resizeTimer = null;

        this.canvas.addEventListener("pointerdown", e => this.handlePointer(e));
        window.addEventListener("keydown", e => this.handleKey(e));
        window.addEventListener("resize", e => this.handleResize(e));
        window.addEventListener("popstate", e => this.setState(e.state, false));

        this.state = PageState.fromURL(window.location) || PageState.initialState();
        history.replaceState(this.state, "", this.state.toURL());

        this.setSize();
        this.render();
    }

    setSize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        this.tiles = [...Tile.tiles(this.width, this.height, ROWS, COLS)];
    }

    setState(f, save = true) {
        if (typeof f === "function") {
            f(this.state);
        } else {
            for (let property in f) {
                this.state[property] = f[property];
            }
        }
        this.render();
        if (save) {
            history.pushState(this.state, "", this.state.toURL());
        }
    }

    render() {
        if (this.pendingRender) {
            this.wantsRerender = true;
            return;
        }

        let { depth } = this.state;
        let promises = this.tiles.map(tile => this.workerPool.addWork({
            tile: tile,
            depth: depth
        }));

        this.pendingRender = Promise.all(promises).then(responses => {
            for (let r of responses) {
                this.context.putImageData(r.imageData, r.tile.x, r.tile.y);
            }
        })
            .catch((reason) => {
                console.error("Promise rejected in render():", reason);
            })
            .finally(() => {
                this.pendingRender = null;
                if (this.wantsRerender) {
                    this.wantsRerender = false;
                    this.render();
                }
            });
    }

    handleResize(event) {
        if (this.resizeTimer) clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
            this.resizeTimer = null;
            this.setSize();
            this.render();
        }, 200);
    }

    handleKey(event) {
        switch (event.key) {
            case "Escape":
                this.setState(PageState.initialState());
                break;
            case "+":
                this.setState(s => s.depth++);
                break;
            case "-":
                this.setState(s => s.depth = Math.max(0, s.depth - 1));
                break;
        }
    }

    handlePointer(event) {
        // この関数は省略しますが、必要に応じてパンやズームの処理を追加してください。
    }
}

let canvas = document.getElementById("canvas");
canvas.style.width = "100%";
canvas.style.height = "100%";
new SierpinskiCanvas(canvas);