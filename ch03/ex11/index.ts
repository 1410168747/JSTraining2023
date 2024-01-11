// Symbol()を使ったケース
const symbol1 = Symbol('symbol');
const symbol2 = Symbol('symbol');

let obj1 = {
  [symbol1]: 'value1',
  [symbol2]: 'value2',
};

console.log(obj1[symbol1]); // "value1"
console.log(obj1[symbol2]); // "value2"


// Symbol()を使ったケース
const symbol3 = Symbol.for('symbol');
const symbol4 = Symbol.for('symbol');

let obj2 = {
  [symbol3]: 'value3',
  [symbol4]: 'value4',// 上書きされる
};

console.log(obj2[symbol3]); // "value4"
console.log(obj2[symbol4]); // "value4"