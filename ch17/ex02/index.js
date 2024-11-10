import https from "https";

const username = process.env.USER_NAME;
const token = process.env.GITHUB_TOKEN;
const repo = process.env.REPO_NAME;

// コマンドライン引数から情報を受け取る
const args = process.argv.slice(2);

// 設定オプションのベース
const baseOptions = {
    hostname: 'api.github.com',
    port: 443,
    headers: {
        'User-Agent': username,
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`
    }
};

// 引数が `-h` または `--help` の場合は、ヘルプメニューを表示
if (args.includes('-h') || args.includes('--help')) {
    console.log(`
    使用方法:
      node script.js [action] [options]

    アクション:
      create "title" "body"  - 新しいIssueを作成
      list        - オープンなIssueのIDとタイトルをリスト表示
      close "issue_number"   - 指定されたIssueをクローズ

    オプション:
      -h, --help                     - ヘルプメニューを表示

    例:
      node script.js create "Issue Title" "Issue body"
      node script.js close 5
      node script.js list
    `);
    process.exit(0);
}

// 詳細モード設定
const isVerbose = args.includes('-v') || args.includes('--verbose');

// 除去したい要素のリスト
const removeItems = ["-h", "--help", "-v", "--verbose"];

// filter関数で指定の要素を除去
const [action, ...otherArgs] = args.filter(arg => !removeItems.includes(arg));

// ヘルパー関数: HTTPSリクエストを行いレスポンスを処理する
function makeRequest(options, data, callback) {
    if (isVerbose) {
        const maskedToken = token ? `${token.slice(0, 3)}...` : 'undefined';
        console.log('RequestOptions:', { ...options, headers: { ...options.headers, Authorization: `token ${maskedToken}` } });
    }

    const req = https.request(options, (res) => {
        let body = '';
        res.setEncoding('utf8');

        if (isVerbose) {
            console.log(`Response Status: ${res.statusCode}`);
            console.log(`Response Headers:', res.headers}`);
        }

        res.on('data', (chunk) => {
            body += chunk;
        });

        res.on('end', () => {
            if (isVerbose) {
                console.log(`Response Body: ${body}`);
            }
            callback(null, { body, statusCode: res.statusCode });
        });
    });

    req.on('error', (e) => {
        callback(e, null);
    });

    if (data) {
        req.write(data);
    }

    req.end();
}

// 新しいIssueを作成する関数
function createIssue(title, body) {
    const options = { ...baseOptions, method: 'POST', path: `/repos/${username}/${repo}/issues` };
    const data = JSON.stringify({ title, body });
    makeRequest(options, data, (err, res) => {
        if (err) {
            console.error(`エラー: ${err.message}`);
        } else if (res.statusCode === 201) {
            if (isVerbose) {
                console.log(`新しいIssueが作成されました: ${res.body}`);
            } else {
                console.log(`新しいIssueが作成されました`);
            }
        } else {
            console.error(`Issueを作成できませんでした: ${res.statusCode}`);
        }
    });
}

// オープンなIssueのIDとTitleを取得する関数
function getIssues() {
    const options = { ...baseOptions, method: 'GET', path: `/repos/${username}/${repo}/issues?state=open` };
    makeRequest(options, null, (err, res) => {
        if (err) {
            console.error(`エラー: ${err.message}`);
        } else if (res.statusCode === 200) {
            const issues = JSON.parse(res.body);
            issues.forEach(issue => {
                console.log(`ID: ${issue.number}, Title: "${issue.title}"`);
            });
        } else {
            console.error(`Issueを取得できませんでした: ${res.statusCode}`);
        }
    });
}

// Issueをクローズする関数
function closeIssue(issueNumber) {
    const options = { ...baseOptions, method: 'PATCH', path: `/repos/${username}/${repo}/issues/${issueNumber}` };
    const data = JSON.stringify({ state: 'closed' });
    makeRequest(options, data, (err, res) => {
        if (err) {
            console.error(`エラー: ${err.message}`);
        } else if (res.statusCode === 200) {
            if (isVerbose) {
                console.log(`Issueがクローズされました: ${res.body}`);
            } else {
                console.log(`Issueがクローズされました`);
            }
        } else {
            console.error(`Issueをクローズできませんでした: ${res.statusCode}`);
        }
    });
}

export { createIssue, getIssues, closeIssue };