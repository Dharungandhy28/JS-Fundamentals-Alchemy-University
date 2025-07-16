// Rectangle

/* 
Complete the Rectangle function and link its prototype to Shape's prototype.

This will be similar to our Circle! Rectangle will be a Shape plus a couple properties: height and width. We'll want to store these on the Rectangle instance.
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
