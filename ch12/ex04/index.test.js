import { generatePrime } from "./index.ts"

describe("generatePrime", () => {
    const gen = generatePrime();
    test("first prime number", () => {
        expect(gen.next().value).toBe(2);
    });
    test("second prime number", () => {
        const begin = performance.now();
        const result = gen.next();
        const time = performance.now() - begin;
        console.log(`Time(2nd): ${time}ms`);
        expect(result.value).toBe(3);
    });
    test("100th prime number", () => {
        for (let i = 0; i < 997; i++) {
            gen.next();
        }
        const begin = performance.now();
        const result = gen.next();
        const time = performance.now() - begin;
        console.log(`Time(100th): ${time}ms`);
        expect(result.value).toBe(7919);
    });
});
