import { createIssue, getIssues, closeIssue } from './index.js';
// import { jest } from '@jest/globals';

jest.mock('https', () => ({
    // "https"モジュール全体をモック化します。モジュール全体をモック化した場合、モック化されたモジュールのメソッドはすべてjest.fn()になります。
    // jest.fn()は、モック関数を作成するためのJestの関数です。モック関数は、関数が呼び出されたかどうか、呼び出された回数、引数などを追跡できます。
    //--
    // jest.mockの第2引数としてコールバック関数を提供する場合、そのコールバックはモックの実装をカスタマイズするためのファクトリ関数として機能します。
    // このファクトリ関数を使うことで、モジュール内の各エクスポート（関数や変数）に対して具体的なモックの実装を定義することができます。
    //--
    // この例では、httpsモジュールのrequestメソッドに対して、モックの実装を定義しています。
    request: (options, callback) => {
        let response = {};
        if (options.method === 'POST') {
            // createIssue関数が呼び出された場合、ステータスコード201を返すレスポンスを返します。
            response = { statusCode: 201, end: jest.fn(), setEncoding: jest.fn(), on: jest.fn((event, cb) => cb()) };
        } else if (options.method === 'GET') {
            // getIssues関数が呼び出された場合、ステータスコード200を返すレスポンスを返します。
            response = {
                statusCode: 200,
                setEncoding: jest.fn(),
                on: jest.fn((event, cb) => {
                    if (event === 'data') {
                        cb(JSON.stringify([{ number: 1, title: 'Mock Issue' }]));
                    } else if (event === 'end') {
                        cb();
                    }
                }),
            };
        } else if (options.method === 'PATCH') {
            // closeIssue関数が呼び出された場合、ステータスコード200を返すレスポンスを返します。
            response = { statusCode: 200, end: jest.fn(), setEncoding: jest.fn(), on: jest.fn((event, cb) => cb()) };
        }

        const req = {
            write: jest.fn(),
            end: jest.fn(),
            on: jest.fn(),
            abort: jest.fn(),
            emit: jest.fn(),
            _events: {},
            _eventsCount: 0,
            _maxListeners: undefined,
        };
        callback(response);
        return req;
    }
}));

// describe ブロックの外側で console.log をモック化
console.log = jest.fn();

describe('GitHub Actions', () => {
    test('Create Issue', (done) => {
        createIssue('Mock Title', 'Mock Body');
        process.nextTick(() => {// 非同期処理は実行によっては現在のイベントループが完了する前に終わらない可能性があるが、この実装で問題ないか?
            // モック化したconsole.logが指定の引数で呼ばれたことを確認
            expect(console.log).toHaveBeenCalledWith('新しいIssueが作成されました');
            // 非同期のテストの完了を示すためにdone()を呼び出す
            done();
        });
    });

    test('Get Issues', (done) => {
        getIssues();
        process.nextTick(() => {
            expect(console.log).toHaveBeenCalledWith('ID: 1, Title: "Mock Issue"');
            done();
        });
    });

    test('Close Issue', (done) => {
        closeIssue(1);
        process.nextTick(() => {
            expect(console.log).toHaveBeenCalledWith('Issueがクローズされました');
            done();
        });
    });
});