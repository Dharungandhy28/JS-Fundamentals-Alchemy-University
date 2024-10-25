// Sum Even

/* 
Given an array, find the sum of all even values inside the array
 and return it.
*/

function sumEven(array) {
  return array
    .filter((num) => num % 2 === 0)
    .reduce((acc, num) => acc + num, 0);
}
