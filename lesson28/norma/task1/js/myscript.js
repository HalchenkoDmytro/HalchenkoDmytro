const num = Number(prompt('Enter number'));
let perNum = null;

if (Number.isInteger(num)) {
  function perfectNum (num) {
    let s = 0;
      for (let i = 1; i <= num/2; i++) {
      if (num % i === 0) {
        s += i; 
      }
    }
    if (s === num) {
     console.log(`Number ${num} perfect`);
    } else {console.log(`Number ${num} non perfect`);}
  }

} else { 
  console.log('Entered not integer number');    
}

perNum = perfectNum(num);