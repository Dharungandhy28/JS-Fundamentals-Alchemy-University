// Half Value

/*
The function halfValue takes an array of numbers. It should return a new array with all the original values halved.

Odd numbers should be rounded up to the nearest whole number.
*/

function halfValue(numbers) {
  let numbers2 = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers2[i] = Math.ceil(numbers[i] / 2);
  }
  return numbers2;
}
