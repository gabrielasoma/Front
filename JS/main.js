
//Sintaxis
//Caracteristicas de la sintaxis JS
/*
-ignora los espacios en blanco
-Es de tipo case-sensitive (distingue mayusculas de minusculas)
-las instrucciones y sentencias finalizar con punto y coma (opcional)
*/

console.log('Hola mundo');

let objetoEjemplo = {
    nombre:'Juan'
};

console.log(objetoEjemplo);

/*
Variables
Identificadores
-tienen que comenzar por vocal o bien el símbolo $ o bien por el _
-no se pueden usar palabras reservadas
-usar camelCase(primerApellido)
-usar nombres semanticos (que nos diga para que sirve la variable)

Declaraciones de variables
*/
let primerApellido;

//Asignación de valores
primerApellido = 'Gaby';
primerApellido = 'López';

//inicialización de variables
let telefono = 123;

//puede declarar varias variables a la vez
let email, codigoPostal, localidad;


//Constantes
const urlPedidos='http://...';

//Declaración versión clásica con la palabra reservada var
var nombre;
nombre="Gaby";

var ciudad = 'Madrid';

//Declaración e inicialización global (no se usa palabra reservada)
numeroPasaporte = '1234'; //mala practica

//Imprimir por consola una variable
console.log(ciudad);

//Tipos de datos
//Tipado de datos es débil y dinámico
let correo = 'gaby@gmail.com';
correo = 20;

//Tipos de datos primitivos
//String o cadena de caracteres (comillas dobles o simples)
let pais = 'República   \nDominicana';
console.log(pais);
let calle = "Avenida 0\n' Donell";
console.log(pais,calle);

//number numeros en todos los tipos disponibles: enteros, flotantes, exponenciales, etc
let resultado = 8.6;

//boolean (true/false)
let mayorEdad = false;

let marca; //valor undefined cuando no ha sido aun asignada
console.log('marca es: ',marca);

//null (tipo-valor)
let local = null;

//Tipos compuestos
//Objetos
mayorEdad = true;
console.log(typeof mayorEdad);//para saber de que tipo es

//Operadores aritméticos
//operando operandor (unario)
//operando1 operador operando2 (binario)
//operador ternario

//operador aritméticos
// + -
let res = 6;
let factorCorreccion = 2;
let puntuacion = res - factorCorreccion;

console.log(puntuacion);

//operador suma en el caso de tipos string los concatena
let n ='Gaby';
let ms = 'Hola';
ms = ms + n;
console.log(ms);

rs = 10;
factorCorreccion = '3';
puntuacion = rs +factorCorreccion;
console.log(puntuacion);

// * /
let a =10;
let b = 2;

rs = a/b;
console.log(rs);

//valor NaN(not a number) //cuando no hay conversión de tipos
a = 'Hello';
rs = a * b;
console.log(rs); //distintos tipos (NaN)

//resto % 
let ejemploResto=13%2;
console.log(ejemploResto);

//operador unario
//Incremento ++ (sumar una unidad al valor de la variable)
let c = 1;
console.log('c',c++);
console.log('c',c);

let d = 10;
console.log('d', ++d);//preincremento

//Decremento (resta una unidad al valor de la variable)
let e= 4;
console.log('e ',--e);

//precedencia de operadores
//de derecha a izquierda y el mismo criterio que matemáticas

rs = 12 + 3 * 8;
console.log(rs);

//podemos usar parentesis para romper la precedencia de operadores
rs = (12 + 3) * 8;
console.log(rs);


//operadores de asignacion y comparación
//Asignacion = 
//Asignacion de adición
let p1 = 4;
let p2 = 9;

p1 += p2;
console.log(p1);

//-= *= /0 %=
//operadores de comparacion
//operador de igualdad == 
let c1 = 'Madrid';
let t1 = 'Madrid';

let hayCoincidencia = c1 == t1;
console.log('hay coincidencia: ',hayCoincidencia);

//No es estricto con los tipos de datos
let v1 = 3;
let v2 = '3';

hayCoincidencia = v1 ==v2;
console.log(hayCoincidencia);//true

//Operador de igualdad estricta === 
hayCoincidencia = v1 === v2;
console.log(hayCoincidencia);

//Operador de desigualdad !=
//Operador de desigualdad estricta !==
hayCoincidencia = v1 !== v2;
console.log(hayCoincidencia);

//Operador mayor que >
v1 = 8.4;
v2 = 3;

rs= v1> v2;
console.log(rs);

rs= v1< v2;
console.log(rs);

//Operador lógico
//Operador lógico and &&

let va1 = 12;
let va2 = 13;
let va3 = 12;

let rs1 = va2 < va1 && va1 === va3;
console.log('rs1',rs1);

//Operador logico OR ||
rs1= va2 < va1 || va1 === va3;
console.log('rs1',rs1);

//Operador logico NOT! (negación unaria)
let maEdad = false;
maEdad = !maEdad;
console.log('maEdad',maEdad);

//Operador condicional (Ternario)
//Expresión de condición ? va1 : va2;

let es;
let edadParticipante = 19;
es = edadParticipante >= 18 ? 'Adulto' : 'Menor';
console.log('es: ', es)

//Estructuras de control de flujo
//Estructura condicional if
let n1 = 'Lucia';
let e1 = 20;
let mayEdad;

if(e1 >= 18){
    mayEdad = true;
    console.log(n1 + ' es mayor de edad');
}

//Estructura if else
let a1= 10;
let b1 = 20;

if(a1 > b1){
    console.log('a es mayor que b');
}else{
    console.log('a es menor o igual que b')
}


//Estrucutra if else if
a1 = b1;
if(a1 > b1){
    console.log('a es mayor que b');
}else if(a === b){
    console.log('a es igual a b');
}else{
    console.log('a es menor a b')
}

//Estructura de control Switch
let diaSemana = 3;
switch(diaSemana){
    case 1: 
        console.log('Hoy es lunes');
        break;
    case 2:
        console.log('Hoy es martes');
        break;
    case 3: 
        console.log('Hoy es miércoles');
        break;
    case 4:
        console.log('Hoy es jueves');
        break;
    case 5: 
        console.log('Hoy es viernes');
        break;
    case 6:
        console.log('Hoy es sábado');
        break;
    case 7:
        console.log('Hoy es domingo');
        break;
    default:
        console.log('Día no válido');
}

let mes = 'octubre';
switch(mes){
    case 'Enero':
    case 'Febrero':
    case 'Marzo':
        console.log('Estamos en el primer trimestre');
        break;
    case 'abril':
    case 'mayo':
    case 'junio':    
        console.log('Estamos en el segundo trimestre');
        break;
    case 'Julio':
    case 'Agosto':
    case 'Septiembre':
        console.log('Estamos en el tercer trimestre');
        break;
    case 'octubre':
    case 'noviembre':
    case 'diciembre':    
        console.log('Estamos en el cuarto trimestre');
        break;
    default: 
        console.log('mes no válido');
}

//Estructuras iterativas o bucles
//for
for(i=0; i<5;i++){
    console.log('Hola');
    console.log('i: '+i)
}

//While
let pas;
while(pas !== '1234'){
    //pas = prompt('Escribe contraseña');//promt mensaje de alerta del navegador
}

//do while
//do{
    //pas = prompt('Escribe su contraseña');
//}while(pas !== '1234');


