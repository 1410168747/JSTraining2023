# 練習問題 15 章 15.1-3

## 問題 15.1-3.1 💻🖋️🧪

これから 15.1 から 15.3 で学んだ知識を使って以下のような簡単な ToDo 管理アプリケーションを作りなさい。

![](./images/todo.gif)

このアプリケーションを利用すると以下のような HTML ドキュメントがブラウザに表示されることが期待されます。

```html
<!doctype html>
<html lang="ja">
  <head>
    <title>Simple ToDo</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <script type="module" src="/ch15.01-03/ex01/index.js"></script>
  </head>
  <body>
    <form id="new-todo-form">
      <input type="text" id="new-todo" placeholder="What needs to be done?" />
      <button type="submit">Add</button>
    </form>

    <ul id="todo-list">
      <li>
        <div>
          <input type="checkbox" />
          <label style="text-decoration-line: none">歓迎会会費徴収</label>
          <button>❌</button>
        </div>
      </li>
      <li>
        <div>
          <input type="checkbox" checked />
          <label style="text-decoration-line: line-through">交通費精算</label>
          <button>❌</button>
        </div>
      </li>
    </ul>
  </body>
</html>
```

問題:

1. index.js を変更し ToDo アプリケーションを完成させなさい。仕様に関してはテストコードを参照しなさい。ただし index.html ファイルは編集してはいけません。
2. index.html ファイル内の script タグから `type="module"` 属性を削除した場合、期待通り動作させるにはどうすべきか答えなさい。

**出題範囲 15.1-3**
