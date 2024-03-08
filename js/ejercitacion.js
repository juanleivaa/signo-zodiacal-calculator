


//si una de las dos personas tienen al menos 18 años, entonces pueden entrar, sino no 
let edad1 = prompt("Edad")
let edad2 = prompt("Edad del acompañante")
let precio = 100
let cupon= true;

if(edad1>=18 || edad2>=18 ){
    document.write("Usted puede ingresar");

    if( cupon && (edad1>=40 || edad2>=40)){
        document.write('El precio de la entrada es de $', precio/1.4)
    } else if (cupon) {
        document.write("El precio es de $", precio/1.2)
    } else{
        document.write("El precio es de $", precio)
    }
} else {
    document.write("Usted no puede ingresar, al menos una de las dos personas debe ser mayor de 18 años")
}

