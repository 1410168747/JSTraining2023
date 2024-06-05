import * as path from 'path';
import * as fs from 'fs';
import { walk } from "./index"

const asset = "test-assets"
const testDir = path.join(__dirname, asset);

describe("walk", () => {
    beforeEach(async () => {
        try {
            const files = await fs.promises.readdir(testDir);
            const invisibleFiles = files.filter((e) => e.startsWith("."));
            for (const e of invisibleFiles) {
                await fs.promises.unlink(path.join(testDir, e));
            }
        } catch (err) {
            //if the file doesn't exist, ignore an error.
        }
    });
    it("walk", () => {
        let actual = walk(testDir)

        const first = actual.next().value;
        expect(path.basename(first.path)).toBe('01.txt');
        expect(first.isDirectory).toBe(false);

        const second = actual.next().value;
        expect(path.basename(second.path)).toBe('02.txt');
        expect(second.isDirectory).toBe(false);

        const third = actual.next().value;
        expect(path.basename(third.path)).toBe('03.txt');
        expect(third.isDirectory).toBe(false);

        const fourth = actual.next().value;
        expect(path.basename(fourth.path)).toBe('04.txt');
        expect(fourth.isDirectory).toBe(false);

        const fifth = actual.next().value;
        expect(path.basename(fifth.path)).toBe('ex05');
        expect(fifth.isDirectory).toBe(true);

        const sixth = actual.next().value;
        expect(path.basename(sixth.path)).toBe('ex06');
        expect(sixth.isDirectory).toBe(true);

        const seventh = actual.next().value;
        expect(path.basename(seventh.path)).toBe('ex07.txt');
        expect(seventh.isDirectory).toBe(false);

        const eighth = actual.next().value;
        expect(path.basename(eighth.path)).toBe('ex08.txt');
        expect(eighth.isDirectory).toBe(false);

        expect(actual.next().done).toBe(true);
    })

})