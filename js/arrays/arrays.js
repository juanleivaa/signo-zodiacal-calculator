// console.log('Hola desde arrays');

// let array = [1, "Pedro", true, false, "Juan", 28, "Doe", "Kaise" , "Blue", "Pedro", true ]
//         //   0     1       2    3       4

// //para ver cuantos elementos hay en el array 
// console.log('Longitud del array: ' ,array.length) //11

//               //para evitar tanto quilombo en un caso donde haya muchos mas elementos
// for (let i =0 ; i< array.length ; i++){
//     document.write(array[i]+ '<br>')
// }


let provinciasArgentina = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán"
];




// //ARRAY.LENGHT
// let array = [1,2,3,4,5]
// console.log(array.length) //5




// //ARRAY.PUSH()
// let array = ["Juan", "Pablo"]   
// console.log(array)//[“Juan”, “Pablo”]
// array.push("Marcos")
// console.log(array)//[“Juan”, “Pablo”, “Marcos”]




// // ARRAY.SPLICE()
// //Borra el 2,  1 elemento, y agrega “Benja nuevo”
// let array = ["Juan", "Pablo", "Benja", "Lucia"];
// console.log(array) //[“Juan”, “Pablo”, “Benja”, ”Lucia”]
// array.splice( 2 , 1 , "Benja nuevo" )
// console.log(array) //[“Juan”, “Pablo”, “Benja nuevo”, ”Lucia”]





// //ARRAY.CONCAT(ARRAY2)
// let array1 = ["Juan", "Pablo"];
// let array2 = ["Benja nuevo", "Lucia"];
// let arrayConcatenado = array1.concat(array2);
// console.log(arrayConcatenado); // ["Juan", "Pablo", "Benja nuevo", "Lucia"]





// //ARRAY.POP()
// let array = ["Juan", "Pablo", "Benja nuevo", "Lucia"];
// let ultimoElemento = array.pop();
// console.log(ultimoElemento); // "Lucia"
// console.log(array); // ["Juan", "Pablo", "Benja nuevo"]




// // Array.JOIN()
// // Usar join para unir todos los elementos del array con un separador
// let provinciasUnidas = provinciasArgentina.join(' - ');
// // Mostrar la cadena resultante
// document.write(provinciasUnidas);
