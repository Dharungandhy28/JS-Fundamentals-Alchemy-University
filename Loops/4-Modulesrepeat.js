// ModuleRepeat

/*
 Let's modify our function to return a Repeat alternating between lower and capital case. For example:
*/

function ModuleRepeat(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      str = str + "A";
    } else {
      str = str + "a";
    }
  }
  return str;
}

console.log(ModuleRepeat(10));
