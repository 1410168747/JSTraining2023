const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
const loadingOverlay = document.querySelector("#loading-overlay");
const DELAY = 1000; // リトライ用の基準デレイ

function showLoading() {
  loadingOverlay.style.display = 'flex';
}

function hideLoading() {
  loadingOverlay.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", async () => {
  console.log(`DOMContentLoaded: ${document.cookie ?? "empty"}`);
  await fetchTasks();
});

async function fetchTasks() {
  await safeFetch('/api/tasks', {
    method: 'GET',
    timeout: 3000,
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  input.value = "";

  const newTask = await safeFetch('/api/tasks', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ name: todo }),
  });

  if (newTask) {
    appendToDoItem(newTask); // 新しいタスクをリストに追加
  } else {
    alert("タスクの追加に失敗しました。"); // エラーメッセージを表示
  }
});

async function safeFetch(url, options) {
  showLoading();

  return new Promise((resolve) => {
    retryWithExponentialBackoff(async () => {
      try {
        const controller = new AbortController();
        const signal = controller.signal;
        const timeoutId = setTimeout(() => {
          controller.abort();
          alert("リクエストがタイムアウトしました。");
          hideLoading();
          resolve(null); // null を返してリトライを中止
        }, options.timeout || 3000);

        const response = await fetch(url, { ...options, signal });
        clearTimeout(timeoutId);

        if (!response.ok) {
          if (response.status >= 500) {
            throw new Error(`サーバエラー: ${response.statusText}`);
          }
          throw new Error(`エラー: ${response.statusText}`);
        }

        const data = await response.json();
        hideLoading();
        resolve(data); // データを返す
        return data;
      } catch (error) {
        console.error(error);
        return null; // リトライに進む
      }
    }, 5, resolve);
  });
}

function appendToDoItem(task) {
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = task.status === "completed";

  toggle.addEventListener("change", async () => {
    try {
      const response = await safeFetch(`/api/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ status: toggle.checked ? "completed" : "active" }),
      });

      if (response) {
        label.style.textDecorationLine = response.status === "completed" ? "line-through" : "none";
      }
    } catch (error) {
      alert(error.message);
    }
  });

  const destroy = document.createElement("button");
  destroy.textContent = "Delete";

  destroy.addEventListener("click", async () => {
    try {
      const response = await safeFetch(`/api/tasks/${task.id}`, { method: "DELETE" });
      if (response) {
        elem.remove();
      }
    } catch (error) {
      alert(error.message);
    }
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);

  list.prepend(elem);
}

function retryWithExponentialBackoff(func, maxRetry, callback) {
  let retry = 0;

  const retryFunc = async () => {
    const result = await func();

    if (result) {
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