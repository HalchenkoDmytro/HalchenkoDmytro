//#1
let amount = prompt('Your amount');
let price = prompt('Price of one chocolate');
let count = Math.floor(amount/price);
let change = amount-count*price;
console.log('Quantity of chocolates: ' + count);
console.log('Change = ' + change);

//#2
let number = prompt('enter a 3-digit number');
console.log('Input number : ' + number);
let a = Math.trunc(number/100);
let firstRound = number%100;
let b = Math.trunc(firstRound/10);
let c = firstRound%10;
console.log('Output number : ' + c + b + a);