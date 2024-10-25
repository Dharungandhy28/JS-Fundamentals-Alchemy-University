// Unique

/* 
Write a function that will take an array of numbers 
and return a new array that only contains unique numbers.
*/

function unique(array) {
  return [...new Set(array)];
}
