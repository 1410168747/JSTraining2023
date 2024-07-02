import { type } from './index.js';

describe('type', () => {
    test.each`
        input       | expected
        ${"A"}      | ${"string"}
        ${3.14}     | ${"number"}
        ${BigInt(Number.MAX_SAFE_INTEGER)}     | ${"bigint"}
        ${undefined}| ${"undefined"}
        ${Symbol()} | ${"symbol"}
        ${{ x: 1 }} | ${"object"}
        ${[0, 1, 2, 3]} | ${"array"}
`("type`$input` returns '$expected'", ({ input, expected }) => {
        expect(type`${input}`).toBe(expected);
    });
});