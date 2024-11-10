`package.json`に以下を追加しました。
なお、`package.json`には`  "type": "module",`が指定されています。

```json
  //前略
  "scripts": {
    //中略
    "test": "jest --runInBand"
    //後略
```

この段階で`npm run test`を実行すると、以下のエラーになりました。

```
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /Users/thatanaka/development/JSTraining2023/ch17/ex02/githubActions.test.js:69
    import { createIssue, getIssues, closeIssue } from './index.js';
    ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1505:14)
```

いくつかの解決策の中で、`babel-jest`を使ったトランスコンパイルを採用しました。
ES6コードをCommonJSへトランスパイルします。

`babel.config.js`を以下のように指定しました。

```js
export default {
  presets: ["@babel/preset-env"],
};
```

この段階で`npm run test`を実行すると、以下のエラーになりました。

```
  ● Test suite failed to run

    You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously or when using the Node.js `--experimental-require-module` flag.
        at /Users/thatanaka/development/JSTraining2023/ch17/babel.config.js

      at loadPartialConfigSync (node_modules/@babel/core/src/config/index.ts:50:60)
      at loadPartialConfigSync (node_modules/@babel/core/src/config/index.ts:69:14)
      at ScriptTransformer._getCacheKey (node_modules/@jest/transform/build/ScriptTransformer.js:228:41)
      at ScriptTransformer._getFileCachePath (node_modules/@jest/transform/build/ScriptTransformer.js:289:27)
      at ScriptTransformer.transformSource (node_modules/@jest/transform/build/ScriptTransformer.js:525:32)
      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:674:40)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:726:19)
```

そこでやむなく`babel.config.js`を`babel.config.cjs`にリネームし、以下のようにしました。

```js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // Node.jsの現在のバージョンをターゲットに
        },
      },
    ],
  ],
};
```

`jest.config.cjs`を追加しました。

```js
module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
```
