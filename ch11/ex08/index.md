## 答案

正規表現`/^(a|aa)+$/`は、`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!`にマッチするのに時間がかかる。

```shell
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!: 1:24.053 (m:ss.mmm) 47 null
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!: 2:24.317 (m:ss.mmm) 48 null
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!: 4:17.499 (m:ss.mmm) 49 null
```

バックトラックにより、入力文字列に対してO(n^2)で処理時間が増えるため。

```
- 入力された文字列の先頭から順にパターンに一致するか調べていく
- パターンに一致するか調べるときは、正規表現の先頭から順にパターンに当てはまるか調べる
- 繰り返しがある場合はできるだけ長くとり、その後のパターンで失敗したら戻ってきて一文字短くしてやり直す
- 正規表現のパターンの末尾まで一致したら、その時点で成功とする
  (最後まで試行して一致することがなかった場合には失敗となる)
```

### 参考

https://qiita.com/Tatamo/items/68a10c6274953e695354
https://regex101.com
