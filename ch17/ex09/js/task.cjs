"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskManager = void 0;
exports.isLowOrCompletedTask = isLowOrCompletedTask;
exports.not = not;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// User型を定義
// Userオブジェクトであることを判定する
function isUserObject(obj) {
  return _typeof(obj) === "object" && typeof obj["id"] === "number" && typeof obj["name"] === "string";
}
var TaskManager = exports.TaskManager = /*#__PURE__*/function () {
  function TaskManager() {
    _classCallCheck(this, TaskManager);
    this._tasks = [];
  }

  // タスクを追加する
  return _createClass(TaskManager, [{
    key: "add",
    value: function add(task) {
      this._tasks.push(task);
    }

    // タスクを完了にする
    // Userオブジェクトを指定した場合はそのUserのタスクを全て完了にする
    // 文字列を指定した場合は、そのタイトルのタスクを全て完了にする
  }, {
    key: "completeTask",
    value: function completeTask(target) {
      if (isUserObject(target)) {
        this._tasks.filter(function (t) {
          return t.user === target;
        }).forEach(function (t) {
          return t.completed = true;
        });
      } else {
        this._tasks.filter(function (t) {
          return t.title === target;
        }).forEach(function (t) {
          return t.completed = true;
        });
      }
    }

    // 引数の関数にマッチするタスクを返す
    // 引数を省略した場合はすべてのタスクを返す
  }, {
    key: "getTasks",
    value: function getTasks(predicate) {
      if (predicate === undefined) {
        return this._tasks;
      } else {
        return this._tasks.filter(predicate);
      }
    }
  }]);
}(); // priority="low"または完了済のタスクを判定する
function isLowOrCompletedTask(priorityTask) {
  return priorityTask.priority === "low" || priorityTask.completed;
}

// 判定関数の否定結果を返す関数を生成する
function not(f) {
  return function (arg) {
    return !f(arg);
  };
}
