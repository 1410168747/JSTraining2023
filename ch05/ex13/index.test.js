import { fibonacci } from './index.ts';

describe('Fibonacci generator function', () => {
    test('should return the correct fibonacci sequence', () => {
        const fibGen = fibonacci();
        expect(fibGen.next().value).toBe(1);
        expect(fibGen.next().value).toBe(1);
        expect(fibGen.next().value).toBe(2);
        expect(fibGen.next().value).toBe(3);
    });
});