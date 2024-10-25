// Start with X

/* 
Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.
If the first character is x return true. If not, return false.
*/

function startsWithX(string) {
  if (string[0] === "x") {
    return true;
  } else if (string[0] === "X") {
    return true;
  } else {
    return false;
  }
}
console.log(startsWithX("X"));
