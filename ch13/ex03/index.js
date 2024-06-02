import * as fs from "node:fs";

function mkdir(path, options) {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, options, (err, path) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(path);
        });
    });
}

function readdir(path, options) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, options, (err, files) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(files);
        });
    });
}

function stat(path, options) {
    return new Promise((resolve, reject) => {
        fs.stat(path, options, (err, files) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(files);
        });
    });
}

export { mkdir, readdir, stat };