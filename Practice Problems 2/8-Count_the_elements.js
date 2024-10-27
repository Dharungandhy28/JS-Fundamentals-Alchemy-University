// Count the elements

/* 
Write a function countElements that takes in an array and returns an object a count of each element in the array.
*/

function countElements(elements) {
  let obj = {};
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] in obj) {
      obj[elements[i]] += 1;
    } else {
      obj[elements[i]] = 1;
    }
  }
  return obj;
}
