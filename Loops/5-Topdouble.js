// TopDouble

/* 
Using whichever loop you'd like, complete the top double function to find the largest double for the value that is below the top.
*/

function topDouble(value, top) {
  let k = value;
  for (let i = value; i < top; i *= 2) {
    if (i * 2 < top) {
      k *= 2;
    }
  }
  return k;
}
console.log(topDouble(1, 5));
