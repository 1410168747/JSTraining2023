/*
## 問題 5.9 💻🧪

任意の文字列を引数にとり、その文字列が JSON としてパース出来る場合 `{success: true, data: <パースしたデータ>}`を返し、できない場合 `{success: false, error: <エラー内容>}` を返す関数を書きなさい

**出題範囲**: 5.5.7
*/
export function parseJSON(
  json: string
): { success: true; data: unknown } | { success: false; error: unknown } {
  try {
    return { success: true, data: JSON.parse(json) };
  } catch (error) {
    return { success: false, error };
  }
}
