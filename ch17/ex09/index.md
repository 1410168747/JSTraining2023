npx tsc
node ts/caller.js

npx babel task.js --out-file js/task.cjs
npx babel caller.js --out-file js/caller.cjs
caller.cjsのrequire文の拡張子をcjs二変更
node js/caller.cjs
