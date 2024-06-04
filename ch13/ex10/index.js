import * as fsPromises from "node:fs/promises";
import * as path from 'path';

const fetchSumOfFileSizes = async (dirPath) => {
    const filePaths = await fsPromises.readdir(dirPath);
    const promises = filePaths.map((e) => fsPromises.stat(path.join(dirPath, e)));
    return Promise.all(promises).then((sizes) => sizes.reduce((acc, cur) => acc + cur.size, 0)).catch((e) => (console.log(e), e))
}
export { fetchSumOfFileSizes }