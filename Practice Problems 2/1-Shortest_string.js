// Shortest String

/* 
The function shortestString takes two string arguments: str1 and str2.

Determine which of the two strings is shorter, return that string.
*/

function shortestString(str1, str2) {
  if (str1.length >= str2.length) {
    return str2;
  } else {
    return str1;
  }
}
