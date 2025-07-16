// Super_Warrior

/*
Add a rage property to the Warrior. The value of rage will start at 0.
*/
const Hero = require("./Hero");

class Warrior extends Hero {
  constructor(health) {
    super(health);
    this.rage = 0;
  }
  takeDamage(n) {
    super.takeDamage(n);
    this.rage += 1;
  }
}
