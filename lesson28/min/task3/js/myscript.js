const x = Number(prompt('First number '));
const y = Number(prompt('Second number'));

function comNumber (x, y) {
  if (x < y) {
    console.log('-1');
  } else if (x > y) {
    console.log('1');
  } else {
    console.log('0');
  }
}

comNumber(x, y)