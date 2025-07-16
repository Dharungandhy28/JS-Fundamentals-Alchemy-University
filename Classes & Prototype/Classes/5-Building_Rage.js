// Building_Rage

/* 

Add a method takeDamage to the Warrior class that will increment rage by 1 each time the warrior takes damage.

It should also invoke takeDamage method on Hero which will inflict the damage on the hero's health.
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
