## 答案

### 「Nodeのモジュール」方式

いずれの場合も インポート側から見るとクラス名が変わらないので、インポート側
| # | 変更前 | 変更後 | ファイル名 | 説明 |
| --- | ----------------------------- | ------------------------------------------- | ---------- | ---- |
| 1 | `module.exports = { BitSet }` | `module.exports = { BitSet: BitSetRename }` | `sets.cjs` | リネーム後のクラス名 `BitSetRename` をリネーム前のクラス名 `BitSet` としてエクスポートする。|
| 2 | `exports.mean = mean;`<br>`exports.stddev = stddev;` | `exports.mean = meanRename;`<br>`exports.stddev = stddevRename;` | `stats.cjs` | リネーム後の関数名 `meanRename` , `stddevRename` をリネーム前の関数名 `mean` , `stddev` としてエクスポートする。|

### 「ES6のモジュール」方式

いずれの場合も インポート側から見るとクラス名が変わらないので、インポート側
| # | 変更前 | 変更後 | ファイル名 | 説明 |
| --- | ----------------------------- | ------------------------------------------- | ---------- | ---- |
| 1 | `import BitSet from './sets.js';` | `import BitSetRename from './sets.js';` | `index.js` | デフォルトエクスポートしていた `BitSet` をリネーム後のクラス名 `BitSetRename` でインポートする。ただし、インポート側で _BitSet_ 以外の名前でデフォルトインポートしていた場合、自動リネームは起こらない。|
| 2 | `export { stddev as standardDeviation } from './stddev.js';` | `export { stddevRename as standardDeviation } from './stddev.js';` | `stats.js` | リネームかつ再エクスポートする関数の元の関数名をリネームしても、リネーム後の名前は変わらない|
| 3 | `export { default as average } from './mean.js';` | `export { default as mean } from './mean.js';` | `stats.js` | エクスポートする関数名をリネームしても、インポート側で別名をつけている場合は、リネーム後の名前は変わらない|
