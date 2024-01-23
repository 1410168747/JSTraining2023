/*
## 問題 4.10 💻

配列 `["r", "i", "c", "o", "h"]` の `"o"` の要素を `delete` で削除したとき、削除後の配列の内容と `length` の値をコンソール出力で確認しなさい。

**出題範囲**: 4.13.4
*/
const ricoh = ["r", "i", "c", "o", "h"];
delete ricoh[3];
console.log(ricoh); //[ 'r', 'i', 'c', <1 empty item>, 'h' ]
console.log(ricoh.length); //5
