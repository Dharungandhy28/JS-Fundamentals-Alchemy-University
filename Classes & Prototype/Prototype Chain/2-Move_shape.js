// Move shape

/* 
Create a function move that will be added to the Shape.prototype. This function should take two arguments: x and y.

It should move the shape's position by adding the corresponding arguments value:
*/

function Shape(x, y) {
  // store x and y in this.position
  this.position = {};
  this.position.x = x;
  this.position.y = y;
}
Shape.prototype.move = function (a, b) {
  this.position.x += a;
  this.position.y += b;
};
