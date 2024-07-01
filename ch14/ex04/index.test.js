import { Hiragana } from './index.js';

describe('Hiragana', () => {
    test('"あ"より前はエラーになる', () => {
        expect(() => { new Hiragana("\u3040") }).toThrow();
    });
    test('Hiragana', () => {
        const a = new Hiragana('あ');
        expect(a.toString()).toBe('あ');
        expect(a.valueOf()).toBe('あ'.charCodeAt(0));
        const yori = new Hiragana('ゟ');
        expect(yori.toString()).toBe('ゟ');
        expect(yori.valueOf()).toBe('ゟ'.charCodeAt(0));
    });
    test('"ゟ"より後はエラーになる', () => {
        expect(() => { new Hiragana('\u30A0') }).toThrow();
    });
    test('複数文字がある場合は、先頭の文字を採用する', () => {
        const hiragana = new Hiragana('あい');
        expect(hiragana.toString()).toBe('あ');
    });
    test('ソート', () => {
        const a = new Hiragana('あ');
        const i = new Hiragana('い');
        const u = new Hiragana('う');
        const e = new Hiragana('え');
        const o = new Hiragana('お');
        const hiraganas = [a, u, o, e, i];
        hiraganas.sort();
        expect(hiraganas).toEqual([a, i, u, e, o]);
        console.log(hiraganas);
    });

});