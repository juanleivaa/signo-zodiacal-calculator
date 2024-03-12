// let div = document.getElementById('elemento');
// // let pEl = document.getElementsByName('p');
// // let pQuery = document.querySelectorAll('button.btn');
// // let pElClass = document.getElementsByClassName('btn');
// // console.log(pElClass);


// //aqui no se puede hacer esto de meter etiquetas html
// // div.appendChild('<p>Append text</p>');

// //Hay que CREAR un nodo
// let p = document.createElement('p');

// //para agregar texto al nodo
// p.textContent = 'Append text';
// //ó (este no hace falta crearle un nodo, es decir podemos meterle etiuquetas; mas comodo)
// p.innerHTML = '<strong>Append text</strong>';


// //literal le metemos un parrafo al div
// div.appendChild(p);



// //me devuelve un array de elementos que concide con el parametro al metodo
// let pQuery = document.getElementsByClassName('query');
// //Le agrego una clase
// pQuery[1].classList.add('btn' , 'btn-primary' , 'p-4');
// console.log(pQuery[1].parentElement) //text y span

// let buttons = document.getElementsByClassName ('btn');
// console.log('Botones: ',buttons);

// for (btn in buttons) {

// }





//===================================
//===FUNCION JUEGO DEL DADO===========
//====================================
function startGame(){ 
    let playerNames = [];
    for (let i = 1; i <= 3; i++) {
        let name = prompt(`Ingrese el nombre del Jugador ${i} (máximo 10 letras)`);
        while (name === '' || name.length > 10) {
            name = prompt(`Ingrese el nombre del Jugador ${i} (máximo 10 letras)`);
        }
        playerNames.push(name);
        document.getElementById(`player${i}`).innerText = `Tirar: ${name}`;
    }

    let players = playerNames.map((name, index) => {
        return { name: name, points: 0, round: 1 };
    });

    let currentPlayer = 0;
    let currentRound = 1;

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }


    let gameOver = false; // Variable para controlar si el juego ha terminado


    function playTurn() {
        if (gameOver) return; // Salir de la función si el juego ha terminado
        let player = players[currentPlayer];
        let dice1 = rollDice();
        let dice2 = rollDice();
        player.points += dice1 + dice2;
        console.log(`${player.name}: Dado 1: ${dice1}, Dado 2: ${dice2}, Puntos totales: ${player.points}`);
        currentPlayer = (currentPlayer + 1) % players.length;
        if (currentPlayer === 0) {
            currentRound++;
        }
        updateButtons();
        if (currentRound >= 5) {
            displayPlayers(); // Mostrar resultados de la ronda 5
            endGame(); // Mostrar mensaje de ganador y reiniciar juego
        }
    }
    

    function updateButtons() {
        for (let i = 0; i < players.length; i++) {
            let button = document.getElementById(`player${i + 1}`);
            button.disabled = (currentRound === 5);
        }
    }
    

    function endGame() {
        let winner = players.reduce((prev, current) => (prev.points > current.points) ? prev : current);
        setTimeout(() => {
            alert(`El ganador es: ${winner.name}. Se reiniciara el juego`);
            setTimeout(() => {
                location.reload(); // Reiniciar el juego
            }, 10); // Esperar 2 segundos antes de recargar la página
        }, 350); // Esperar 1 segundo antes de mostrar el mensaje de ganador
    }
    
    
    function displayPlayers() {
        let playersDiv = document.getElementById('players');
        playersDiv.innerHTML = '';
        let roundTitle = document.createElement('h1');
        roundTitle.innerText = `ROUND: ${currentRound}`;
        playersDiv.appendChild(roundTitle);
        let row = document.createElement('div');
        row.classList.add('row');
        players.forEach((player, index) => {
            let playerDiv = document.createElement('div');
            playerDiv.classList.add('col');
            playerDiv.classList.add('player');
    
            // Agregar la foto de perfil
            let profileImg = document.createElement('img');
            profileImg.src = `/css/assets/player${index + 1}.jpg`; // Ruta de la imagen
            profileImg.alt = `Foto de perfil de ${player.name}`;
            profileImg.width = 50; // Ancho de la imagen
            profileImg.height = 50; // Alto de la imagen
            playerDiv.appendChild(profileImg);
    
            let playerInfo = document.createElement('div');
            playerInfo.innerHTML = `<h3>${player.name}</h3><p>Puntos: ${player.points}</p>`;
            playerDiv.appendChild(playerInfo);
    
            let button = document.createElement('button');
            button.id = `player${index + 1}`;
            button.classList.add('btn');
            button.classList.add('mt-4');
            button.classList.add('btn-outline-dark');
            button.disabled = (index !== currentPlayer || currentRound > 5 || player.round == 5); // Se deshabilita en la ronda 5 o más
            button.innerText = `Tirar: ${player.name}`;

            if (index === currentPlayer && currentRound <= 5) {
                button.classList.remove('btn-outline-dark');
                button.classList.add('btn-dark');
            }
            button.addEventListener('click', function() {
            if (currentPlayer === index && currentRound <= 5) {
                    playTurn();
                    displayPlayers();
            }

            });
            playerDiv.appendChild(button);
            row.appendChild(playerDiv);
        });
        playersDiv.appendChild(row);
    }
    
    
    
    
    document.getElementById('start').addEventListener('click', function() {
        document.getElementById('player1').style.display = 'inline-block';
        document.getElementById('player2').style.display = 'inline-block';
        document.getElementById('player3').style.display = 'inline-block';
        document.getElementById('start').style.display = 'none';
    });

    document.getElementById('player1').addEventListener('click', function() {
        if (currentPlayer === 0 && currentRound <= 5) {
            playTurn();
            displayPlayers();
        }
    });

    document.getElementById('player2').addEventListener('click', function() {
        if (currentPlayer === 1 && currentRound <= 5) {
            playTurn();
            displayPlayers();
        }
    });

    document.getElementById('player3').addEventListener('click', function() {
        if (currentPlayer === 2 && currentRound <= 5) {
            playTurn();
            displayPlayers();
        }
    });

    document.getElementById('start').style.display = 'none';
    localStorage.setItem('startButtonClicked', 'true');

    displayPlayers();
    updateButtons();
}





//=========================================================
//=PARA QUE EL BOTON SE VAYA UNA VEZ INICILIZADO EL JUEGO==
//=========================================================
window.onload = function() {
    // Verificar si se hizo clic en el botón 'start' anteriormente
    const startButtonClicked = localStorage.getItem('startButtonClicked');
    if (startButtonClicked) {
        document.getElementById('start').style.display = 'none';
    }
};

// Eliminar el estado almacenado en localStorage al recargar la página
window.addEventListener('beforeunload', function() {
    localStorage.removeItem('startButtonClicked');
});