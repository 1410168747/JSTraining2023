- コールバックで発生した例外はどのように伝搬するか
- Promiseが完了した場合にどのように値をとるか


想定外の事態とならないよう、たとえすでに解決されたプロミスであっても、** **[`then()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) に渡された関数が同期的に呼び出されることはありません。
