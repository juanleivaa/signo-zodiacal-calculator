

let calification;
let sumatoria = 0
let notas = 0

do{


    do {
        calification = parseInt(window.prompt('Ingrese una nota (1 al 10)'))
        console.log('Calificacion inside while ', calification)
    
    } while( calification < 1 || calification > 10 )


    //para restringir los valores que no son tipo number
    if(calification){
        sumatoria = sumatoria + calification;
        notas = notas + 1;
    }
    
   



}while(calification)

console.log('Sumatoria de notas ' ,sumatoria)
console.log ('Numero de notas cargadas ', notas)

let promedio = sumatoria / notas
console.log( 'El promedio de las notas es ' + promedio)