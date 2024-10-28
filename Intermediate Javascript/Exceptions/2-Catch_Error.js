// Catch Error

/* 
The argument fn is a function that will throw an error when invoked. Catch the error that is thrown when invoking fn.

The tests will pass as long as the function is called and the exception is caught
*/

function catchError(fn) {
  try {
    fn();
  } catch (e) {
    return e;
  }
  return false;
}
