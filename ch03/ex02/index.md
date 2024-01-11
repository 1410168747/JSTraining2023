# 解答
## 問
最大値+1 === 最大値+2がtrueになるのはなぜか
## 答え
JavaScriptの数値は内部的に浮動小数点数で表現される。Number.MAX_VALUEはその最大の表現可能値。これを超える値を表現しようとすると、結果はNumber.MAX_VALUEになる。このためAX + 1 === MAX + 2はtrueになる。