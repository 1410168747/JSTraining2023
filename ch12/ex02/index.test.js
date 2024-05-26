import { fibonacciSequence } from './index';

describe("fibonacciSequence", () => {

    test("next", () => {
        const sut = fibonacciSequence();
        expect(sut.next().value).toBe(1);
        expect(sut.next().value).toBe(1);
        expect(sut.next().value).toBe(2);
        expect(sut.next().value).toBe(3);
    })

    test("return", () => {
        const sut = fibonacciSequence();
        const actual1 = sut.return(null);
        expect(actual1.value).toBeNull();
        expect(actual1.done).toBe(true);
        const actual2 = sut.next();
        expect(actual2.value).toBeUndefined();
        expect(actual2.done).toBe(true);
    })

    test("throw", () => {
        const sut = fibonacciSequence();
        let actual1 = undefined
        try {
            actual1 = sut.throw(null);
        } catch (e) {
            expect(e).toBeNull();
        }
        expect(actual1).toBeUndefined();
        const actual2 = sut.next();
        expect(actual2.value).toBeUndefined();
        expect(actual2.done).toBe(true);
    })
})
