

function ejercicio1() {

    for (let i = 0 ; i<=9 ; i = i + 1 ) {
  
        document.write( i)
    
    }
    
}

function ejercicio2() {
    for(let i = 100; i<200 ; i= i+1){

        document.write( " ",i ," " )
    
    }
}

function ejercicio3() {
    for (let i = 5 ; i<=20 ; i= i+3 ){
        document.write( " ", i , " ")
    }
}


function ejercicio4() {
    let numero = parseInt(prompt("Ingrese un número entero positivo:"));

    // Verificar si el número ingresado es un entero positivo
    if (Number.isInteger(numero) && numero > 0) {
        let limite = numero * 2 - 1;
    
        // Imprimir los números correlativos
        for (let i = numero; i <= limite; i++) {
            document.write(" ",i," ");
        }
    } else {
        document.write("El número ingresado no es un entero positivo.");
    }
}

function ejercicio5() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de números a sumar:"));
    let suma = 0;
    let mensaje = "";
    
    // Verificar si la cantidad ingresada es un número válido
    if (Number.isInteger(cantidad) && cantidad > 0) {
        for (let i = 0; i < cantidad; i++) {
            let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
            if (!isNaN(numero)) {
                suma += numero;
            } else {
                mensaje += "El valor ingresado para el número " + (i + 1) + " no es un número válido.<br>";
            }
        }
    
        mensaje += "La suma de los números ingresados es: " + suma + "<br>";
    } else {
        mensaje = "La cantidad ingresada no es un número válido.<br>";
    }
    
    document.write(mensaje);
}

function ejercicio6() {
    let frase = prompt("Ingrese una frase:");
    let vocales = "aeiou";
    let vocalesEncontradas = [];
    
    // Convertir la frase a minúsculas para simplificar la comparación
    frase = frase.toLowerCase();
    
    // Iterar sobre cada caracter de la frase
    for (let i = 0; i < frase.length; i++) {
        let caracter = frase.charAt(i);
        // Verificar si el caracter es una vocal y no está en la lista de vocales encontradas
        if (vocales.includes(caracter) && !vocalesEncontradas.includes(caracter)) {
            vocalesEncontradas.push(caracter);
        }
    }
    
    // Imprimir el listado de vocales encontradas
    document.write("Vocales encontradas en la frase:");
    for (let vocal of vocalesEncontradas) {
        document.write(" " + vocal);
    }
}

function ejercicio7() {
    let frase = prompt("Ingrese una frase:");
    let vocales = "aeiouAEIOU";
    let cantidadVocales = 0;
    
    // Iterar sobre cada caracter de la frase
    for (let i = 0; i < frase.length; i++) {
        let caracter = frase.charAt(i);
        // Verificar si el caracter es una vocal
        if (vocales.includes(caracter)) {
            cantidadVocales++;
        }
    }
    
    // Imprimir la cantidad de vocales encontradas
    document.write("La cantidad de vocales en la frase es: " + cantidadVocales);
}

function ejercicio8() {
    let suma = 0;

    for (let i = 0; i <= 100; i++) {
        suma += i;
    }
    
    document.write("La sumatoria de los números del 0 al 100 es: " + suma);
}


function ejercicio9(){
    let suma = 0;

    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0) {
            suma += i;
        }
    }
    
    document.write("La sumatoria de los múltiplos de 3 del 0 al 100 es: " + suma);
}


function ejercicio10() {

    let resultados = [];
    let ganador;
    let maximo= 0;
    let jugadores = ["Juan","Carla", "Jose", "Lucia"];

    //i hace referencia a la rondas de tiros
    for(let i = 1 ; i<= 5; i++) {



        //j hace referncia a cada jugador
        for (let j= 0 ; j < jugadores.length ; j++ ) {

            if(resultados[j] == undefined) { 

                resultados[j]= 0; 
            } 



            let dadoUno = Math.trunc((Math.random()) * 6) + 1;
            let dadoDos= Math.trunc((Math.random()) * 6) + 1;
            console.log('A ',jugadores[j] ,' Le salio un: ' , dadoUno ,' en el primer dado')
            console.log('A ',jugadores[j] ,' Le salio un: ' , dadoDos ,' en el primer dado')
            resultados[j] += dadoDos + dadoUno
            console.log('Resultado ', resultados[j])

        }


    }

    console.log('Resultados ', resultados)

    for (let i= 0 ; i< jugadores.length; i++ ){
    
        console.log('El judador ' , jugadores[1], ' obtuvo ', resultados[i] )
    
        if(maximo < resultados[i] ) {
    
            maximo = resultados[i];
            ganador = jugadores[i]
        }
    
    }
    
    console.log('el ganador es: ', ganador, 'con un puntaje de: ', maximo )    



}





































