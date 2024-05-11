import { retryWithExponentialBackoff } from "./index.ts";

it.each`
retryCount
${0}
${1}
${2}
`("fnがfalseを返す", async ({ retryCount }) => {
    const time = ((2 ** retryCount) - 1) * 1000;// 初項 1, 公比 2, 項数 retryCount の等比数列の総和 * 1000
    jest.setTimeout(time * 1.1);// jestのタイムアウトをバッファ込みで設定。1.1倍は適当なので、必要に応じて調整すること。

    const fn = jest.fn(() => false);
    const cb = jest.fn();

    retryWithExponentialBackoff(fn, retryCount, cb);
    await sleep(time * 1.05);// バッファ込み、ただしJestのタイムアウトを超えないこと。1.05倍は適当なので、必要に応じて調整すること。
    expect(fn).toHaveBeenCalledTimes(retryCount + 1);
    expect(cb).toHaveBeenLastCalledWith(false);
});

it.each`
retryCount
${0}
${1}
${2}
`("リトライ回数上限($retryCount)に達するまでに、fnがtrueを返す", async ({ retryCount }) => {
    const time = ((2 ** retryCount) - 1) * 1000;// 初項 1, 公比 2, 項数 retryCount の等比数列の総和 * 1000
    jest.setTimeout(time * 1.1);// jestのタイムアウトをバッファ込みで設定。1.1倍は適当なので、必要に応じて調整すること。

    const fn = jest.fn();// fnはretryCount上限でtrueを返すものとする
    for (let i = 0; i < retryCount; i++) {
        fn.mockReturnValueOnce(false);
    }
    fn.mockReturnValue(true);// 実行数上限は初回実行 + retryCount分 = retryCount + 1

    const cb = jest.fn();

    retryWithExponentialBackoff(fn, retryCount, cb);
    await sleep(time * 1.05);// バッファ込み、ただしJestのタイムアウトを超えないこと。1.05倍は適当なので、必要に応じて調整すること。
    expect(fn).toHaveBeenCalledTimes(retryCount + 1);
    expect(cb).toHaveBeenLastCalledWith(true);
});

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));