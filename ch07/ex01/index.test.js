/* eslint no-sparse-arrays: 0 */

import { addMatrix, multiplyMatrix } from "./index.ts";

const addTestCases = [
    {
        description: "(1,2)+(1,2)=(1,2)",
        p1: [[1, 2], [3, 4]],
        p2: [[5, 6], [7, 8]],
        expected: [[6, 8], [10, 12]],
    },
    {
        description: "(1,1)+(1,1)=(1,1)",
        p1: [[1]],
        p2: [[0]],
        expected: [[1]],
    },
    {
        description: "(2,2)+(2,2)=(2,2)",
        p1: [[1, 2]],
        p2: [[3, 4]],
        expected: [[4, 6]],
    },
    {
        description: "(2,1)+(2,1)=(2,1)",
        p1: [[1], [2]],
        p2: [[3], [4]],
        expected: [[4], [6]],
    },
];

describe("addMatrix", () => {
    addTestCases.forEach((c) => {
        it(c.description, () => {
            expect(addMatrix(c.p1, c.p2)).toEqual(c.expected);
        });
    });
});

test("shape is not matched", () => {
    const p1 = //
        [[1, 2],];
    const p2 = //
        [[3],//
        [4]];
    expect(() => addMatrix(p1, p2)).toThrow("Matrix size is not matched");
});

const multiplyTestCases = [
    {
        description: "(1,2)x(2,1)=(1,1)",
        p1: [[1], [2]],
        p2: [[3, 4]],
        expected: [[3, 4], [6, 8]],
    },
    {
        description: "(1,1)x(1,1)=(1,1)",
        p1: [[2]],
        p2: [[3]],
        expected: [[6]],
    },
    {
        description: "(2,2)x(2,2)=(2,2)",
        p1: [[1, 2], [3, 4]],
        p2: [[5, 6], [7, 8]],
        expected: [[19, 22], [43, 50]],
    },
    {
        description: "(2,2)x(2,1)=(2,1)",
        p1: [[1, 2], [3, 4]],
        p2: [[5], [6]],
        expected: [[17], [39]],
    },
    {
        description: "(2,1)x(1,2)=(2,2)",
        p1: [[1], //
        [2]],
        p2: [[3, 4]],
        expected: [[3, 4], [6, 8]],
    },
];

describe("multiplyMatrix", () => {
    multiplyTestCases.forEach((c) => {
        it(c.description, () => {
            expect(multiplyMatrix(c.p1, c.p2)).toEqual(c.expected);
        });
    });
});

const p1 = //
    [[1, 2],];
const p2 = //
    [[3, 4],];
expect(() => multiplyMatrix(p1, p2)).toThrow("Matrix size is not matched");