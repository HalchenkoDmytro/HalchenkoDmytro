const yourAge = Number(prompt('Enter your age'));

if (yourAge >= 0 && yourAge <= 11) {
  console.log('Child');
} else if (yourAge >= 12 && yourAge <= 17) {
  console.log('Teenager');
} else if (yourAge >=18 && yourAge <= 59) {
  console.log('Grown');  
} else if (yourAge >= 60 && yourAge <= 99) {
  console.log('Pensioner');
} else {
  console.log('Enter the correct age');
}