## 答案

### AMD (Asynchronous Module Definition)

これはブラウザの非同期ロードが主な目的のモジュール方式です。

RequireJSというライブラリで実装されています。

### UMD (Universal Module Definition)

AMDとCommonJSを一緒にサポートし、変数エクスポートをブラウザーとNode.jsの両方で動作させることができるモジュール形式です。

### SystemJS

これは動的ESモジュールローダーで、ESモジュール、AMD、CommonJS、Globalスクリプトを読み込むことができます。また、モジュールをバンドルせずに非同期に読み込むことができます。

### その他

#### IIFE (Immediately Invoked Function Expressions)

関数をすぐに実行するJavaScriptのパターンで、スクリプトが異なるスクリプトから分離され、グローバルスコープを汚染しない方法を提供します。

#### Revealing Module Pattern

JavaScriptでよく使われるモジュールパターンの一つで、クロージャを利用してプライベートとパブリックのメソッドを明確に区別します。
