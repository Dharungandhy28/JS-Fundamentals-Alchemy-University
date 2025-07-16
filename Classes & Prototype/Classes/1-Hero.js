// Hero Js

/* 
Within your constructor function, add a health property to a hero instance and set it to 50.

When creating a new hero, it should work like this:
*/

class Hero {
  constructor(health) {
    this.health = health;
  }
  takeDamage(damage) {
    this.health -= damage;
  }
}
