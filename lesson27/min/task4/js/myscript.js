const x1 = parseInt(prompt('Enter the first number'));
const x2 = parseInt(prompt('Enter the second number'));
let sum = 0;

let x = Math.abs(x1);
let y = Math.abs(x2);

while (y) {
  let tmp = y;
  y = x % y;
  x = tmp;
}

console.log(`The least common divisor of numbers ${x1} and ${x2} is ${x}`);