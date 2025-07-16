// Taking shape

/* 
The Shape function will take two arguments: x and y. Store these values in an object position on the instance (this).
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
