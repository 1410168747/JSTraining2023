const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

function getTodosFromSessionStorage() {
  try {
    const storedTodos = sessionStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (e) {
    alert(`sessionStorage is not accessible: ${e}`);
    return [];
  }
}

// セッションストレージにToDoリストを保存する関数
function saveTodosToSessionStorage(todos) {
  try {
    sessionStorage.setItem('todos', JSON.stringify(todos));
    // storageイベントをトリガーするために、他のタブに通知を行う
    window.dispatchEvent(new Event('storageUpdate'));
  } catch (e) {
    alert(`sessionStorage is not accessible: ${e}`);
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
    // セッションストレージのToDoリストを更新
    const todos = getTodosFromSessionStorage();
    const index = todos.findIndex(t => t.text === text);
    todos[index].completed = toggle.checked;
    saveTodosToSessionStorage(todos);
  });

  const destroy = document.createElement("button");
  // TODO: destroy がクリック (click) された場合に elem を削除しなさい
  destroy.textContent = "❌"; // ボタンに表示するテキスト
  destroy.addEventListener("click", () => {
    list.removeChild(elem);
    // セッションストレージのToDoリストから削除
    const todos = getTodosFromSessionStorage();
    const index = todos.findIndex(t => t.text === text);
    todos.splice(index, 1);
    saveTodosToSessionStorage(todos);
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  // elem に toggle, label, destroy を追加
  div.appendChild(toggle);
  div.appendChild(label);
  div.appendChild(destroy);
  elem.appendChild(div);
  return elem;
}

// 初期表示時にセッションストレージからToDoリストを取得し、画面に表示
function renderTodos() {
  const todos = getTodosFromSessionStorage();
  list.innerHTML = ''; // 既存のリストをクリア
  todos.forEach(todo => {
    list.prepend(createToDoElement(todo.text, todo.completed));
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

  // // ここから #todo-list に追加する要素を構築する
  // const elem = createToDoElement(todo);

  // セッションストレージに保存されているToDoリストを取得し、新しいToDoを追加
  const todos = getTodosFromSessionStorage();
  todos.push({ text: todo, completed: false });
  saveTodosToSessionStorage(todos);

  list.prepend(createToDoElement(todo, false));
});

// sessionStorage のスコープは単一のタブに限られているため、他のタブでの変更は反映されない
// window.addEventListener('storageUpdate', renderTodos);