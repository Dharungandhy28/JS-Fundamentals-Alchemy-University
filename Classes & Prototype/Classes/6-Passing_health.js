// Passing_Health

/* 
Final Task! Let's make both the Hero and Warrior classes have configurable health.

When creating a warrior/hero, we'll pass a number which should be stored as their health:
*/

/* Warrior.js */
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

/* Class Hero */
class Hero {
  constructor(health) {
    this.health = health;
  }
  takeDamage(damage) {
    this.health -= damage;
  }
}
