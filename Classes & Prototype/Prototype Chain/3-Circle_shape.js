// Circle shape

/* 
In Circle.js, you'll need to do two things:

1. Pass the arguments to Shape via call.
2. Store radius on our Circle instance. You can do this exactly how we stored position on the Shape class.
*/

const Shape = require("./Shape");

function Circle(x, y, radius) {
  Shape.call(this, x, y /* pass arguments to shape */);
  // store radius on this
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
