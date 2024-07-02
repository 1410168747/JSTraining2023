class Glob {
    constructor(glob) {
        this.glob = glob;

        // 内部的には正規表現を使ってグロブを実装する。
        // ?は/以外の1文字にマッチする。*は/以外の0個以上の文字にマッチする。
        // それぞれの文字をキャプチャグループに置き換える。
        let regexpText = glob.replace("?", "([^/])").replace("*", "([^/]*)");

        // uフラグをつけてUnicodeを考慮したマッチングを行う。
        // グロブは文字列全体にマッチさせることを意図して
        // いるので、^と$アンカーを使う。また、グロブでは
        // あまり意味がないので、search()やmatchAll()は実装しない。
        this.regexp = new RegExp(`^${regexpText}$`, "u");
    }

    toString() { return this.glob; }

    [Symbol.search](s) { return s.search(this.regexp); }
    [Symbol.match](s) { return s.match(this.regexp); }
    [Symbol.replace](s, replacement) {
        return s.replace(this.regexp, replacement);
    }
}

let pattern = new Glob("docs/*.txt");
"docs/js.txt".search(pattern) // => 0: 0文字目から一致する。
"docs/js.htm".search(pattern) // => -1: 一致しない。
let match = "docs/js.txt".match(pattern);
match[0]    // => "docs/js.txt"
match[1]    // => "js"
match.index // => 0
"docs/js.txt".replace(pattern, "web/$1.htm") // => "web/js.htm"
