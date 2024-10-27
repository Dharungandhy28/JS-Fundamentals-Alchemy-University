// Palindrome

/* 
Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not.

A palindrome is a word that is spelled the same forwards as it is backwards.
*/

function isPalindrome(string) {
  let str = "";
  for (let i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  if (str === string) {
    return true;
  } else {
    return false;
  }
}
