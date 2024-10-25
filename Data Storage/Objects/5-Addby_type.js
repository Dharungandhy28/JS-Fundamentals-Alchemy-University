// Add By Type

/* 
Modify the numberOfPizzas function to only count pizzas 
when the order.type is equal to ORDER_TYPES.PIZZA.
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
