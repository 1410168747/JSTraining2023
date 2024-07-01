class Hiragana {
    constructor(str) {
        const first = str.charCodeAt(0);
        if (first < 0x3041 || 0x309f < first) {
            throw new Error(`Invalid Hiragana: ${str}`);
        }
        this.char = String.fromCodePoint(first);
        this.codeUnit = first;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this.valueOf();
        }
        return this.toString();
    }

    toString() {
        return this.char;
    }

    valueOf() {
        return this.codeUnit;
    }
}

export { Hiragana }