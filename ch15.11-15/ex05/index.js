const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

let db;

const request = indexedDB.open("TodoDB", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;
  const objectStore = db.createObjectStore("todos", { keyPath: "id", autoIncrement: true });
  objectStore.createIndex("text", "text", { unique: false });
  objectStore.createIndex("completed", "completed", { unique: false });
};

request.onsuccess = function (event) {
  db = event.target.result;
  renderTodos(); // DBが利用可能になったらToDoを描画する
};

request.onerror = function (event) {
  console.error("IndexedDB error: ", event.target.error);
};

function saveTodoToIndexedDB(todo) {
  const transaction = db.transaction("todos", "readwrite");
  const objectStore = transaction.objectStore("todos");
  objectStore.add(todo);

  transaction.oncomplete = function () {
    renderTodos(); // ToDoリストを再描画
  };

  transaction.onerror = function (event) {
    console.error("Error saving todo: ", event.target.error);
  };
}

function getTodosFromIndexedDB(callback) {
  const transaction = db.transaction("todos", "readonly");
  const objectStore = transaction.objectStore("todos");
  const request = objectStore.getAll();

  request.onsuccess = function (event) {
    callback(event.target.result);
  };

  request.onerror = function (event) {
    console.error("Error fetching todos: ", event.target.error);
  };
}

function createToDoElement(todo) {
  const elem = document.createElement("li");
  const div = document.createElement("div");

  const label = document.createElement("label");
  label.textContent = todo.text;
  label.style.textDecorationLine = todo.completed ? "line-through" : "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = todo.completed;
  toggle.addEventListener("change", () => {
    updateTodoCompletion(todo.id, toggle.checked);
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";
  destroy.addEventListener("click", () => {
    deleteTodoFromIndexedDB(todo.id);
  });

  div.appendChild(toggle);
  div.appendChild(label);
  div.appendChild(destroy);
  elem.appendChild(div);
  return elem;
}

function renderTodos() {
  getTodosFromIndexedDB((todos) => {
    list.innerHTML = ''; // 既存のリストをクリア
    todos.forEach(todo => {
      list.appendChild(createToDoElement(todo));
    });
  });
}

function updateTodoCompletion(id, completed) {
  const transaction = db.transaction("todos", "readwrite");
  const objectStore = transaction.objectStore("todos");
  const request = objectStore.get(id);

  request.onsuccess = function (event) {
    const todo = event.target.result;
    todo.completed = completed;
    objectStore.put(todo);
  };

  transaction.onerror = function (event) {
    console.error("Error updating todo: ", event.target.error);
  };
}

function deleteTodoFromIndexedDB(id) {
  const transaction = db.transaction("todos", "readwrite");
  const objectStore = transaction.objectStore("todos");
  const request = objectStore.delete(id);

  request.onsuccess = function () {
    renderTodos(); // ToDoリストを再描画
  };

  request.onerror = function (event) {
    console.error("Error deleting todo: ", event.target.error);
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // ページの再読み込みを防ぐ

  if (input.value.trim() === "") {
    return; // 空のToDoは無視する
  }

  const todo = {
    text: input.value.trim(),
    completed: false
  };

  input.value = ""; // inputフィールドをクリア
  saveTodoToIndexedDB(todo); // IndexedDBに新しいToDoを追加
});