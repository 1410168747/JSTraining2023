# 練習問題 15 章 15.1-3

## 問題 15.1-3.11 💻

以下のhtmlを開き、ボタン押下時のコンソール出力結果を確認しなさい。<br>
次にcaptureの値を変更しdivとbuttonのコンソール出力順序が逆になることを確認しなさい。<br>
更にscript中のコメント1.～4.の指示に従いカスタムイベントの関連コードを完成させなさい。<br>
最後にブラウザのデバッグツール(Chromeの場合はDeveloper ToolのEvent Listners)で、btn等に登録されているイベントをそれぞれ確認しなさい。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EVENT propagation, dispatch</title>
    <script type="module">
      const div = document.querySelector("#div");
      const btn = document.querySelector("#btn");
      div.addEventListener(
        "click",
        () => {
          console.log("div");
        },
        { capture: true }
      );
      btn.addEventListener("click", () => {
        console.log("button");
      });

      class RandomEventTarget extends EventTarget {
        constructor() {
          super();
        }

        trigger() {
          const randomNumber = new CustomEvent("random", {
            detail: Math.random(),
          });
          this.dispatchEvent(randomNumber);
        }
      }

      const randomEventTarget = new RandomEventTarget();

      // 1. htmlのpタグ要素を生成しなさい。また、ボタン要素の直後の位置にpタグ要素を配置しなさい。

      randomEventTarget.addEventListener("random", (e) => {
        // 2. 生成済みのpタグ要素のテキストに、イベントの保持する乱数値を代入しなさい。
      });

      // 3. ボタンにイベントリスナを追加し、ボタン押下するごとに乱数値を変更しなさい。変更にはtriggerを利用しなさい。

      // 4. RandomEventTargetにイベントリスナを追加し、ページ読み込み時に乱数値を表示しなさい。変更にはtriggerを利用しなさい。
    </script>
  </head>
  <body>
    <div id="div">
      <button id="btn">ボタン</button>
    </div>
  </body>
</html>
```

**出題範囲 15.2.1/15.2.4**
