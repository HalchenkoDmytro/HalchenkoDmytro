const num = parseInt(prompt('Enter your age'));

console.log(`Divisors of number ${num}`);

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}