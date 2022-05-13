let x1 = parseInt(prompt('Enter the beginning of the interval'));
const x2 = parseInt(prompt('Enter the end of the interval'));
let sum = 0;

if (x1 < x2) {   
  while (x1 <= x2) {
    sum += x1;
    x1++;
  } 
  console.log(`The sum of the range numbers = ${sum}`);
} else {
  while (x1 >= x2) {
    sum += x1;
    x1--;
  } 
  console.log(`The sum of the range numbers = ${sum}`);
}
  

