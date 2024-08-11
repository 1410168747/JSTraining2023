以下のコマンドを実行すると index.html および index.js の内容を元に style.css ファイルが作成される。

```sh
> npx tailwindcss -i ./ex02/input.css -o ./ex02/style.css
```

HTML または JavaScript を変更した後は上記のコマンドを必ず実行し style.css を更新すること。

# 練習問題 15 章 15.4-10

## 問題 15.4-10.2 🖋️💻

昨今では CSS を 1 から自分で書くことは少なく、何らかのフレームワークを利用することが一般的である。
この問題では 2024 年現在流行している [Tailwind CSS](https://tailwindcss.com/) を利用する。

1. [Tailwind CSS](https://tailwindcss.com/) がどういったフレームワークか調べなさい。
2. [ex02](ex02) の index.html および index.js を Tailwind CSS を使うように書き換えなさい。ChatGPT を使って [ex02/README](ex02) を参考に style.css を生成しなさい (HTML, JavaScript, CSS を解答として提出すること)。

**ヒント**: ChatGPT のプロンプトの例は以下:

````
以下の HTML および JavaScript は ToDo アプリのソースコードです。
Tailwind CSS を使う前提で HTML と JavaScript のコードを書き換えて見栄えを良くして下さい。
注意: HTML と JavaScript は1つのファイルにせず分けて出力して下さい。

```html
{ここに index.html の内容を貼り付ける}
```

```js
{ここに index.js の内容を貼り付ける}
```
````

**出題範囲**: 15.4
