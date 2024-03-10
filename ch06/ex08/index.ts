/*
## 問題 6.8 💻 📄

p.157 下部で記載されているテンプレートオブジェクトに存在しないプロパティをあるオブジェクトから削除する `restrict()` 、あるオブジェクトのプロパティを別のオブジェクトから削除する `substract()` 関数を以下の通り実装しなさい。
与えられたテストを全てパスすること。

Symbol と継承プロパティは考慮しなくてよい。

```js
function restrict(target, template);
```

**引数**

`target` 削除先オブジェクト — 削除対象プロパティを適用するもので、オリジナル変更後に返されます。Symbol と継承プロパティは削除対象外です。

`template` テンプレートオブジェクト — このオブジェクトに存在しないプロパティは削除先オブジェクトから削除されます。継承プロパティはテンプレートオブジェクトに存在していても削除先オブジェクトが継承プロパティ以外で同名をもつ場合削除対象になります。

**返値**

削除先オブジェクトです。

```js
function substract(target, ...sources);
```

**引数**

`target` 削除先オブジェクト — 削除対象プロパティを適用するもので、オリジナル変更後に返されます。Symbol と継承プロパティは削除対象外です。

`sources` 削除対象指定オブジェクト (単数または複数) — 削除したいプロパティを含むオブジェクトです。Symbol と継承プロパティは削除対象になりません。

**返値**

削除先オブジェクトオブジェクトです。

**出題範囲**: 6.7*/

/**
 *
 * @param target 削除対象プロパティを適用するもので、オリジナル変更後に返されます。Symbol と継承プロパティは削除対象外です
 * @param template このオブジェクトに存在しないプロパティは削除先オブジェクトから削除されます。
 * 継承プロパティはテンプレートオブジェクトに存在していても削除先オブジェクトが継承プロパティ以外で同名をもつ場合削除対象になります。
 * @returns 削除先オブジェクトです。
 */
export const restrict = (target: any, template: any): object =>
  Object.getOwnPropertyNames(target)
    .filter((e) => !template.hasOwnProperty(e))
    .reduce((acc, e) => (delete acc[e], acc), target);

/**
 *
 * @param target 削除先オブジェクト — 削除対象プロパティを適用するもので、オリジナル変更後に返されます。Symbol と継承プロパティは削除対象外です。
 * @param sources 削除対象指定オブジェクト (単数または複数) — 削除したいプロパティを含むオブジェクトです。Symbol と継承プロパティは削除対象になりません。
 * @returns 削除先オブジェクトです。
 */
export function substract(target: object, ...sources: object[]): object {
  // for (const propName of Object.getOwnPropertyNames(target)) {
  //   for (const source of sources) {
  //     if (source.hasOwnProperty(propName)) {
  //       delete (target as any)[propName];
  //       break;
  //     }
  //   }
  // }
  // return target;

  return Object.getOwnPropertyNames(target)
    .filter((propName) => sources.some((e) => e.hasOwnProperty(propName)))
    .reduce((acc, e) => (delete acc[e], acc), target as any); // as anyがないとエラーになるが解消方法が不明
}
