const template = document.createElement("template");
template.innerHTML = `\
<style>
.completed {
  text-decoration: line-through;
}
</style>

<form id="new-todo-form">
  <input type="text" id="new-todo" placeholder="What needs to be done?" />
  <button>Add</button>
</form>
<ul id="todo-list"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.form = this.shadowRoot.querySelector("#new-todo-form");
    this.input = this.shadowRoot.querySelector("#new-todo");
    this.list = this.shadowRoot.querySelector("#todo-list");

    this.todos = [];
    this.form.addEventListener("submit", this.addTodo.bind(this));
  }

  addTodo(event) {

    event.preventDefault(); // ページの再読み込みを防ぐため

    // 両端からホワイトスペースを取り除いた文字列を取得する
    const todoText = this.input.value.trim();
    if (todoText === "") {
      return;
    }
    // ToDo項目を追加
    const todoItem = this.createTodoItem(todoText);
    this.list.prepend(todoItem);
    // 入力フィールドをクリア
    this.input.value = "";
  }

  createTodoItem(todoText) {
    const elem = document.createElement("li");
    const div = document.createElement("div");

    const label = document.createElement("label");
    label.textContent = todoText;
    label.className = ""; // 初期状態は未完了なので空文字

    const toggle = document.createElement("input");
    toggle.type = "checkbox"; // チェックボックスとして設定
    toggle.addEventListener("change", () => {
      label.className = toggle.checked ? "completed" : ""; // 完了状態を切り替え
    });

    const destroy = document.createElement("button");
    destroy.textContent = "❌";
    destroy.addEventListener("click", () => {
      elem.remove(); // elem を削除
    });

    // div に子要素を追加
    div.appendChild(toggle);
    div.appendChild(label);
    div.appendChild(destroy);
    elem.appendChild(div);

    return elem;
  }
}

customElements.define("todo-app", TodoApp);
