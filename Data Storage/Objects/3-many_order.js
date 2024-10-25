// Many orders

/*
Given an array of pizza orders, return the total number of pizzas ordered.

The orders are an array of objects, each with pizzas
*/

function numberOfPizzas(orders) {
  let sum = 0;
  for (let i = 0; i < orders.length; i++) {
    sum += orders[i].pizzas;
  }
  return sum;
}
