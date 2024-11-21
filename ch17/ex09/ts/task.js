// Userオブジェクトであることを判定する
function isUserObject(obj) {
    // 型述語(戻り値での型ガード)。
    // 型術後: 戻り値がtrueの場合、objはUser型であることをコンパイラに伝える
    return (typeof obj === "object" &&
        typeof obj["id"] === "number" &&
        typeof obj["name"] === "string");
}
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        // Tはジェネリック型パラメータ
        this._tasks = [];
    }
    // タスクを追加する
    TaskManager.prototype.add = function (task) {
        this._tasks.push(task);
    };
    // タスクを完了にする
    // Userオブジェクトを指定した場合はそのUserのタスクを全て完了にする
    // 文字列を指定した場合は、そのタイトルのタスクを全て完了にする
    TaskManager.prototype.completeTask = function (target) {
        if (isUserObject(target)) {
            this._tasks
                .filter(function (t) { return t.user === target; })
                .forEach(function (t) { return (t.completed = true); });
        }
        else {
            this._tasks
                .filter(function (t) { return t.title === target; })
                .forEach(function (t) { return (t.completed = true); });
        }
    };
    // 引数の関数にマッチするタスクを返す
    // 引数を省略した場合はすべてのタスクを返す
    TaskManager.prototype.getTasks = function (predicate) {
        if (predicate === undefined) {
            return this._tasks;
        }
        else {
            return this._tasks.filter(predicate);
        }
    };
    return TaskManager;
}());
export { TaskManager };
// priority="low"または完了済のタスクを判定する
export function isLowOrCompletedTask(priorityTask) {
    return priorityTask.priority === "low" || priorityTask.completed;
}
// 判定関数の否定結果を返す関数を生成する
export function not(f) {
    return function (arg) { return !f(arg); };
}
