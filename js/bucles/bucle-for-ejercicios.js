function ejercicio1() {
    for (let i = 0; i <= 9; i++) {
        console.log(i);
    }
}

function ejercicio2() {
    for (let i = 100; i < 200; i++) {
        console.log(i);
    }
}

function ejercicio3() {
    for (let i = 5; i <= 20; i += 3) {
        console.log(i);
    }
}

function ejercicio4() {
    let numero = parseInt(prompt("Ingrese un número entero positivo:"));

    if (Number.isInteger(numero) && numero > 0) {
        let limite = numero * 2 - 1;
        for (let i = numero; i <= limite; i++) {
            console.log(i);
        }
    } else {
        console.log("El número ingresado no es un entero positivo.");
    }
}

function ejercicio5() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de números a sumar:"));
    let suma = 0;

    if (Number.isInteger(cantidad) && cantidad > 0) {
        for (let i = 0; i < cantidad; i++) {
            let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
            if (!isNaN(numero)) {
                suma += numero;
            } else {
                console.log("El valor ingresado para el número " + (i + 1) + " no es un número válido.");
            }
        }
        console.log("La suma de los números ingresados es: " + suma);
    } else {
        console.log("La cantidad ingresada no es un número válido.");
    }
}

function ejercicio6() {
    let frase = prompt("Ingrese una frase:");
    let vocales = "aeiou";
    let vocalesEncontradas = [];
    
    frase = frase.toLowerCase();
    
    for (let i = 0; i < frase.length; i++) {
        let caracter = frase.charAt(i);
        if (vocales.includes(caracter) && !vocalesEncontradas.includes(caracter)) {
            vocalesEncontradas.push(caracter);
        }
    }
    
    console.log("Vocales encontradas en la frase:", vocalesEncontradas.join(" "));
}

function ejercicio7() {
    let frase = prompt("Ingrese una frase:");
    let vocales = "aeiouAEIOU";
    let cantidadVocales = 0;
    
    for (let i = 0; i < frase.length; i++) {
        let caracter = frase.charAt(i);
        if (vocales.includes(caracter)) {
            cantidadVocales++;
        }
    }
    
    console.log("La cantidad de vocales en la frase es:", cantidadVocales);
}

function ejercicio8() {
    let suma = 0;
    for (let i = 0; i <= 100; i++) {
        suma += i;
    }
    console.log("La sumatoria de los números del 0 al 100 es:", suma);
}

function ejercicio9() {
    let suma = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0) {
            suma += i;
        }
    }
    console.log("La sumatoria de los múltiplos de 3 del 0 al 100 es:", suma);
}

function ejercicio10() {
    let resultados = [];
    let ganador;
    let maximo = 0;
    let jugadores = ["Juan", "Carla", "Jose", "Lucia"];

    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j < jugadores.length; j++) {
            if (resultados[j] == undefined) {
                resultados[j] = 0;
            }
            let dadoUno = Math.trunc((Math.random()) * 6) + 1;
            let dadoDos = Math.trunc((Math.random()) * 6) + 1;
            console.log('A ', jugadores[j], ' Le salio un: ', dadoUno, ' en el primer dado');
            console.log('A ', jugadores[j], ' Le salio un: ', dadoDos, ' en el segundo dado');
            resultados[j] += dadoDos + dadoUno;
            console.log('Resultado ', resultados[j]);
        }
    }

    console.log('Resultados ', resultados);

    for (let i = 0; i < jugadores.length; i++) {
        console.log('El judador ', jugadores[i], ' obtuvo ', resultados[i]);
        if (maximo < resultados[i]) {
            maximo = resultados[i];
            ganador = jugadores[i];
        }
    }

    console.log('el ganador es: ', ganador, ' con un puntaje de: ', maximo);
}
