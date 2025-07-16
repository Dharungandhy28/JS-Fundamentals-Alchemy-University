// Warrior

/* 
In the new file, Warrior.js, modify the Warrior to extend the Hero class.
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
