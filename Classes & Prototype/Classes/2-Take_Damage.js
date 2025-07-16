// Take_Damage

/* 
Add a method takeDamage to the hero class. This method should take one number argument representing the damage. This number should be directly subtracted from the hero's health.
*/

class Hero {
  constructor(health) {
    this.health = health;
  }
  takeDamage(damage) {
    this.health -= damage;
  }
}
