//#1
let numOne = '0,1';
let newOneNum = parseFloat(numOne.replace(",", "."));
let numTwo = '0,2';
let newTwoNum = parseFloat(numTwo.replace(",", "."));
let numbSum = newOneNum + newTwoNum;
console.log('sum 0,1 + 0,2 = ' + numbSum.toFixed(1));
 
//#2
let firstNumber = '1', secondNumber = 2;
let sum = Number(firstNumber) + secondNumber;
console.log('sum 1 + 2 = ' + sum);

//#3
let flashVolume = prompt('Flash drive volume in GB');
const VOL = 0.82;
console.log(Math.floor(flashVolume/VOL));