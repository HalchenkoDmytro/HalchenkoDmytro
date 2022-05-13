const num = Number(prompt('Enter amount'));
let sum;
const dis3 = 3, dis5 = 5, dis7 = 7;

console.log (`Entered amount: ${num}`);

if ((num > 0) && (num < 200)) {
  console.log(`No discount, up to ${num}`);
} else if ((num >= 200) && (num < 300)) {
  sum = num*(1 - dis3/100);
  console.log(`Discount ${dis3}%, up to ${sum}`);
} else if ((num >= 300) && (num < 500)) {
  sum = num*(1 - dis5/100);
  console.log(`Discount ${dis5}%, up to ${sum}`);
} else if (num >= 500) {
  sum = num*(1 - dis7/100);
  console.log(`Discount ${dis7}%, up to ${sum}`);
} else {
  console.log ('Incorrect values entered');
}