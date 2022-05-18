const num1 = parseInt(prompt('Enter first number'));
const num2 = parseInt(prompt('Enter second number'));
const num3 = parseInt(prompt('Enter third number'));

function concatNum (num1, num2, num3) {  
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log('Incorrect data entered')
  } else {
    num1.toString(); num2.toString(); num3.toString();
    console.log (`Entered mumber: ${num1}, ${num2}, ${num3}: => ` + num1 + num2 + num3);
  }
}
concatNum (num1, num2, num3);





