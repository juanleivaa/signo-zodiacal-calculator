//ejercicio del dado pero utilizando clases


class Player {
    constructor(name, lastname, score, victories) {
        this.name = name;
        this.lastname = lastname
        this.score = score;
        this.victories = victories;
    }

    rollDice(faces) {
        let dado1 =  Math.trunc((Math.random()) * faces) + 1;
        let dado2 = Math.trunc((Math.random()) * faces) + 1;
        this.score += dado1 + dado2;
        return 'El resultado del jugador ' + this.name + ' es ' + (dado1 + dado2);
    }
}

class Game {
    constructor (faces , dices , rounds) {
        this.faces = faces
        this.dices = dices
        this.rounds = rounds
    }
}

let player1 = new Player("Juan", "Perez", 0, 0);
let player2 = new Player("Carla", "Gomez", 0, 0);
let player3 = new Player("Jose", "Lopez", 0, 0);

let players = []; 
players.push(player1, player2, player3);

let gameInstance = new Game(10, 2, 20);

for (let i = 0; i < players.length; i++) {
    console.log(players[i].rollDice(gameInstance.faces));
}

console.log(players);