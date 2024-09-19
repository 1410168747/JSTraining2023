const TIMEOUT = 3000;
const INTERNAL_SERVER_ERROR = 500;
const MAX_RETRIES = 16; // リトライの最大回数
const DELAY = 100; // リトライまでの待ち時間

const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
const loadingOverlay = document.querySelector("#loading-overlay");

document.addEventListener("DOMContentLoaded", async () => {

  console.log(`DOMContentLoaded: ${document.cookie ?? "empty"}`);// サーバー側のHttpOnly属性によりこのログは表示されない。

  apiCallHandler("/api/tasks", "GET", null, data => {
    data.items.forEach(task => appendToDoItem(task));
  }, TIMEOUT);
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
  apiCallHandler("/api/tasks", "POST", { name: todo }, newTask => {
    appendToDoItem(newTask);
  }, TIMEOUT);
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
    apiCallHandler(`/api/tasks/${task.id}`, "PATCH", {
      status: toggle.checked ? "completed" : "active"
    }, updatedTask => {
      label.style.textDecorationLine = updatedTask.status === "completed" ? "line-through" : "none";
    }, TIMEOUT);
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌️";

  destroy.addEventListener("click", () => {
    apiCallHandler(`/api/tasks/${task.id}`, "DELETE", null, () => {
      elem.remove(); // タスクが削除されたら要素を削除
    }, TIMEOUT);
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);

  list.prepend(elem);
}

async function apiCallHandler(url, method, body, onSuccess, timeout) {
  loadingOverlay.style.display = 'flex';
  const options = {
    method,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  //タイムアウト設定
  const controller = new AbortController(); // AbortControllerのインスタンスを作成
  const signal = controller.signal;
  const timeoutId = setTimeout(() => {
    controller.abort(); // タイムアウトに達したらリクエストを中断
  }, timeout);

  const makeFetchRequest = async () => {
    try {
      const response = await fetch(url, { ...options, signal });
      clearTimeout(timeoutId);

      if (!response.ok) {
        // 200番台以外の場合はここでエラーを投げてcatchに移行
        if (response.status === INTERNAL_SERVER_ERROR) {
          throw new Error(`InternalServerError`);
        } else {
          throw new Error(`Error: ${response.statusText}`);
        }
      }
      const data = await response.json();
      if (onSuccess) {
        onSuccess(data);
      }
      loadingOverlay.style.display = 'none';
      return true;
    } catch (error) {
      // fetchが失敗した場合
      // fetchが成功したがステータスコードが200番台以外の場合
      // onSuccessがエラーを返した場合
      if (error.name === 'AbortError') {
        alert(`timeout occured: ${timeout} ms`);
      } else if (error.message === 'InternalServerError') {
        loadingOverlay.style.display = 'none';
        return false;
      } else {
        alert(error.message);
      }
      loadingOverlay.style.display = 'none';
      return true;
    }
  };
  retryWithExponentialBackoff(makeFetchRequest, MAX_RETRIES, (success) => {
    if (!success) {
      alert('Failed to complete request after multiple retries.');
    }
  });
}

function retryWithExponentialBackoff(func, maxRetry, callback) {
  let retry = 0;
  const retryFunc = async () => {
    const result = await func();
    if (result === true) {
      callback(true);
    } else if (retry === maxRetry) {
      callback(false);
    } else {
      retry++;
      setTimeout(retryFunc, 2 ** (retry - 1) * DELAY);
    }
  };
  retryFunc();
}