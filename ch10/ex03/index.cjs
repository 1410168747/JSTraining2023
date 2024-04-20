const { mean } = require('./stats.cjs')
const { BitSet } = require('./sets.cjs');

console.log(`mean([1, 3, 5, 7, 9]): ${mean([1, 3, 5, 7, 9])}`)     // => 5
const b = new BitSet(4);
b.insert(3);
console.log(`b: ${b}`) // => {3}
console.log(`b.has(3): ${b.has(3)}`) // => true
