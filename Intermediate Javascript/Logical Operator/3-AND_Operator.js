// ANd operator

/* 
We're going Scuba Diving! 

We need a function that can determine if the diver can breathe. The function canBreathe will be passed three boolean values:

isConnected - Is true if the diver connected to the tank
hasOxygen - Is true if the tank has oxygen
aboveWater - Is true if the diver is still above water
*/

function canBreathe(isConnected, hasOxygen, aboveWater) {
  if (aboveWater || (isConnected && hasOxygen)) {
    return true;
  } else {
    return false;
  }
}
