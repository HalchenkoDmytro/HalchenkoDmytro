/* let x1 = parseInt(prompt('Enter the beginning of the interval'));
const x2 = parseInt(prompt('Enter the end of the interval'));
let sum = 0; */
let i = 1, pos = 0, neg =0, zero = 0, evenNum = 0, oddNum = 0;

while (i <= 10) {
  let num = parseInt(prompt( `Enter number #${i}`));
  if (num > 0) {
    pos++
  } else if (num < 0) {
    neg++;
  } else {
    zero++;
  }
  i++;
  if (num % 2 === 0) {
    evenNum++;
  } else {
    oddNum++;
  }
  console.log(`Entered number ${num}`);
}
console.log('<----Result---->');
console.log (`Positive numbers ${pos}`);
console.log (`Negative numbers ${neg}`);
console.log (`Zero numbers ${zero}`);
console.log (`Even numbers ${evenNum}`);
console.log (`Odd numbers ${oddNum}`);