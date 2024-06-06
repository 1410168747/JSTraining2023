import * as path from 'path';
import * as fs from 'fs';
import { walk } from "./index.js"

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

    it("walk", async () => {
        const gen = walk(testDir);

        const first = (await gen.next()).value
        expect(first.path).toBe('01.txt');
        expect(first.isDirectory).toBe(false);

        const second = (await gen.next()).value
        expect(second.path).toBe('02.txt');
        expect(second.isDirectory).toBe(false);

        const third = (await gen.next()).value
        expect(third.path).toBe('03.txt');
        expect(third.isDirectory).toBe(false);

        const fourth = (await gen.next()).value
        expect(fourth.path).toBe('04.txt');
        expect(fourth.isDirectory).toBe(false);

        const eighth = (await gen.next()).value
        expect(eighth.path).toBe('ex05/ex06/ex08.txt');
        expect(eighth.isDirectory).toBe(false);

        const seventh = (await gen.next()).value
        expect(seventh.path).toBe('ex05/ex07.txt');
        expect(seventh.isDirectory).toBe(false);
    })

})