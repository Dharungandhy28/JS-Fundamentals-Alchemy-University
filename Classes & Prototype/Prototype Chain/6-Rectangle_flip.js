// Rectangle_Flip

/* 
Create a function flip on the rectangle prototype! This function will switch the height and width dimensions of the rectangle. It will take no arguments.
*/

const Shape = require("./Shape");

function Rectangle(x, y, height, width) {
  Shape.call(this, x, y);
  this.height = height;
  this.width = width;
}
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.flip = function () {
  const h = this.height;
  const w = this.width;
  this.height = w;
  this.width = h;
};
