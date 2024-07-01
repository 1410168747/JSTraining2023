class IgnoreAccentPattern {

    // 正規化してダイアクリティカルマークの範囲を削除するための正規表現
    static #diacriticRange = /[\u0300-\u036f]/g;

    static removeDiacritics(str) {
        return str.normalize('NFD').replace(IgnoreAccentPattern.#diacriticRange, '');
    };

    constructor(pattern) {
        // patternはstringかRegExpのインスタンス
        // RegExpのインスタンスの場合はsourceプロパティを使う
        const cleaned = IgnoreAccentPattern.removeDiacritics(pattern.source ?? pattern);
        // あればRegExpのインスタンスのflagsプロパティも使う
        this.regex = new RegExp(cleaned, pattern.flags);
    }

    [Symbol.search](s) {
        return IgnoreAccentPattern.removeDiacritics(s).search(this.regex);
    }

    [Symbol.match](s) {
        return IgnoreAccentPattern.removeDiacritics(s).match(this.regex);
    }
}

export { IgnoreAccentPattern }