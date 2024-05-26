import { counterGen } from './index.ts'

describe("counterGen", () => {
    test("first call", () => {
        const sut = counterGen();
        expect(sut.next().value).toBe(0);
    })
    test("second call", () => {
        const sut = counterGen();
        expect(sut.next().value).toBe(0);
        expect(sut.next().value).toBe(1);
    })
    test("reset", () => {
        const sut = counterGen();
        expect(sut.next().value).toBe(0);
        expect(sut.next().value).toBe(1);
        expect(sut.throw(null).value).toBe(-1);
    })
    test("call after reset", () => {
        const sut = counterGen();
        expect(sut.next().value).toBe(0);
        expect(sut.next().value).toBe(1);
        expect(sut.throw(null).value).toBe(-1);
        expect(sut.next().value).toBe(0);
    })
    test("return", () => {
        const sut = counterGen();
        expect(sut.next().value).toBe(0);
        expect(sut.next().value).toBe(1);
        expect(sut.throw(null).value).toBe(-1);
        expect(sut.next().value).toBe(0);
        expect(sut.return().value).toBe(undefined);
        expect(sut.return().done).toBe(true);
        expect(sut.next().value).toBe(undefined);
        expect(sut.next().done).toBe(true);
    })

})
