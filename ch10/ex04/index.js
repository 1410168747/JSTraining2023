import { average as mean } from './stats.js';// 名前変更を伴うインポート
import BitSet from './sets.js'; // デフォルトのインポート

console.log(`mean([1, 3, 5, 7, 9]): ${mean([1, 3, 5, 7, 9])}`)     // => 5
const b = new BitSet(4);
b.insert(3);
console.log(`b: ${b}`) // => {3}
console.log(`b.has(3): ${b.has(3)}`) // => true

