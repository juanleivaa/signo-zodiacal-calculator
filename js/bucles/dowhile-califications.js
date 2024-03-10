function ejercitacionDoWhile() {
    let cantidadNotas;
    let sumatoria = 0;
    let notas = 0;

    do {
        cantidadNotas = parseInt(window.prompt('¿Cuántas notas cargará?'));
    } while (isNaN(cantidadNotas) || cantidadNotas <= 0);

    let i = 0;
    do {
        let calification;
        do {
            calification = parseInt(window.prompt('Ingrese una nota (1 al 10)'));
            console.log('Calificacion inside while ', calification);
        } while (isNaN(calification) || calification < 1 || calification > 10);

        sumatoria += calification;
        notas++;
        i++;
    } while (i < cantidadNotas);

    console.log('Sumatoria de notas ', sumatoria);
    console.log('Numero de notas cargadas ', notas);

    let promedio = sumatoria / notas;
    console.log('El promedio de las notas es ' + promedio);
}
