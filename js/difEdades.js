//===================================
//=======VARIABLES NUMERICAS==========
//====================================9
let edad1 = prompt("Edad?")
let edad2 = prompt("Cual es la edad de tu hermano?")
let difEdad = edad1 - edad2

// //solucion 1 para que siempre sea positivo, funciona como valor abs
// let difEdadAbs= Math.abs(difEdad);
// document.write("Tu hermano y tu se llevan " + difEdadAbs +" años")


//solucion 2 para que sea positivo
if (edad1 > edad2){

    let difEdad = edad1 - edad2
    document.write("Tu hermano y tu se llevan " + difEdad+ " años")

} else if (edad1 < edad2){

    let difEdad = edad2 - edad1
    document.write("Tu hermano y tu se llevan " + difEdad+ " años")

} else if (edad1 = edad2){// si son iguales

    document.write("Son mellizos")

}else {
    document.write("Error, no se ingresaron datos")
}
