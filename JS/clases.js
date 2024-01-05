//Declaracion de clases (ECMA)

//Clase vehículo
class Vehicle {

    //1º constructor
    constructor(brandIn, modelIn, colorIn,princeIn){
       this.brand = brandIn;
       this.model = modelIn;
       this.color = colorIn;
       this.price = princeIn;
    }

    //Propiedades por defecto publicas
    getColor(){
        return this.color;

    }

    setColor(color){
        this.color = color;
    }

    getPriceWithTaxes(tax){
        return this.price + this.price * tax;
    }
}

//Instancia de objetos de una clase

let vehicle1 = new Vehicle('Renaul','Megane','Gris',16000);
console.log('Clase vehículo');
console.log(vehicle1);
console.log(vehicle1.getPriceWithTaxes(0.21));


//Class Empleado
console.log('Clase empleado');
//Propiedades privadas en Javascript

class Employee{//Por defecto son públicas
    name;
    surname;
    #age; //# es privada
    #department //# es privada
    constructor(nameIn, surnameIn){
        this.name = nameIn;
        this.surname = surnameIn;
    }
    getAge(){
        return this.#age;
    }
    setAge(age){
        this.#age = age;
    }
    
}


let employee1 = new Employee('Juan','López');
console.log(employee1);
//console.log(employee1.#age);//Error por ser privada (no tiene get y set)

employee1.setAge(44);
console.log('Edad: ' ,employee1.getAge());//Si sale porque ya tiene set y get


//Get y set en JS
//Clase vehículo
console.log('Clase Empleado 1');

class Employee1{//Por defecto son públicas
    name;
    surname;
    #age; //# es privada
    #department //# es privada
    #dni; //# es privada

    constructor(nameIn, surnameIn){
        this.name = nameIn;
        this.surname = surnameIn;
    }
    getAge(){
        return this.#age;
    }
    setAge(age){
        this.#age = age;
    }
    //también se puede hacer de esta manera
    get dni(){
        return this.#dni;
    }
    
    set dni(dni){
        this.#dni = dni;
    }
    
}

let employee2 = new Employee1('Gabriela','Malasquez');
employee1.dni = '1234567K'; //En la invocación de los métodos get y set se usan como propiedad
console.log('dni: ',employee1.dni);