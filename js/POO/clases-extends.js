

class User {
    constructor(name,lastname,email, password) {
        
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;

    }

    showInfoUser() {
        return "Bienvenido ", this.name, this.lastname ;
    }
} 


class Employee extends User  {
    constructor(name,lastname,email, password, seniority, role, salary) {
        
        super(name,lastname,email, password);
        this.seniority = seniority;
        this.role = role;
        this.salary = salary;

    }

    showInfoEmployee() {
        return "Bienvenido " + this.name + " " + this.lastname + " ,su sueldo es: " + this.salary;
    }
}


class Alumno extends User {
    constructor(name,lastname,email, password, curso, calificacion) {

        super(name,lastname,email, password);
        this.curso = curso;
        this.calificacion = calificacion;

    }

    showInfoAlumno() {
        return "Bienvenido " + this.name + " " + this.lastname + " ,su calificacion es: " + this.calificacion + "en el curso: " + this.curso;
    }
}



let employee1 = new Employee("Juan", "Perez", "juanperez@gmail.com", "123456", "3 años","Mentor", 2000)
console.log(employee1.showInfoEmployee())

let alumno1 = new Alumno("Carla", "Gomez", "carlagomez@gmail.com", "123456", "Full Stack", 10)
console.log(alumno1 .showInfoAlumno())


//===================================
//=========indagar en un objeto=============
//====================================

//forma 1
for (let key in employee1) {
    console.log("El valor de la propiedad ", key , "es: ", employee1[key])
}





