_JQuery_ の`Deffered`も _ES6(ES2015)_ `Promise`もどちらも、非同期処理を扱うための機構です。
`Deffered`は`Promise`より前の2011年にリリースされました。

`Deffered`は当初、`Promise.then()`相当のメソッドとして`Deffered.pipe()`メソッドを提供していましたが、これは _jQuery 3.0_ で、`Promise`との互換性を向上させるために、`Deffered.then()` が実装されました。なお、同時に`pipe()`メソッドは _deprecated_ しています。

以下は[jQuery 3.0 Final Released!](https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/)からの抜粋です。

> ## jQuery.Deferred is now Promises / A + compatible
>
> jQuery.Deferred objects have been updated for compatibility with Promises / A + and ES2015 Promises, verified with the [Promises/A+Compliance Test ](https://github.com/promises-aplus/promises-tests)Suite.This meant we needed some major changes to the `.then()` method.Legacy behavior can be restored by replacing any use of `.then()` with the now - deprecated `.pipe()` method(which has an identical signature).



## 参考

[jQuery 1.5 Released](https://blog.jquery.com/2011/01/31/jquery-15-released/) 2024-06-07アクセス
[jQuery.Deferred()](https://api.jquery.com/jQuery.Deferred/) 2024-06-07アクセス
[jQuery 3.0 Final Released!](https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/) 2024-06-07アクセス
