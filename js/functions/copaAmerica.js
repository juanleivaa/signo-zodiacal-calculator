// let copa = [
//     "Uruguay", "Uruguay", "Uruguay", "Uruguay", "Uruguay", "Uruguay", "Argentina", "Argentina", "Uruguay", "Perú",
//     "Uruguay", "Argentina", "Uruguay", "Argentina", "Argentina", "Brasil", "Argentina", "Uruguay", "Uruguay", "Brasil",
//     "Argentina", "Argentina", "Uruguay", "Perú", "Argentina", "Uruguay", "Uruguay", "Brasil", "Argentina", "Brasil",
//     "Uruguay", "Brasil", "Brasil", "Colombia", "Brasil", "Brasil", "Uruguay", "Chile", "Chile", "Brasil", "Argentina"
// ];

console.log('ANDA')


//===================================
//=========ARRAY.MAP=============
//====================================

//Esta función toma un array de valores en dólares y devuelve un nuevo array con los mismos valores convertidos a pesos (multiplicados por 150). Luego, muestra ambos arrays en la consola.

function arrayMap() {
    let dolar = [10, 20, 30, 40, 32, 89, 54];

    let pesos = dolar.map(function(valor) {
        return valor * 150;
    });

    console.log("Dólar en valores:", dolar);
    console.log("Pesos en valores:", pesos);
}


//===================================
//=========ARRAY.FILTER=============
//====================================

//En este ejemplo, al hacer clic en el botón "Filtrar Números Pares", se ejecutará la función filtrarNumerosPares y mostrará en la consola los números originales y los números pares.

function arrayFilter() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let pares = numeros.filter(function(numero) {
        return numero % 2 === 0;
    });

    console.log("Números originales:", numeros);
    console.log("Números pares:", pares);
}


//===================================
//=========ARRAY.FIND=============
//====================================

//En este ejemplo, se genera un array numeros con 10 números aleatorios entre 0 y 99. Luego, se utiliza el método .find() para encontrar el primer número mayor a 50 en ese array. Finalmente, se muestra en la consola tanto el array generado numeros como el número encontrado mayorA50.

function encontrarNumeroMayorA50() {
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 100)); // Genera números aleatorios entre 0 y 99
    }

    let mayorA50 = numeros.find(function(valor) {
        return valor > 50;
    });

    console.log("Números generados:", numeros);
    console.log("Primer número mayor a 50:", mayorA50);
}


//===================================
//=========ARRAY.FINDINDEX=============
//====================================

//En este ejemplo, se utiliza el método .findIndex() para encontrar el índice del primer número mayor a 50 en el array numeros. El método devuelve el índice del primer elemento que cumple con la condición especificada en la función de devolución de llamada.

function encontrarIndiceNumeroMayorA50() {
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 100)); // Genera números aleatorios entre 0 y 99
    }

    let indiceMayorA50 = numeros.findIndex(function(valor) {
        return valor > 50;
    });

    console.log("Números generados:", numeros);
    console.log("Índice del primer número mayor a 50:", indiceMayorA50);
}


//===================================
//=========ARRAY.FILL=============
//====================================

//En este ejemplo, creamos un array vacío con 10 elementos usando new Array(10), y luego utilizamos el método .fill() para llenar ese array con el valor 5. Finalmente, mostramos en la consola el array resultante.

function llenarArrayConValor() {
    let array = new Array(10); // Crea un array vacío con 10 elementos
    let valor = 5; // Valor con el que queremos llenar el array

    array.fill(valor); // Llena el array con el valor especificado

    console.log("Array llenado con el valor", valor, ":", array);
}

//===================================
//=========ARRAY.COPYWITHIN=============
//====================================

//En este ejemplo, el método .copyWithin(5, 0, 3) copia los elementos desde el índice 0 hasta el índice 2 (excluido) del array y los pega a partir del índice 5, resultando en el array modificado [1, 2, 3, 4, 5, 1, 2, 3, 4, 5].

function copiarParteDelArray() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    array.copyWithin(5, 0, 3); // Copia los elementos desde el índice 0 hasta el índice 2 (excluido) y los pega a partir del índice 5

    console.log("Array modificado:", array);
}


//===================================
//=========ARRAY.SOME=============
//====================================

//En este ejemplo, el método .some() se utiliza para verificar si al menos un número en el array numeros es negativo. Si encuentra al menos un número negativo, la variable hayNegativos será true, de lo contrario será false. Dependiendo del resultado, se muestra un mensaje indicando si el array contiene o no números negativos.

function verificarSiHayNumerosNegativos() {
    let numeros = [1, 2, 3, -4, 5];

    let hayNegativos = numeros.some(function(numero) {
        return numero < 0;
    });

    if (hayNegativos) {
        console.log("El array contiene números negativos.");
    } else {
        console.log("El array no contiene números negativos.");
    }
}


//===================================
//=========ARRAY.EVERY=============
//====================================

//En este ejemplo, el método .every() se utiliza para verificar si todos los números en el array numeros son mayores que 0. Si todos los números son positivos, la variable todosPositivos será true, de lo contrario será false. Dependiendo del resultado, se muestra un mensaje indicando si todos los números son positivos o no.

function verificarSiTodosSonPositivos() {
    let numeros = [1, 2, 3, 4, 5];

    let todosPositivos = numeros.every(function(numero) {
        return numero > 0;
    });

    if (todosPositivos) {
        console.log("Todos los números son positivos.");
    } else {
        console.log("No todos los números son positivos.");
    }
}

//===================================
//=========ARRAY.REDUCE=============
//====================================

//En este ejemplo, el método .reduce() se utiliza para sumar todos los números en el array numeros. El parámetro acumulador se utiliza para llevar la suma acumulada, comenzando en 0, y en cada iteración se suma el valor del elemento actual (numero) al acumulador. Al finalizar, el método devuelve la suma total de todos los elementos.

function sumarElementos() {
    let numeros = [1, 2, 3, 4, 5];

    let suma = numeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);

    console.log("La suma de todos los elementos es:", suma);
}









