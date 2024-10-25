// Ends with x

/* 
Complete the endsWithX function by detecting if the last character in the string is a lower-case x 
or an upper-case X. Return true if the last character is either lower-case x or upper-case X, false otherwise.
*/

function endsWithX(string) {
  let l = string.length;
  if (string[l - 1] === "X") {
    return true;
  } else if (string[l - 1] === "x") {
    return true;
  } else {
    return false;
  }
}
console.log(endsWithX());
