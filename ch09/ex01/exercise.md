## 問題 9.1 💻📄

与えられたテストケースを満たすクラス C を作成しなさい。

```ts
import { C } from "./index.js"; // ts でも可

test("class puzzle", () => {
  expect(C.method()).toBe(1);
  expect(new C().method()).toBe(2);
  expect(C.C.method()).toBe(3);
  expect(new C.C().method()).toBe(4);
  expect(new C().C.method()).toBe(5);
  expect(new new C().C().method()).toBe(6);
});
```

**出題範囲**: 9.3.1
