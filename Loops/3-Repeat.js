// Repeat

/* 
Let's create a function Repeat which will take in a value n and return a string with the letter "a" repeated that many times. For example:
*/

function Repeat(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    if (i < n) {
      str += "a";
    } else {
      str += "a";
    }
  }
  return str;
}

console.log(Repeat(3));
