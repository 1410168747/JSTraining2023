const hundredPointsSymbol = '💯'
console.log(hundredPointsSymbol)
console.log(hundredPointsSymbol.length)
const hundredPointsSymbol2 = '\u{1F4AF}'
console.log(hundredPointsSymbol2)
console.log(hundredPointsSymbol2.length)
const hundredPointsSymbol3 = '\uD83D\uDCAF'
console.log(hundredPointsSymbol3)
console.log(hundredPointsSymbol3.length)

console.log(hundredPointsSymbol===hundredPointsSymbol2)
console.log(hundredPointsSymbol2===hundredPointsSymbol3)
console.log(hundredPointsSymbol3===hundredPointsSymbol)
console.log(hundredPointsSymbol==hundredPointsSymbol2)
console.log(hundredPointsSymbol2==hundredPointsSymbol3)
console.log(hundredPointsSymbol3==hundredPointsSymbol)