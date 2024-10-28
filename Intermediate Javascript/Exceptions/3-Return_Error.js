// Return Error

/* 
Modify catchError to return the error if one is thrown.

If no error is thrown, return false.
*/

function catchError(fn) {
  try {
    fn();
  } catch (e) {
    return e;
  }
  return false;
}