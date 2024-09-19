const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

let db;
const channel = new BroadcastChannel('todo-updates');  // BroadcastChannelオブジェクトの作成

const request = indexedDB.open("TodoDB", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;
  const objectStore = db.createObjectStore("todos", { keyPath: "id", autoIncrement: true });
  objectStore.createIndex("text", "text", { unique: false });
  objectStore.createIndex("completed", "completed", { unique: false });
};

request.onsuccess = function (event) {
  db = event.target.result;
  renderTodo(); // DBが利用可能になったらToDoを描画する
};

request.onerror = function (event) {
  alert(`IndexedDB error: ${event.target.error}`);
};

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
  saveToDo(todo); // IndexedDBに新しいToDoを追加
});

function loadToDo(callback) {
  const transaction = db.transaction("todos", "readonly");
  const objectStore = transaction.objectStore("todos");
  const request = objectStore.getAll();

  request.onsuccess = function (event) {
    callback(event.target.result);
  };

  request.onerror = function (event) {
    alert(`Error fetching todos: ${event.target.error}`);
  };
}

function saveToDo(todo) {
  const transaction = db.transaction("todos", "readwrite");
  const objectStore = transaction.objectStore("todos");
  objectStore.add(todo);

  transaction.oncomplete = function () {
    renderTodo(); // ToDoリストを再描画
    channel.postMessage({ type: 'add', todo: todo });
  };

  transaction.onerror = function (event) {
    console.error("Error saving todo: ", event.target.error);
  };
}

function appendToDoItem(task) {
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.text;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = task.completed;

  toggle.addEventListener("change", () => {
    updateToDo({ id: task.id, completed: toggle.checked });
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";
  destroy.addEventListener("click", () => {
    deleteToDo(task.id);
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);

  return elem;
}

function renderTodo() {
  loadToDo((todos) => {
    list.innerHTML = ''; // 既存のリストをクリア
    todos.forEach(todo => {
      list.prepend(appendToDoItem(todo));
    });
  });
}

function updateToDo(task) {
  const transaction = db.transaction("todos", "readwrite");
  const objectStore = transaction.objectStore("todos");
  const request = objectStore.get(task.id);

  request.onsuccess = function (event) {
    const todo = event.target.result;
    objectStore.put({ ...todo, ...task });

    transaction.commit = function () {
      renderTodo();
      channel.postMessage({ type: 'update', todo: { ...todo, ...task } });
    };
  };

  transaction.onerror = function (event) {
    alert(`Error updating todo: ${event.target.error}`);
  };
}

function deleteToDo(id) {
  const transaction = db.transaction("todos", "readwrite");
  const objectStore = transaction.objectStore("todos");
  const request = objectStore.delete(id);

  request.onsuccess = function () {
    renderTodo();
    channel.postMessage({ type: 'delete', id: id });
  };

  request.onerror = function (event) {
    alert(`Error deleting todo: ${event.target.error}`);
  };
}

// BroadcastChannelを使ってタブ間メッセージを受信する
channel.onmessage = (event) => {
  if (event.data.type === 'add' || event.data.type === 'update' || event.data.type === 'delete') {
    renderTodo();
  }
};