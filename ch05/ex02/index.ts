/*
## 問題 5.2 💻🧪

文字列のパラメータを取り、制御文字など文字列リテラル作成時エスケープシーケンスで記述する必要がある文字 (p37 表 3-1 の`\\`より上)を、エスケープシーケンスに変換した文字列を返すメソッドを書きなさい。例えば文字列中に`\`が含まれていたら、`\\`に変換しなさい。if-else で分岐するバージョンと switch で分岐するバージョンの両方を作りなさい。
*/

export class ExcapeUtil {
  static escape1 = (arg: string): string =>
    [...arg]
      .map((c) => {
        if (c === "\0") {
          return String.raw`\0`;
        }
        if (c === "\b") {
          return String.raw`\b`;
        }
        if (c === "\t") {
          return String.raw`\t`;
        }
        if (c === "\n") {
          return String.raw`\n`;
        }
        if (c === "\v") {
          return String.raw`\v`;
        }
        if (c === "\f") {
          return String.raw`\f`;
        }
        if (c === "\r") {
          return String.raw`\r`;
        }
        if (c === '"') {
          return String.raw`\"`;
        }
        if (c === "'") {
          return String.raw`\'`;
        }
        if (c === "\\") {
          return "\\\\";
        }
        return c;
      })
      .join("");

  static escape2 = (arg: string): string =>
    [...arg]
      .map((c) => {
        switch (c) {
          case "\0":
            return String.raw`\0`;
          case "\b":
            return String.raw`\b`;
          case "\t":
            return String.raw`\t`;
          case "\n":
            return String.raw`\n`;
          case "\v":
            return String.raw`\v`;
          case "\f":
            return String.raw`\f`;
          case "\r":
            return String.raw`\r`;
          case '"':
            return String.raw`\"`;
          case "'":
            return String.raw`\'`;
          case "\\":
            return "\\\\";
          default:
            return c;
        }
      })
      .join("");
}
