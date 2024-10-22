// Greater Than

/*  Given two arguments, first and last, determine which one is greater.
If first is greater than last, return first!
If last is greater than first, return last!
If they are equal, do not return anything.
*/

function greater(first, last) {
  if (first > last) {
    return first;
  } else if (last > first) {
    return last;
  } else if (first === last) {
    return;
  }
}

console.log(greater(12, 18));
