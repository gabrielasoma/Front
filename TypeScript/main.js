//Tipos para datos primitivos
//Sintaxis
//let identificar: <tipo> 
var mensaje;
mensaje = 'Hola';
//mensaje = 12;  //no le gusta porque es number
//Eso es que ya tenemos el TS
//tipo number
var resultado;
resultado = 9.5;
//tipo Boolean 
var mayorEdad;
mayorEdad = false;
//Tipos compuestos
//Arrays
//let identificador: <tipo-elemento>[]
//let identificador: Array<tipo-elemento>
var frutas;
var vehiculos;
frutas = ['peras', 'manzana'];
//Tipo any
var id = 2876;
//id = '123'; no puede ser porque es number
//Rompe la inferencia de tipos y permitirá cualquiera
var id1 = 2876; //se le puedem poner tipos diferentes
id1 = '123';
//Tipado de funciones (parámetros y el retorno de la función suma)
function suma(a, b) {
    return a + b;
}
suma(4, 9);
//Tipo void(en funciones que no devuelven valores)
function setMensaje(mensaje) {
    console.log(mensaje);
    //return mensaje; devolvería error
}
//Tipado genérico en funciones (se define el tipo en la invocación de la función)
function retornoResultado(saludo) {
    return saludo;
}
var a = retornoResultado('Hola');
var b = retornoResultado(12);
var referencia;
referencia = 'abc';
referencia = 12.3;
var razaToby;
razaToby = 'Pastor Alemán'; // se ponen solos estos valores, si se añade otro da error
//Clases en TypeScript (Implementar el tipo de propiedades y métodos (miembros y modificadores de acceso))
//Por defecto es público
var Jugador = /** @class */ (function () {
    function Jugador(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
    Jugador.prototype.setGoles = function (goles) {
        this.goles = goles;
    };
    Jugador.prototype.getGoles = function () {
        return this.goles;
    };
    return Jugador;
}());
//Instanciamos
var jugador1 = new Jugador('Lionel', 'Messi');
var jugadores;
jugadores = [jugador1];
//jugadores = [jugador1,{nombre: 'Sergio', apellidos:'Ramos'}];//da error porque es literal, no se ha instanciado con Jugador
jugador1.nombre = 'Leo'; //public
//jugador1.goles = 10;//Error porque es privada


