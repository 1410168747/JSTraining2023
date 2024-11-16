// Userオブジェクトであることを判定する
function isUserObject(obj) {
    // 型述語(戻り値での型ガード)。
    // 戻り値がtrueの場合、objはUser型であることをコンパイラに伝える
    return (typeof obj === "object" &&
        typeof obj["id"] === "number" &&
        typeof obj["name"] === "string");
}
export class TaskManager {
    constructor() {
        // Tはジェネリック型パラメータ
        this._tasks = [];
    }
    // タスクを追加する
    add(task) {
        this._tasks.push(task);
    }
    // タスクを完了にする
    // Userオブジェクトを指定した場合はそのUserのタスクを全て完了にする
    // 文字列を指定した場合は、そのタイトルのタスクを全て完了にする
    completeTask(target) {
        if (isUserObject(target)) {
            this._tasks
                .filter((t) => t.user === target)
                .forEach((t) => (t.completed = true));
        }
        else {
            this._tasks
                .filter((t) => t.title === target)
                .forEach((t) => (t.completed = true));
        }
    }
    // 引数の関数にマッチするタスクを返す
    // 引数を省略した場合はすべてのタスクを返す
    getTasks(predicate) {
        if (predicate === undefined) {
            return this._tasks;
        }
        else {
            return this._tasks.filter(predicate);
        }
    }
}
// priority="low"または完了済のタスクを判定する
export function isLowOrCompletedTask(priorityTask) {
    return priorityTask.priority === "low" || priorityTask.completed;
}
// 判定関数の否定結果を返す関数を生成する
export function not(f) {
    return (arg) => !f(arg);
}
