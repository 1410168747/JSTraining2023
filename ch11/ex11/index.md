## 答案

JITコンパイラが最適化を行っているからです。

参考文献によると、CostOfLoop内のループの最適化されたコードのコストを`C_loop`とCostOfLengthPlusLoop内のループで生成される最適化されたコードのコストを`C_loop'`とすると、その差異は

`C_loop' = C_loop + N(C_(1) + C_(2))`

です。

式中の`C_(1)`は`res`を、ループの中では二度と読み出されることのない`メモリ・ロケーション`（`スタック・スロット`）に格納する処理のコストであり、`C_(2)`は`res`に`str.length`の値を格納する処理のコストです。これらを含む項`N(C_(1) + C_(2))`のコストはサブミリ秒に対して非常に小さいものと推測されます。

最適化前のコード、つまり提供されたサンプルコードでのマイクロベンチマーク戦略は
文字列の長さ評価のコストを `C_loop`(つまり `N`回評価すると `N・C_op `), N回のループのコストを `C_loop`とすると

`((N・C_op + C_loop) - C_loop)/N ≒ C_op`

と表現できることから、`C_op`のコストを測ることを目指しました。

しかし、JITコンパイラの最適化により、みかけのコードと最適化されたコードに差異が生じたためマイクロベンチマークは失敗しました。