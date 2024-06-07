import * as fsPromises from "node:fs/promises";
import * as path from 'path';

const fetchFirstFileSize = (dirPath) =>
    fsPromises.readdir(dirPath).then((files) => path.join(dirPath, files[0])).then(fsPromises.stat).then(stat => stat.size);

const fetchSumOfFileSizes = async (dirPath) => {
    const rest = await fsPromises.readdir(dirPath);
    let total = 0;

    function sumSize() {
        if (rest.length === 0) {
            return total;
        }
        return fsPromises.stat(path.join(dirPath, rest.pop())).then((stat) => total += stat.size).then(sumSize)
    }
    return sumSize();
}

const fetchSumOfFileSizes2 = async (dirPath) => {
    const inputs = await fsPromises.readdir(dirPath);
    return promiseSequence(inputs, (input) => fsPromises.stat(path.join(dirPath, input))
        .then((stat) => stat.size))
        .then((sizes) => sizes.reduce((total, size) => total + size));
}

// この関数は入力値の配列と、「promiseMaker」関数を引数として受け取る。
// 配列中の任意の入力値xに対して、promiseMaker(x)はPromiseを返すようにする。
// このPromiseは出力値で満たされる。この関数は、計算した出力値の配列で
// 満たされるPromiseを返す。
//
// ただし、Promiseを一度にすべて作成して並行処理するのではなく、
// promiseSequence()は一度に1つのPromiseだけを実行する。直前の
// Promiseが満たされるまで、次の値に対してpromiseMaker()を
// 呼び出さない。
function promiseSequence(inputs, promiseMaker) {
    // 変更できるように配列のコピーを作る。
    inputs = [...inputs];

    // この関数をPromiseコールバックとして使用する。
    // この擬似的な再帰呼び出しの魔法で、すべての処理を実現する。
    function handleNextInput(outputs) {
        if (inputs.length === 0) {
            // 入力が残っていない場合、出力値の配列を返す。最後に、
            // このPromiseが満たされ、これより前の「解決されているが
            // まだ満たされていない」Promiseもすべて満たされる。
            return outputs;
        } else {
            // まだ処理する入力値がある場合、Promiseオブジェクトを
            // 返す。新しいPromiseから将来返される値で、現在のPromiseが
            // 解決されるようにする。
            let nextInput = inputs.shift();     // 次の入力値を取得し、
            return promiseMaker(nextInput)      // 次の出力値を計算する。
                // そして、新たな出力値で、出力となる配列を新たに作成する。
                .then(output => outputs.concat(output))
                // この新しい長くなった出力配列を渡して、「再帰処理」を行う。
                .then(handleNextInput);
        }
    }

    // 空の配列で満たされるPromiseから始めて、前記した関数を
    // コールバックとして利用する。
    return Promise.resolve([]).then(handleNextInput);
}

export { fetchFirstFileSize, fetchSumOfFileSizes, fetchSumOfFileSizes2 }