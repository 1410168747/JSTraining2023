const URL = "http://localhost:3001"; // APIの基本URLを定義
const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

document.addEventListener("DOMContentLoaded", async () => {

  console.log(`DOMContentLoaded: ${document.cookie ?? "empty"}`);// サーバー側のHttpOnly属性によりこのログは表示されない。

  apiCallHandler(`${URL}/api/tasks`, "GET", null, data => {
    data.items.forEach(task => appendToDoItem(task));
  });
});

form.addEventListener("submit", async (e) => {

  e.preventDefault(); // フォームはデフォルトで、入力データをaction属性の値(なければ現在のページ)に送る。
  // 送信動作が行われるとページがリロードされるため、preventDefault()でデフォルトの送信動作をキャンセルする。

  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo フォームの中身を空にする
  input.value = "";
  apiCallHandler(`${URL}/api/tasks`, "POST", { name: todo }, newTask => {
    appendToDoItem(newTask);
  });
});

// タスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = task.status === "completed";

  toggle.addEventListener("change", () => {
    apiCallHandler(`${URL}/api/tasks/${task.id}`, "PATCH", {
      status: toggle.checked ? "completed" : "active"
    }, updatedTask => {
      label.style.textDecorationLine = updatedTask.status === "completed" ? "line-through" : "none";
    });
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌️";

  destroy.addEventListener("click", () => {
    apiCallHandler(`${URL}/api/tasks/${task.id}`, "DELETE", null, () => {
      elem.remove(); // タスクが削除されたら要素を削除
    });
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);

  list.prepend(elem);
}

async function apiCallHandler(url, method, body, onSuccess) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    credentials: 'include' //クレデンシャルを含める指定
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      // 200番台以外の場合はここでエラーを投げてcatchに移行
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    //レスポンスに対して何がしたいかを差し替えるようにした
    if (onSuccess) {
      onSuccess(data);
    }
  } catch (error) {
    // fetchが失敗した場合
    // fetchが成功したがステータスコードが200番台以外の場合
    // onSuccessがエラーを返した場合
    alert(error.message);
  }
}