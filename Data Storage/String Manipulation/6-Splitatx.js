// Split at x

/* 
Let's find the longer half of the string before and after the x!

First, you'll need to find the lower-case x.
Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.
Take the longer string and return it!
*/

function splitAtX(string) {
  let x = string.indexOf("x");
  let b = string.slice(0, x);
  let c = string.slice(x + 1);

  if (b.length > c.length) {
    return b;
  } else {
    return c;
  }
}
