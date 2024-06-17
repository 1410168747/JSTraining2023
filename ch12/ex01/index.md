##

### `counterIter()`で得られた反復可能オブジェクトの`next()`メソッドを明示的に呼び出す

```javascript
const ite = counterIter(2);
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
```

```text
counterIter
counterIter: next // next呼び出しごとに出力される
{ value: 1, done: false }
counterIter: next
{ value: 2, done: false }
counterIter: next
{ value: undefined, done: true } // 上限(この場合2)を超えるとvalueはundefinedになり、doneはtrueになる
```

### `counterIter()`で得られた反復可能オブジェクトの`return()`メソッドを明示的に呼び出す

```javascript
const ite = counterIter(2);
console.log(ite.return(0));
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
```

```text
counterIter
counterIter: return: 0
{ value: 0, done: true }
counterIter: next
{ value: 1, done: false }// returnを呼び出した後もcounterIterを呼び出せる
counterIter: next
{ value: 2, done: false }
counterIter: next
{ value: undefined, done: true }
```

### `counterIter()`で得られた反復可能オブジェクトの`throw()`メソッドを明示的に呼び出す

```javascript
const ite = counterIter(2);
try {
  console.log(ite.throw(new Error()));
} catch (e) {
  console.log(`cought an error: ${e}`);
}
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
```

```text
counterIter
counterIter: throw: Error
    at Object.<anonymous> (/tmp/U1H8byrGJH.js:45:25)
    at Module._compile (node:internal/modules/cjs/loader:1356:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
    at Module.load (node:internal/modules/cjs/loader:1197:32)
    at Module._load (node:internal/modules/cjs/loader:1013:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49
ERROR!
cought an error: Error
counterIter: next
{ value: 1, done: false }// throwを呼び出した後もcounterIterを呼び出せる
counterIter: next
{ value: 2, done: false }
counterIter: next
{ value: undefined, done: true }
```

### `counterIter()`で得られた反復可能オブジェクトを暗黙的に呼び出す

```javascript
console.log([...counterIter(2)]);
```

```text
counterIter
counterIter: Symbol.iterator
counterIter: next
counterIter: next
counterIter: next
[ 1, 2 ]
```

### `counterGen()`で得られた反復可能オブジェクトの`next()`メソッドを明示的に呼び出す

```javascript
const ite = counterGen(2);
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
```

```
counterGen
counterGen: next
{ value: 1, done: false }
counterGen: next
{ value: 2, done: false }
counterGen: finally
{ value: undefined, done: true }// finallyとして出力される
```

### `counterGen()`で得られた反復可能オブジェクトの`return()`メソッドを明示的に呼び出す

```javascript
const ite = counterGen(2);
console.log(ite.return(0));
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
```

```
{ value: 0, done: true }
{ value: undefined, done: true }// returnするとのちのdoneがtrueになる
{ value: undefined, done: true }
{ value: undefined, done: true }
```

### `counterGen()`で得られた反復可能オブジェクトの`throw()`メソッドを明示的に呼び出す

```javascript
const ite = counterGen(2);
console.log(ite.throw(new Error()));
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
```

```
Error// throwメソッドが存在しない
    at Object.<anonymous> (/tmp/rvD1IhPXIb.js:45:33)
    at Module._compile (node:internal/modules/cjs/loader:1356:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
    at Module.load (node:internal/modules/cjs/loader:1197:32)
    at Module._load (node:internal/modules/cjs/loader:1013:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49
counterGen
counterGen: next
{ value: 1, done: false }
counterGen: next
{ value: 2, done: false }
counterGen: finally
{ value: undefined, done: true }
```

```javascript
console.log([...counterGen(2)]);
```

```text
counterGen
counterGen: next
counterGen: next
counterGen: finally
[ 1, 2 ]

```
