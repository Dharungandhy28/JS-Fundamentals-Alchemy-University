// Binding this

/* 
Create a new function from thisName that is bound to an object with the name "Bob".

Export this new function instead of thisName.

When it is called, it should return "Bob":
*/

function thisName() {
  return this.name;
}
const newFunction = thisName.bind({ name: "Bob" });
