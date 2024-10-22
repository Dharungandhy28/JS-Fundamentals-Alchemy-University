// Factorial

/* 
Taking in some integer value n, find the factorial for that number and return it.
*/

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));
