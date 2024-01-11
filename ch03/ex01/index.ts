const pos = Number.POSITIVE_INFINITY;
const neg = Number.NEGATIVE_INFINITY
const nan = Number.NaN;

console.log(`Number.POSITIVE_INFINITY + Number.POSITIVE_INFINITY = ${Number.POSITIVE_INFINITY + Number.POSITIVE_INFINITY}`);// POSITIVE_INFINITY
console.log(`Number.POSITIVE_INFINITY - Number.POSITIVE_INFINITY = ${Number.POSITIVE_INFINITY - Number.POSITIVE_INFINITY}`);// NaN
console.log(`Number.POSITIVE_INFINITY * Number.POSITIVE_INFINITY = ${Number.POSITIVE_INFINITY * Number.POSITIVE_INFINITY}`);// POSITIVE_INFINITY
console.log(`Number.POSITIVE_INFINITY / Number.POSITIVE_INFINITY = ${Number.POSITIVE_INFINITY / Number.POSITIVE_INFINITY}`);// NaN
console.log(`Number.POSITIVE_INFINITY + Number.NEGATIVE_INFINITY = ${Number.POSITIVE_INFINITY + Number.NEGATIVE_INFINITY}`);// NaN
console.log(`Number.POSITIVE_INFINITY - Number.NEGATIVE_INFINITY = ${Number.POSITIVE_INFINITY - Number.NEGATIVE_INFINITY}`);// POSITIVE_INFINITY
console.log(`Number.POSITIVE_INFINITY * Number.NEGATIVE_INFINITY = ${Number.POSITIVE_INFINITY * Number.NEGATIVE_INFINITY}`);// NEGATIVE_INFINITY
console.log(`Number.POSITIVE_INFINITY / Number.NEGATIVE_INFINITY = ${Number.POSITIVE_INFINITY / Number.NEGATIVE_INFINITY}`);// NaN
console.log(`Number.POSITIVE_INFINITY + Number.NaN = ${Number.POSITIVE_INFINITY + Number.NaN}`);// NaN
console.log(`Number.POSITIVE_INFINITY - Number.NaN = ${Number.POSITIVE_INFINITY - Number.NaN}`);// NaN
console.log(`Number.POSITIVE_INFINITY * Number.NaN = ${Number.POSITIVE_INFINITY * Number.NaN}`);// NaN
console.log(`Number.POSITIVE_INFINITY / Number.NaN = ${Number.POSITIVE_INFINITY / Number.NaN}`);// NaN

console.log(`Number.NEGATIVE_INFINITY - Number.POSITIVE_INFINITY = ${Number.NEGATIVE_INFINITY - Number.POSITIVE_INFINITY}`);// NEGATIVE_INFINITY
console.log(`Number.NEGATIVE_INFINITY / Number.POSITIVE_INFINITY = ${Number.NEGATIVE_INFINITY / Number.POSITIVE_INFINITY}`);// NaN
console.log(`Number.NEGATIVE_INFINITY + Number.NEGATIVE_INFINITY = ${Number.NEGATIVE_INFINITY + Number.NEGATIVE_INFINITY}`);// NEGATIVE_INFINITY
console.log(`Number.NEGATIVE_INFINITY - Number.NEGATIVE_INFINITY = ${Number.NEGATIVE_INFINITY - Number.NEGATIVE_INFINITY}`);// NaN
console.log(`Number.NEGATIVE_INFINITY * Number.NEGATIVE_INFINITY = ${Number.NEGATIVE_INFINITY * Number.NEGATIVE_INFINITY}`);// POSITIVE_INFINITY
console.log(`Number.NEGATIVE_INFINITY / Number.NEGATIVE_INFINITY = ${Number.NEGATIVE_INFINITY / Number.NEGATIVE_INFINITY}`);// NaN
console.log(`Number.NEGATIVE_INFINITY + Number.NaN = ${Number.NEGATIVE_INFINITY + Number.NaN}`);// NaN
console.log(`Number.NEGATIVE_INFINITY - Number.NaN = ${Number.NEGATIVE_INFINITY - Number.NaN}`);// NaN
console.log(`Number.NEGATIVE_INFINITY * Number.NaN = ${Number.NEGATIVE_INFINITY * Number.NaN}`);// NaN
console.log(`Number.POSITIVE_INFINITY / Number.NaN = ${Number.NEGATIVE_INFINITY / Number.NaN}`);// NaN

console.log(`Number.NaN - Number.POSITIVE_INFINITY = ${Number.NaN - Number.POSITIVE_INFINITY}`);// NaN
console.log(`Number.NaN / Number.POSITIVE_INFINITY = ${Number.NaN / Number.POSITIVE_INFINITY}`);// NaN
console.log(`Number.NaN - Number.NEGATIVE_INFINITY = ${Number.NaN - Number.NEGATIVE_INFINITY}`);// NaN
console.log(`Number.NaN / Number.NEGATIVE_INFINITY = ${Number.NaN / Number.NEGATIVE_INFINITY}`);// NaN
console.log(`Number.NaN + Number.NaN = ${Number.NaN + Number.NaN}`);// NaN
console.log(`Number.NaN - Number.NaN = ${Number.NaN - Number.NaN}`);// NaN
console.log(`Number.NaN * Number.NaN = ${Number.NaN * Number.NaN}`);// NaN
console.log(`Number.NaN / Number.NaN = ${Number.NaN / Number.NaN}`);// NaN