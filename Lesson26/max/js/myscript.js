//#1
let amount = prompt('Amount ');
const PERCENT = 0.05; MONTH = 2;
deposite = (amount*PERCENT/12)*MONTH;
console.log('deposit amount = ' + deposite.toFixed(2));

//#2
const ZERO = 0, TWO = 2; THREE = 3;
let expressionOne = TWO && ZERO && THREE;
console.log(' 2 && 0 && 3 will be  ' + expressionOne);
let expressionTwo = TWO || ZERO || THREE;
console.log('2 || 0 || 3 will be  ' + expressionTwo);
let expressionThree = TWO && ZERO || THREE;
console.log('2 && 0 || 3 will be  ' + expressionThree);