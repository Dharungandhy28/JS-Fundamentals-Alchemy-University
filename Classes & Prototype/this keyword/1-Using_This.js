// Using This

/* 
Create a function which retrieves the property name on this.
*/

const obj = {
  name: "Bob",
  getName: function () {
    return this.name;
  },
};
