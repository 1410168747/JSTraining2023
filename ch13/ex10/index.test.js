import { fetchSumOfFileSizes } from "./index";
import * as path from 'path';
import * as fs from 'fs';

const asset = "test-assets"
const testDir = path.join(__dirname, asset);

describe("ex04", () => {
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

    describe("fetchSumOfFileSizes", () => {

        it("", async () => {
            expect(await fetchSumOfFileSizes(testDir)).toBe(30720);
        })

    })
})
