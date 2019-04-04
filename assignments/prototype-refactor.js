/* 
Prototype Refactor
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/
class GameObject{
      constructor(attributes){
            this.createdAt = attributes.createdAt,
            this.name = attributes.name,
            this.dimensions = attributes.dimensions
      }

      destroy(){
            return `${this.name} was removed from the game.`
      }
};  
/*
=== CharacterStats ===
*/
class CharacterStats extends GameObject{
      constructor(charAttr){
            super(charAttr);
            this.healthPoints = charAttr.healthPoints
      }
      takeDamage() {
            return `${this.name} took damage.`
      }
};
/*
=== Humanoid ===
*/
class Humanoid extends CharacterStats{
      constructor(humAttr){
            super(humAttr);
            this.team = humAttr.team,
            this.weapons = humAttr.weapons,
            this.language = humAttr.language
      }
         
      greet(){
            return `${this.name} offers a greeting in ${this.language}`;
      }

      annoy() {
            return `${this.name} is tone-deaf but still sings to every song.`
      }

      taunt(prey) {
      return `${this.name} thwarts ${prey.name}'s willpower by bringing in donuts every morning. ${prey.name}'s width increases to ${prey.dimensions.width}!`
      }

      pray() {
      return `${this.name} offers to pray for you, making your soul cringe.`
      }
}
/* 
=== Villan ===      
*/
class Villan extends Humanoid{
      constructor(vilAttr){
            super(vilAttr);
            this.scheme = vilAttr.scheme
      }
    
      avoid(prey) {
            return `${this.name} hides behind ${this.weapons[2]} instead of creating meaningful boundaries. ${prey.name} must relinquish native culture, customs and cease speaking ${prey.language}.`
      }

      distract(prey) {
            return `${this.name} uses ${this.weapons[1]} to distract ${prey.name}. ${prey.name} walks away confused, with ${[prey.healthPoints - 2]} health points.`
      }

      harass() {
            return `${this.name} uses ${this.weapons[1]} to marginalize the foreign or female.`
      }

      influence() {
            return `${this.name} ${this.scheme[0]} by placing bought allies in powerful positions. `
      }

      disgrace() {
            return `${this.name} ${this.scheme[1]} and gets away with it???`
      }
}
/*
=== CHARACTERS ===
*/  
const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
            length: 2,
            width: 1,
            height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
            'Staff of Shamalama',
      ],
      language: 'The Old Words',
});

const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
            length: 2,
            width: 2,
            height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
            'Giant Sword',
            'Shield',
      ],
      language: 'The Common Tongue',
});

const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
            length: 1,
            width: 2,
            height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
            'Bow',
            'Dagger',
      ],
      language: 'Elvish',
});

const karen = new Humanoid ({
      createdAt: new Date(),
      dimensions: {
            length: 2,
            witdh: 4,
            height: 1,
      },
      healthPoints: 8,
      name: 'Karen',
      team: 'New England Patriots',
      weapons: [
            'Crucifix',
            'Empty Calories',
      ],
      language: 'Mom'
})

const richWhiteNarcissist = new Villan ({
      createdAt: new Date(),
      dimentions: {
            length: 3,
            width: 3,
            height: 3,
      },
      healthPoints : 30,
      name: 'Drumpf',
      team: 'America',
      weapons: [
            'Money',
            'The Best Words',
            'Walls',
      ],
      language: 'American',
      scheme: [
            'Stacks the Deck',
            'Lies and Denies',
      ]
});
/*
=== COMMANDS ===
*/ 
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log(karen.team);
console.log(karen.greet());
console.log(karen.annoy());
console.log(karen.taunt(archer));
console.log(karen.pray());

console.log(richWhiteNarcissist.avoid(mage));
console.log(richWhiteNarcissist.distract(karen));
console.log(richWhiteNarcissist.harass());
console.log(richWhiteNarcissist.influence());
console.log(richWhiteNarcissist.disgrace());