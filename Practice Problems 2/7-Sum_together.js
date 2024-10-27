// Sum Together

/* 
Write a function sumTogether that takes two arrays of numbers and returns a single array with the sum of each corresponding index value.

Assume both arrays are the same length.
*/

function sumTogether(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] += arr2[i];
  }
  return arr1;
}
