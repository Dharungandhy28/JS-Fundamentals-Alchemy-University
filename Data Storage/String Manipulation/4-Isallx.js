// Is All

/* 
Complete the function isAllX to determine if the entire string is made of lower-case x, upper-case X, or a mix of both. 
Return true if they are, false if not.
*/

function isAllX(string) {
  let l = string.length;
  let c = 0;
  for (let i = 0; i < l; i++) {
    if (string[i] === "x" || string[i] === "X") {
      c += 1;
    }
  }
  if (c === l) {
    return true;
  } else {
    return false;
  }
}

console.log(isAllX());
