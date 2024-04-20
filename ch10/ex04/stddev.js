import { sum, square } from './stats-util.js';

// 通常のエクスポート
export function stddev(data) {
    let m = mean(data);
    return Math.sqrt(
        data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
    );
}