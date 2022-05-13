const str = prompt('Enter 5-digits number');

if (isNaN(str)) {
  console.log('Not a number entered');
} else { 
    num = Number(str);
      
    let i = 0, len = str.length - 1, palindrom = true;

    if ((num >= 10000) && (num <= 99999)) {
      while (i <= len - i) {
      palindrom = palindrom && (str.charAt (i) == str.charAt(len - i));
      i++;
    }
    console.log(`Entered number ${str} ` + (palindrom ? '': 'not ') + 'palindrom' );
    } else {
      console.log('Entered not 5-digits number');
    }
}