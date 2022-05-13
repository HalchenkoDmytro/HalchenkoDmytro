const day = Number(prompt('Enter number data'));
const month = Number(prompt('Enter number month'));
const year = Number(prompt('Enter number year'));

console.log(`Day ${day}, month ${month}, year ${year}`);

if (day, month, year) {
  let date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + 1);
  console.log(date);
} else {
console.log("Non");
}