import { sum } from './stats-util.js';

// デフォルトエクスポート
export default function (data) {
    return data.reduce(sum) / data.length;
}