# 練習問題 15 章 15.11-15

## 問題 15.11-15.1 💻🖋️

[15.1-3.1](../ch15.01-03/ex01/) で ToDo 管理アプリケーションを作成したが、ここではこれをサーバ/クライアント型の構成に変更する。
サーバ側はあらかじめ用意してあるので、クライアント側を作成するのが課題となる。

サーバを以下のコマンドで実行し、http://localhost:3000/ にアクセスすると `contents/index.html` のコンテンツをロードすることができる。

```sh
node ex01/server.js
```

このサーバは同じホストの同じポートに以下の仕様の HTTP API を公開している。
リクエスト/レスポンスともに、ボティの Content-Type は `application/json; charset=UTF-8` である。

**オブジェクト仕様**

`Task`: 以下の属性を持つオブジェクトであり、ToDo リストの各項目に該当する

- `id` (`number`): タスクを識別する ID
- `name` (`string`): タスク名
- `status`: (`"active" | "completed"`): タスクの状態

**API 仕様**

タスクの一覧を取得する

- メソッド: `GET`
- パス: `/api/tasks`
- 成功レスポンス
  - ステータスコード: `200`
  - ボディ: 以下の属性を持つオブジェクト
    - `items` (`Task[]`): 現在保持されているタスクの一覧

タスクの ID を指定して取得する

- メソッド: `GET`
- パス: `/api/tasks/{id}`
- 成功レスポンス
  - ステータスコード: `200`
  - ボディ: `Task` オブジェクト

タスクを新規作成する

- メソッド: `POST`
- パス: `/api/tasks`
- リクエスト
  - ボティ: `Task` オブジェクト
    - `name` 属性のみ必要
- 成功レスポンス
  - ステータスコード: `201`
  - ボディ: `Task` オブジェクト
    - `status` の値は `active` である

タスクを一部更新する

- メソッド: `PATCH`
- パス: `/api/tasks/{id}`
- リクエスト
  - ボティ: `Task` オブジェクト
    - ただし、`Task` オブジェクトの `id` 以外の属性の内、更新対象の属性のみがあれば良い
    - リクエストボティに存在しない属性は元の値を維持する
- 成功レスポンス
  - ステータスコード: `200`
  - ボディ: 更新後の `Task` オブジェクト

タスクを削除する

- メソッド: `DELETE`
- パス: `/api/tasks/{id}`
- 成功レスポンス
  - ステータスコード: `204`

なお、上記の API はエラー発生時には以下のレスポンスを返す

- エラーレスポンス
  - ステータスコード: `400` - `499`
  - ボディ: 以下の属性を持つオブジェクト
    - `message` (`string`): エラーメッセージ

**問題**

1. `contents/index.js` を変更し、上記の API を `fetch`を使って呼び出すことで、ToDo リストの状態をクライアントではなくサーバ側で管理する ToDo アプリケーションを完成させなさい。ただし index.html ファイルは編集してはいけない。サーバからエラーレスポンスが返却されたときは、ToDo リストの表示を更新させずエラーの内容を `alert` で表示する。
2. このサーバでは Cookie を使ってクライアントのセッションを識別し、タスク一覧をセッションごとに分離して管理する簡易的な認証/認可を行っている。サーバが設定している Cookie の値は `sid=<セッションに一意に割り当てた ID>; SameSite=Lax; Path=/; HttpOnly;` である。ToDo アプリでいくつかのタスクを作成した後、以下に挙げる操作を実施したとき、それぞれどのような結果になるか記載し、その理由を説明しなさい。
   - index.js で`document.cookie` プロパティを `console.log`で表示する
   - ブラウザの開発者コンソールで http://localhost:3000/ の Cookie を表示する
   - ToDo アプリのタブをリロードする
   - 同一ブラウザの異なるタブやウィンドウで http://localhost:3000/ を開いて ToDo リストの状態を確認する
   - シークレットウィンドウや異なるブラウザで http://localhost:3000/ を開いて ToDo リストの状態を確認する
   - http://127.0.0.1:3000/ を開いて ToDo リストの状態を確認する

**出題範囲: 15.11.1, 15.12.2**