console.log("hello world");
const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

function getTodosFromLocalStorage() {
  try {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (e) {
    alert(`localStorage is not accessible: ${e}`);
    return [];
  }
}

// ローカルストレージにToDoリストを保存する関数
function saveTodosToLocalStorage(todos) {
  try {
    localStorage.setItem('todos', JSON.stringify(todos));
    // storageイベントをトリガーするために、他のタブに通知を行う
    window.dispatchEvent(new Event('storageUpdate'));
  } catch (e) {
    alert(`localStorage is not accessible: ${e}`);
  }
}

function createToDoElement(text, completed) {
  const elem = document.createElement("li");
  const div = document.createElement("div");

  const label = document.createElement("label");
  label.textContent = text;
  label.style.textDecorationLine = completed ? "line-through" : "none";

  const toggle = document.createElement("input");
  // TODO: toggle が変化 (change) した際に label.style.textDecorationLine を変更しなさい
  toggle.type = "checkbox"; // toggle をチェックボックスとして設定
  toggle.checked = completed;
  toggle.addEventListener("change", () => {
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
    // ローカルストレージのToDoリストを更新
    const todos = getTodosFromLocalStorage();
    const index = todos.findIndex(t => t.text === text);
    todos[index].completed = toggle.checked;
    saveTodosToLocalStorage(todos);
  });

  const destroy = document.createElement("button");
  // TODO: destroy がクリック (click) された場合に elem を削除しなさい
  destroy.textContent = "❌"; // ボタンに表示するテキスト
  destroy.addEventListener("click", () => {
    list.removeChild(elem);
    // ローカルストレージのToDoリストから削除
    const todos = getTodosFromLocalStorage();
    const index = todos.findIndex(t => t.text === text);
    todos.splice(index, 1);
    saveTodosToLocalStorage(todos);
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  // elem に toggle, label, destroy を追加
  div.appendChild(toggle);
  div.appendChild(label);
  div.appendChild(destroy);
  elem.appendChild(div);
  return elem;
}

// 初期表示時にローカルストレージからToDoリストを取得し、画面に表示
function renderTodos() {
  console.log("renderTodos is called")
  // 初期表示時にローカルストレージからToDoリストを取得し、画面に表示
  const todos = getTodosFromLocalStorage();
  list.innerHTML = ''; // 既存のリストをクリア
  todos.forEach(todo => {
    list.appendChild(createTodoElement(todo.text, todo.completed));
  });
}

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

  // ここから #todo-list に追加する要素を構築する
  const elem = createToDoElement(todo);

  // ローカルストレージに保存されているToDoリストを取得し、新しいToDoを追加
  const todos = getTodosFromLocalStorage();
  todos.push({ text: todo, completed: false });
  saveTodosToLocalStorage(todos);

  list.prepend(createTodoElement(todo, false));
});

// storageイベントをリッスンして、他のタブでの変更を反映
window.addEventListener('storageUpdate', renderTodos);