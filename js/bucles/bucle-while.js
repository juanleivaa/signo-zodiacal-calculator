
function ejercitacionWhile() {
    let calificacion = window.prompt("Ingrese la nota de los alumnos (1 al 10)");
    calificacion=parseInt(calificacion) //de string a number
    
    while ( calificacion > 10 || calificacion < 1 ) {
        calificacion = window.prompt("Ingrese la nota de los alumnos (1 al 10)");
    
    }
}

