class Circle {
  constructor(rad) {
    this.radius = rad;
  }
  get radius() {
    return this.rad;
  }
  set radius(rad) {
    return this.rad = rad;
  }
  get diameter() {
    return this.rad * 2;
  }
  squareCircle() {
    return Math.PI * this.rad * this.rad;
  }
  lengthCircle() {
    return  2 * Math.PI * this.rad;
  }
}

let circle = new Circle(4);
console.log('Circle radius = ' + circle.radius);
console.log('Circle diameter = ' + circle.diameter);
console.log('Area of ​​a circle = ' + circle.squareCircle().toFixed(3));
console.log('Length of a circle = ' + circle.lengthCircle().toFixed(3));