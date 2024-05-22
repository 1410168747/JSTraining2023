# 練習問題: 12 章

## 問題 12.1 💻

以下の関数 `counterIter()` 及び `counterGen()` を利用して、イテレータ及びジェネレータに対して、どのような操作をした時にどの部分が実行されるのか、動作を確認しなさい。

例

- 明示的に[イテレータインタフェース](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-iteration) のメソッドを呼んだり、間接的に呼んだりする
- ジェネレータ関数によって生成されたオブジェクトが[イテレータインタフェース](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-iteration)を満たしていることを確認する
- `return()` や `throw()` がどのようなときに呼ばれるのか確認する
- ジェネレータ関数の中身がどのタイミングで初めて実行されるか確認する

```js
function counterIter(max) {
  console.log("counterIter");
  let c = 1;
  return {
    [Symbol.iterator]() {
      console.log("counterIter: Symbol.iterator");
      return this;
    },
    next() {
      console.log("counterIter: next");
      if (c >= max + 1) {
        return { value: undefined, done: true };
      }
      const value = c;
      c++;
      return { value, done: false };
    },
    return(value) {
      console.log("counterIter: return:", value);
      return { value, done: true };
    },
    throw(e) {
      console.log("counterIter: throw:", e);
      throw e;
    },
  };
}

function* counterGen(max) {
  console.log("counterGen");
  try {
    for (let c = 1; c <= max; c++) {
      console.log("counterGen: next");
      yield c;
    }
  } catch (e) {
    console.log("counterGen: catch:", e);
  } finally {
    console.log("counterGen: finally");
  }
```

**出題範囲**: 全体
