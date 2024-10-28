// Throw Error

/* 
Time to throw your first error! Simply throw a new error inside the throwError function.

If you throw an error properly the tests will catch the error and you will pass the stage!
*/
function throwError() {
  const a = 3;
  if (a === 3) {
    throw new Error("We don't want a to be 3");
  }
}
