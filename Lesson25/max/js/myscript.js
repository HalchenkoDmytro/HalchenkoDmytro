//#1
let radiusCircle = prompt('Circle radius');
let square = Math.PI*Math.pow(radiusCircle,2);
alert('Square of ​​a circle ' + square.toFixed(3)+ ' square units');

//#2
let distance = prompt('Distance in km');
let time = prompt('Time in hours');
let speed = distance/time;
alert('Recommended speed ' + Math.round(speed) + ' km/h');

//#3
alert('Now currency exchange');
let dollar = prompt('Your dollar amount');
const EXCHANGE = 0.95;
let euro = dollar*EXCHANGE;
alert ('Your euro amount = ' +euro.toFixed(2) ); 
