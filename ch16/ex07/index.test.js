import { checkEntry } from './index.js';

// テストスイートを定義
describe('checkEntry', () => {
    // ファイルのテスト
    it('should return "file" for files', async () => {
        const result = await checkEntry('./index.js'); // テスト用のファイルパス
        expect(result).toBe('file');
    });

    // ディレクトリのテスト
    it('should return "directory" for directories', async () => {
        const result = await checkEntry('../ex07'); // テスト用のディレクトリパス
        expect(result).toBe('directory');
    });

    // 存在しないパスのテスト
    it('should return "not_found" for non-existent paths', async () => {
        const result = await checkEntry('./nonExistentPath'); // 存在しないパス
        expect(result).toBe('not_found');
    });

    // エラー処理のテスト
    // it('should throw for errors other than ENOENT', async () => {
    //     await expect(checkEntry('/path/with/permission/denied')).rejects.toThrow();
    // });
});