const x = parseInt(prompt('Enter a number'));

if (isNaN(x)) {
  console.log('Not a number entered!!!');
} else {
      function factorial(x) {
      if (x <= 1) return 1;
      return x * factorial (x - 1);
    }

    console.log(`Factorial calculation: ${x}! = ${factorial(x)}`);
}