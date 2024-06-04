import * as fsPromises from "node:fs/promises";
import * as path from 'path';

const fetchFirstFileSize = async (dirPath) => {
    const files = await fsPromises.readdir(dirPath);
    const filePath = await path.join(dirPath, files[0]);
    const stats = await fsPromises.stat(filePath);
    return stats.size;
}

const fetchSumOfFileSizes = async (dirPath) => {
    const rest = await fsPromises.readdir(dirPath);
    let total = 0;

    async function sumSize() {
        if (rest.length === 0) {
            return total;
        }
        const stat = await fsPromises.stat(path.join(dirPath, rest.pop()));
        total += stat.size;
        return sumSize();
    }
    return sumSize();
}

export { fetchFirstFileSize, fetchSumOfFileSizes }