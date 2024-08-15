const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
const template = document.querySelector("#todo-template");

// { content: "...", completed: true or false } の配列
const todos = [];

function renderTodos(todos) {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const clone = template.content.cloneNode(true);
    const li = clone.querySelector("li");
    const toggle = clone.querySelector("input");
    const label = clone.querySelector("label");
    const destroy = clone.querySelector("button");

    li.classList.toggle("completed", todo.completed);
    toggle.addEventListener("change", () => {
      todo.completed = toggle.checked;
      renderTodos(todos);
    });
    label.textContent = todo.content;
    toggle.checked = todo.completed;
    destroy.addEventListener("click", () => {
      todos.splice(index, 1);
      renderTodos(todos);
    });

    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  input.value = "";

  todos.push({ content: todo, completed: false });
  renderTodos(todos);
});

window.addEventListener("hashchange", () => {
  // ToDoのフィルタリングを行い、その結果をレンダリングする関数
  function filterAndRenderTodos() {
    const hash = window.location.hash;
    let filteredTodos;

    switch (hash) {
      case '#/active': // 'Active'タブが選択された場合
        filteredTodos = todos.filter(todo => !todo.completed);
        break;

      case '#/completed': // 'Completed'タブが選択された場合
        filteredTodos = todos.filter(todo => todo.completed);
        break;

      default: // その他の場合（'All'または何も選択されていない状態）
        filteredTodos = todos;
        break;
    }

    // フィルタリングした結果を画面に反映する
    renderTodos(filteredTodos);
  }

  // URL内のハッシュ（フラグメント）が変更された際にToDoリストを再レンダリングするイベントリスナー
  window.addEventListener("hashchange", filterAndRenderTodos);

  // ページが読み込まれた時に、現在のURLハッシュに応じて表示を更新する
  filterAndRenderTodos();
});
