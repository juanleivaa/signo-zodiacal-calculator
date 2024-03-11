
//function constructora

function Pokemon(name,type,powerLevel, attacks) {
    this.name = name;
    this.type = type;
    this.powerLevel = powerLevel;
    this.attacks = attacks;
    this.sayHello = function() {
        return console.log('Hola soy el pokemon ', this.name , ' mi tipo es ', this.type ,' y soy nivel ', this.powerLevel ,'.');
    }
}

var Pokemon1 = new Pokemon("Pikachu", "Electric", 25, "Thunder Shock");
var Pokemon2 = new Pokemon("Charmander", "Fire", 4, "Ember");
var Pokemon3 = new Pokemon("Squirtle", "Water", 7, "Water Gun");
var Pokemon4 = new Pokemon("Bulbasaur", "Grass", 1, "Vine Whip");
var Pokemon5 = new Pokemon("Jigglypuff", "Normal", 39, "Sing");
var Pokemon6 = new Pokemon("Geodude", "Rock", 74, "Rock Throw");
var Pokemon7 = new Pokemon("Gastly", "Ghost", 92, "Lick");

console.log(Pokemon4.sayHello())