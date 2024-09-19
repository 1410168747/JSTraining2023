const baseUrl = "http://localhost:3001"; // APIの基本URLを定義

const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

document.addEventListener("DOMContentLoaded", async () => {

  console.log(`DOMContentLoaded: ${document.cookie ?? "empty"}`);// サーバー側のHttpOnly属性によりこのログは表示されない。

  // TODO: ここで API を呼び出してタスク一覧を取得し、
  // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
  try {
    const response = await fetch(`${baseUrl}/api/tasks`, {
      method: 'GET',
      credentials: 'include', // クッキーを送信するために必要
    });
    if (!response.ok) {
      // 通信が成功してかつステータスコードが200番台以外の場合
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    data.items.forEach(task => appendToDoItem(task));
  } catch (error) {
    alert(error.message); // API呼び出しでエラーがあった場合にアラートを表示
  }
});

form.addEventListener("submit", async (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  e.preventDefault(); // フォームが送信された時のページリロードを防ぐ

  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo の中身は空にする
  input.value = "";

  // TODO: ここで API を呼び出して新しいタスクを作成し
  // 成功したら作成したタスクを appendToDoElement で ToDo リストの要素として追加しなさい
  try {
    const response = await fetch(`${baseUrl}/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ name: todo }),
      credentials: 'include', // クッキーを送信するために必要
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const newTask = await response.json();
    appendToDoItem(newTask); // 新しく作成したタスクを追加
  } catch (error) {
    alert(error.message); // API呼び出しでエラーがあった場合にアラートを表示
  }
});

// API から取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  // TODO: toggle が変化 (change) した際に API を呼び出してタスクの状態を更新し
  // 成功したら label.style.textDecorationLine を変更しなさい
  toggle.type = "checkbox";
  toggle.checked = task.status === "completed";
  toggle.addEventListener("change", async () => {
    try {
      const response = await fetch(`${baseUrl}/api/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ status: toggle.checked ? "completed" : "active" }),
        credentials: 'include', // クッキーを送信するために必要
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const updatedTask = await response.json();
      label.style.textDecorationLine = updatedTask.status === "completed" ? "line-through" : "none";
    } catch (error) {
      alert(error.message); // API呼び出しでエラーがあった場合にアラートを表示
    }
  });


  const destroy = document.createElement("button");
  destroy.textContent = "Delete";
  // TODO: destroy がクリック (click) された場合に API を呼び出してタスクを削除し
  // 成功したら elem を削除しなさい
  destroy.addEventListener("click", async () => {
    try {
      const response = await fetch(`${baseUrl}/api/tasks/${task.id}`, {
        method: "DELETE",
        credentials: 'include', // クッキーを送信するために必要
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      elem.remove(); // タスクが削除されたら要素を削除
    } catch (error) {
      alert(error.message); // API呼び出しでエラーがあった場合にアラートを表示
    }
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);

  list.prepend(elem);
}