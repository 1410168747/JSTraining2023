## 問1

> 1. プログラミング言語や処理系によっては、再帰呼び出しを関数の処理の末尾にする(末尾再帰)ことで、スタックオーバーフローが起こらないよう最適化できるものがある。末尾再帰は何故そのような最適化ができるのか答えなさい。

### 答案

末尾再帰では、再帰呼び出しの結果がそのまま関数の返り値となるため、再帰呼び出しを行う前の状態を保持しておく必要がないため。

例えば下記の非末尾再帰の場合, `factorial(n - 1)`が評価された後に`n * factorial(n - 1)`を評価する必要があるため, 再帰呼び出しを行う前の状態(`n *`部分)を保持しておく必要があります。

```ts
function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
```

一方で、下記の末尾再帰の場合, `factorial(n - 1, n * acc)` の結果がそのまま最終結果となるため、再帰呼び出しを行う前の状態を保持しておく必要がありません。

```ts
function factorial(n: number, acc: number = 1): number {
  if (n === 0) {
    return acc;
  }
  return factorial(n - 1, n * acc);
}
```

この差が、末尾再帰がスタックオーバーフローを防ぐ一因となります。つまり、末尾再帰の場合、再帰呼び出しを行う度に新たな状態をスタックに積む必要がなく、必要な情報を引数で渡すことによって同じスタックフレームを再利用できるので、スタックオーバーフローを防ぐことができます。

## 問2

> 2. JavaScript で末尾再帰最適化を実装している処理系を答えなさい。  
>    利用できる環境があれば、実際に以下の URL を表示・実行してエラーが発生しないことを確認しなさい。  
>    https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABMAhtOAnGKA2AKMALkTBAFsAjAUwwEpEBvAWAChFlxp4kYoa8ADhjgATENGKlKNADSIIccHwyTy1Oo1bt2MYIjwKlNRAD4S9Zm23sMVKCAxIho8VADcW7QF9PNuw55lQWExaEQAKnlFMGU5QxjjAGpEAEZaDysfK1t7R0RefhS5NIys1gUwAGc4HCoAOhw4AHM8VHQsXDwUgAZe3tp01iA

### 答案

JavaScriptCore
Safari バージョン17.3.1 (18617.2.4.11.12, 18617)で成功
