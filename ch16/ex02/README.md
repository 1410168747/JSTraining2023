# 練習問題 16 章

## 問題 16.2 💻🖋️

index.js は一定確率で終了する子プロセスを spawn するようになっている。index.js に対して以下の処理を実装しなさい。

1. 子プロセスが異常終了した場合、再起動する
2. シグナルを 2 種類以上トラップし、そのシグナルと同じシグナルを子プロセスに通知し、子プロセスがそのシグナルによって終了したことを確認し、自身も終了する

また、主にクラウド上で動作するプログラムは、いわゆる Graceful Shutdown という動作が求められ、上記のような処理が必要な場合がある。Kubernetes や Amazon ECS などの Docker ランタイム上でコンテナの Graceful Shutdown のために送信されるシグナルの種類は何か書きなさい。

**出題範囲: 16.10.3**
