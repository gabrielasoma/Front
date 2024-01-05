//==============Tipos para datos primitivos
//Sintaxis
//let identificar: <tipo> 
let mensaje : string;
mensaje ='Hola';
//mensaje = 12;  //no le gusta porque es number
//Eso es que ya tenemos el TS

//tipo number
let resultado : number;
resultado = 9.5;

//tipo Boolean 
let mayorEdad: boolean;
mayorEdad = false;


//=================Tipos compuestos
//Arrays
//let identificador: <tipo-elemento>[]
//let identificador: Array<tipo-elemento>

let frutas: String[];
let vehiculos: Array<string>;

frutas = ['peras','manzana'];


//========Tipo any: permite que tenga cualquier tipo
let id = 2876;
//id = '123'; no puede ser porque es number


//Rompe la inferencia de tipos y permitirá cualquiera
let id1: any = 2876;//se le puedem poner tipos diferentes
id1= '123';

//================Tipado de funciones (parámetros y el retorno de la función suma)
function suma(a: number, b:number): number{
    return a + b;
}
suma(4,9);

//Tipo void(en funciones que no devuelven valores)
function setMensaje(mensaje:string):void {
    console.log(mensaje);
    //return mensaje; devolvería error
}

//==========Tipado genérico en funciones (se define el tipo en la invocación de la función)
function retornoResultado<T>(saludo:T): T{//cuando no se saben los tipos <T>
    return saludo;
}
const a: string = retornoResultado<string>('Hola');
const b: number = retornoResultado<number>(12);

//===========Tipos de unión
//con esto se crea un identificador para cada tipo
type _id = string | number; //las variables con tipo _id podrán ser string y number

let referencia : _id;
referencia = 'abc';
referencia= 12.3;
//No dan errores porque es de tipo _id

//Tipos de union complejos, aquí se pueden poner directamente los valores
type razasPerros = 'Pastor Alemán' | 'Pastor Belga' | 'Mastin';
let razaToby : razasPerros;
razaToby='Pastor Alemán';// se ponen solos estos valores, si se añade otro da error


//============Clases en TypeScript (Implementar el tipo de propiedades y métodos (miembros y modificadores de acceso))
//Por defecto es público
class Jugador{
    public nombre: string;
    public apellidos:string;
    private goles: number; //hace falta crear objeto para acceder a ella

    constructor(nombre:string, apellidos:string){
        this.nombre= nombre;
        this.apellidos= apellidos;
    }

    setGoles(goles:number):void{
       this.goles = goles;
    }

    getGoles():number{
        return this.goles;
    }
}

//Instanciamos
let jugador1 = new Jugador('Lionel','Messi');
let jugadores : Array<Jugador>;
jugadores = [jugador1];
//jugadores = [jugador1,{nombre: 'Sergio', apellidos:'Ramos'}];//da error porque es literal, no se ha instanciado con Jugador

jugador1.nombre = 'Leo'; //public
//jugador1.goles = 10;//Error porque es privada

//=============Sintaxis de constructor breve para clases

class Player{
    constructor(public nombre: string, public apellidos:string, private goles:number){
     //ponemos el modificador de acceso
    }
    setGoles(goles:number):void{
        this.goles = goles;
    }

    getGoles(){
        return this.goles;
    }
}

//Interfaces
interface DatosMaestros{
    //propiedades
    nombre:string;
    cif:string;
}

class Proveedor implements DatosMaestros{//es obligatorio poner las variables de la interfaz
    nombre:string;
    cif:string;
    formaPago :string;

    constructor(nombre:string,cif:string){
        this.nombre = nombre;
        this.cif = cif;
    }

}


