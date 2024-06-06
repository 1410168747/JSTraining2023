import * as path from 'path';
import * as fsPromises from "node:fs/promises";

async function* walk(rootPath, original = rootPath) {
    let dirEntries;
    try {
        dirEntries = await fsPromises.readdir(rootPath, { withFileTypes: true });
    } catch (err) {
        console.error(`Error reading directory ${rootPath}:`, err);
        return;
    }
    for (const dirEntry of dirEntries) {
        const entryPath = path.join(rootPath, dirEntry.name);
        if (dirEntry.isDirectory()) {
            yield* walk(entryPath, original);
        } else {
            yield {
                path: entryPath.substring(original.length + 1),
                isDirectory: false,
            };
        }
    }
}

export { walk }