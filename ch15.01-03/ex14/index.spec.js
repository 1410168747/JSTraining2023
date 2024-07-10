// test/product-list.test.mjs または test/product-list.test.js（package.jsonでtype: moduleを指定した場合）
import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';


test.describe('Product List functionality', () => {
    test('should correctly filter products based on selection', async ({ page }) => {
        // 現在のファイルのURLからファイルパスを取得
        const fileName = fileURLToPath(import.meta.url);
        const html = path.join(path.dirname(fileName), 'index.html');
        await page.goto(`file://${html}`);

        // すべてを表示していることを確認
        await expect(page.locator('data-testid=food1')).toBeVisible();
        await expect(page.locator('data-testid=stationery1')).toBeVisible();
        await expect(page.locator('data-testid=stationery2')).toBeVisible();

        // 食品だけを選択
        await page.locator('data-testid=select').selectOption({ value: 'food' });
        await expect(page.locator('data-testid=food1')).toBeVisible();
        await expect(page.locator('data-testid=stationery1')).toBeHidden();
        await expect(page.locator('data-testid=stationery2')).toBeHidden();

        // 文房具だけを選択
        await page.locator('data-testid=select').selectOption({ value: 'stationery' });
        await expect(page.locator('data-testid=food1')).toBeHidden();
        await expect(page.locator('data-testid=stationery1')).toBeVisible();
        await expect(page.locator('data-testid=stationery2')).toBeVisible();

        // すべてを再選択
        await page.locator('data-testid=select').selectOption({ value: 'all' });
        await expect(page.locator('data-testid=food1')).toBeVisible();
        await expect(page.locator('data-testid=stationery1')).toBeVisible();
        await expect(page.locator('data-testid=stationery2')).toBeVisible();
    });
});