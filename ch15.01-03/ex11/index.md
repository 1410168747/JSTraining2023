## 問1

> 以下のhtmlを開き、ボタン押下時のコンソール出力結果を確認しなさい。

### 回答1

ボタンを1つ押下するたびに

```text
div
button
```

の組が1つづつ追加される

## 問2

> 次にcaptureの値を変更しdivとbuttonのコンソール出力順序が逆になることを確認しなさい。

### 回答2

```js
div.addEventListener(
  "click",
  () => {
    console.log("div");
  },
  { capture: false }
);
```

とすると、

```text
button
div
```

の組が1つづつ追加される

の組が1つづつ追加される
