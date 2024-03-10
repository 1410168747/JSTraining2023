// ## 問題 7.9 🖋

// `"𠮷野家"[0]`や `tar[0]` が何を返す調べなさい。それぞれの結果について説明しなさい。問題 7.8 で得た絵文字に対する知見も述べなさい。

// **出題範囲**: 7.10

test("𠮷野家", () => {
  // 文字列に配列としてアクセスすると、コードユニットが取得できる
  const tar = "𠮷野家";
  console.log(convertCodeUnits(tar));
  console.log(convertCodePoints(tar));
  expect(tar[0]).toEqual("\uD842"); // \u{20bb7}(𠮷)の上位サロゲート
  expect(tar[1]).toEqual("\uDFB7"); // \u{20bb7}(𠮷)の下位サロゲート
  expect(tar[2]).toEqual("\u91CE"); // 野
  expect(tar[3]).toEqual("\u5BB6"); // 家
});

test("👨‍👨‍👧‍👧", () => {
  // 文字列に配列としてアクセスすると、コードユニットが取得できる
  const tar = "👨‍👨‍👧‍👧";
  console.log(convertCodeUnits(tar));
  console.log(convertCodePoints(tar));
  expect(tar[0]).toEqual("\uD83D"); // \u{1f468}(👨)の上位サロゲート
  expect(tar[1]).toEqual("\uDC68"); // \u{1f468}(👨)の下位サロゲート
  expect(tar[2]).toEqual("\u200D"); // ゼロ幅接合子
  expect(tar[3]).toEqual("\uD83D"); // \u{1f468}(👨)の上位サロゲート
  expect(tar[4]).toEqual("\uDC68"); // \u{1f468}(👨)の下位サロゲート
  expect(tar[5]).toEqual("\u200D"); // ゼロ幅接合子
  expect(tar[6]).toEqual("\uD83D"); // \u{1f467}(👧)の上位サロゲート
  expect(tar[7]).toEqual("\uDC67"); // \u{1f467}(👧)の下位サロゲート
  expect(tar[8]).toEqual("\u200D"); // ゼロ幅接合子
  expect(tar[9]).toEqual("\uD83D"); // \u{1f467}(👧)の上位サロゲート
  expect(tar[10]).toEqual("\uDC67"); // \u{1f467}(👧)の下位サロゲート
});

// https://jsprimer.net/basic/string-unicode/
function convertCodeUnits(str: string) {
  const codeUnits = [];
  for (let i = 0; i < str.length; i++) {
    codeUnits.push(
      `${String.raw`\u`}${str.charCodeAt(i).toString(16).toUpperCase()}`
    );
  }
  return codeUnits;
}
function convertCodePoints(str: string) {
  return Array.from(str).map((char) => {
    const target = char.codePointAt(0);
    if (target === undefined) {
      throw new Error("undefined");
    } else {
      return target.toString(16);
    }
  });
}
