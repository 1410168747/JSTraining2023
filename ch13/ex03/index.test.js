import { mkdir, readdir, stat } from "./index";
import * as path from 'path';
import * as fs from 'fs';

const testDir = path.join(__dirname, "test");

describe("ex03", () => {
    beforeEach(async () => {
        try {
            await fs.promises.rm(testDir, { recursive: true });
        } catch (e) {
            //if files don't exist, ignore an error.
        }
        await fs.promises.mkdir(testDir, { recursive: true });
    });

    afterAll(async () => {
        await fs.promises.rm(testDir, { recursive: true });
    });

    describe("mkdir", () => {

        it("フォルダを作る", async () => {
            const folderPath = mkPath();
            expect(await mkdir(folderPath)).toBeUndefined();// Returns: <Promise> Upon success, fulfills with undefined if recursive is false
            expect(await fs.promises.stat(folderPath)).not.toBeUndefined();//the folder exists
        })

        it("再帰的にフォルダを作る", async () => {
            const parent = mkPath();
            const folderPath = path.join(parent, Date.now().toString());
            expect(await mkdir(folderPath, { recursive: true })).toBe(parent);//Returns: <Promise> Upon success, fulfills with undefined if recursive is false, or the first directory path created if recursive is true.
            expect(await fs.promises.stat(folderPath)).not.toBeUndefined();//the folder exists
        })

        it("存在するフォルダを作る", async () => {
            const folderPath = mkPath();
            await mkdir(folderPath);// フォルダ*1を作る
            expect(mkdir(folderPath)).rejects.toThrow();// *1と同名のフォルダを作る
        })

    })

    describe("readdir", () => {

        it("直下のサブフォルダのみ表示される", async () => {
            const parent = mkPath();
            const child = Date.now().toString();
            await mkdir(path.join(parent, child, Date.now().toString()), { recursive: true });//フォルダ自体は3階層分作る
            expect(await readdir(parent, { recursive: false })).toEqual([child]);
        })

        it("サブフォルダが再起的に表示される", async () => {
            const parent = mkPath();
            const child = Date.now().toString();
            const grandChild = Date.now().toString();
            await mkdir(path.join(parent, child, grandChild), { recursive: true });//フォルダ自体は3階層分作る
            expect(await readdir(parent, { recursive: true })).toEqual([child, path.join(child, grandChild)]);
        })

        it("サブフォルダが存在せずエラーになる", async () => {
            expect(readdir(mkPath())).rejects.toThrow();
        })
    })


    describe("stat", () => {

        it("存在する", async () => {
            const folderPath = path.join(mkPath(), Date.now().toString());
            await mkdir(folderPath, { recursive: true });
            expect(await stat(folderPath)).not.toBeUndefined();
        })

        it("存在しない", async () => {
            expect(stat(mkPath())).rejects.toThrow();
        })

    })
})
const mkPath = () => path.join(testDir, Date.now().toString());