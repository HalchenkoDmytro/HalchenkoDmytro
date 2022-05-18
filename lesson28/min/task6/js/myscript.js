const hight = Number(prompt('Enter Hight:'));
const width = Number(prompt('Enter Width:'));
let sq = null;

function square(hight, width) {
  if (width === 0) {
      fig = 'Quadrat';
      return hight*hight;
  } else if(hight === 0) {
      fig = 'Quadrat'
      return width*width;
  } else {
      fig = 'Rectangle'
      return hight*width;
  }
}
 
sq = square (hight, width);
console.log(`Square ${fig} = ${sq}`);
