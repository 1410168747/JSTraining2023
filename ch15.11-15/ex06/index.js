const KEY = "todos";
const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

renderTodos();

form.addEventListener("submit", (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  e.preventDefault(); // 解答: ページの再読み込みを防ぐため、form のデフォルトの submit イベントをキャンセルします

  // 両端からホワイトスペースを取り除いた文字列を取得する
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  // new-todo の中身は空にする
  input.value = "";

  // セッションストレージに保存されているToDoリストを取得し、新しいToDoを追加
  const newToDo = { text: todo, completed: false };
  saveToDo([...loadToDo(), newToDo]);
  list.prepend(createToDoElement(newToDo));
});

function loadToDo() {
  try {
    const storedTodos = sessionStorage.getItem(KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (e) {
    alert(`localStorage is not accessible: ${e}`);
    return [];
  }
}

// セッションストレージにToDoリストを保存する関数
function saveToDo(target) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(target));
    // storageイベントをトリガーするために、他のタブに通知は不要
    // window.dispatchEvent(new Event('storageUpdate'));
  } catch (e) {
    alert(`localStorage is not accessible: ${e}`);
  }
}

function createToDoElement(task) {
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.text;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = task.completed;

  toggle.addEventListener("change", () => {
    const todos = loadToDo();
    const index = todos.findIndex(t => t.text === task.text);
    todos[index].completed = toggle.checked;
    saveToDo(todos);
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
  });

  const destroy = document.createElement("button");
  // TODO: destroy がクリック (click) された場合に elem を削除しなさい
  destroy.textContent = "❌"; // ボタンに表示するテキスト
  destroy.addEventListener("click", () => {
    list.removeChild(elem);
    // ローカルストレージのToDoリストから削除
    const todos = loadToDo();
    const index = todos.findIndex(t => t.text === task.text);
    todos.splice(index, 1);
    saveToDo(todos);
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  // elem に toggle, label, destroy を追加
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);

  return elem;
}

// 初期表示時にセッションストレージからToDoリストを取得し、画面に表示
function renderTodos() {
  const todos = loadToDo();
  list.innerHTML = ''; // 既存のリストをクリア
  todos.forEach(todo => {
    list.prepend(createToDoElement(todo));
  });
}

// sessionStorage のスコープは単一のタブに限られているため、他のタブでの変更は反映されない
// window.addEventListener('storageUpdate', renderTodos);