console.log('Hola desde arrays');

let array = [1, "Pedro", true, false, "Juan", 28, "Doe", "Kaise" , "Blue", "Pedro", true ]
        //   0     1       2    3       4

//para ver cuantos elementos hay en el array 
console.log('Longitud del array: ' ,array.length) //11

              //para evitar tanto quilombo en un caso donde haya muchos mas elementos
for (let i =0 ; i< array.length ; i++){
    document.write(array[i]+ '<br>')
}



