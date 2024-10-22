// Else If

/* Let's update the canAccess function to allow access if the user has either a subscription or a free trial.
If either purchasedSubscription or freeTrial are true, return true. Otherwise return false
*/

function canAccess(purchasedSubscription, freeTrail) {
  if (purchasedSubscription) {
    return true;
  } else if (freeTrail) {
    return true;
  } else {
    return false;
  }
}

console.log(canAccess(10, 50));
