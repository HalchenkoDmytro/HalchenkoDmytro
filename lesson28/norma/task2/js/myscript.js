const num1 = parseInt(prompt('Enter min number'));
const num2 = parseInt(prompt('Enter max number'));

function perfectNum (num) {
  let s = 0;
    for (let i = 1; i <= num/2; i++) {
    if (num % i === 0) {
      s += i; 
    }
  }
  if (s === num) {
   console.log(`${num}`);
  }
}

function searchPerfNum(num1, num2) {
  j = num1;
  while (j <= num2) {
    console.log(` ${perfectNum(j)}`);
    j++;
  }
}
console.log('Perfect numbers is: ');
searchPerfNum (num1, num2);