const isDay = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let toDay = 0;

while (confirm(`${isDay[toDay]}. Want to see the next day?`)) {
  toDay = (toDay + 1) % isDay.length;
} 
alert('Good By!');