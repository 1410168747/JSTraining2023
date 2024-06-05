import * as path from 'path';
import * as fs from 'fs';

function* walk(rootPath) {

    yield* fs.readdirSync(rootPath, { recursive: true }).map((e => path.join(rootPath, e))).map(e => ({
        path: e,
        isDirectory: fs.statSync(e).isDirectory(),
    }));
}

export { walk }