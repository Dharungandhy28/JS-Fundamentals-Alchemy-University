// Type Order

/* 
Let's create an enumeration like CARD_SUITS above. Our enumeration will be named ORDER_TYPES and describe the different types of orders that are possible in our system.

The first type should be PIZZA, with a value of 0.

After that, create at least 2 more options of your choice!
*/

const ORDER_TYPES = require("./orderTypes.js");
function numberOfPizzas(orders) {
  let sum = 0;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].type === ORDER_TYPES.PIZZA) {
      sum += orders[i].pizzas;
    }
  }
  return sum;
}
