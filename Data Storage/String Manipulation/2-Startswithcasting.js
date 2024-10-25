// Start with casting

/* 
Let's update our startsWithX function to return true for an upper-case X as well as a lower-case x.
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
console.log(startsWithX("x"));
