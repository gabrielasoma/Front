//Sintaxis de declaracion de funciones

function suma(a,b){
    console.log(a+b);
}
suma(4,6);

function division (a,b){
    return a/b;
}
let resultado = division (10,2);
console.log(resultado);

function division (a,b){
    let c = a/b;
    return c;
}
resultado = division (10,2);
console.log(resultado);

//Funciones de expresion (anonimas)
let cuadrado = function(a){
    return a * a;
}
console.log(cuadrado(5))

//Funciones flechas (ECMAScript 6 2015), permite simplificar
//let cubo = (a) => {
  //  return a*a *a;
//}

let cubo = a=> a*a*a;
console.log(cubo(5));

//funcion flecha, no tiene porque poner el return
let mensaje = () => console.log('Hola');
mensaje();


//Ámbito de las variables y constantes (dependiendo de su forma de declaración)
//Variables declaradas con var
//el ámbito el de la función más próxima

var apellidos = 'Lopéz Pérez';//ámbito global
var apellidos = 'Fernández '; //mala practica (se declara dos veces)
// de estas 2 variables declaradas igual, va a tomar la que este más próxima a la función
function setMayorEdad(edad){
    if(edad >=18){
        var adulto = true;
    }else{
        var adulto= false;
    }
    console.log(adulto);
}
//console.log(adulto);//Error por estar declarada fuera del ámbito
//Var adulto esta declarada dentro de la función por lo tanto no esta definidad fuera
setMayorEdad('setMayorEdad',33);

//Variables declaradas con let o const (constante)
//el ámbito es el bloque más próximo de la variable


//Con let no se puede redeclarar la variable

let ciudad = 'Barcelona';//ambito global = var

function setPuntuacion(puntuacion){
    if(puntuacion >=5){
        let apto = true;
        console.log(apto);
    }else{
        let apto = false;
        console.log(apto);
    }
    //console.log(apto);//Error porque apto tiene el ámbito del bloque
}

setPuntuacion(7);


//Variables declaradas sin palabras reservada(mala práctica)
//El ámbito será siempre global con independendia de donde se declare
function areaTriangulo(a,b){
    area = .5 * a * b;//como no usa ni let ni var, va a estar disponible
}
areaTriangulo(10,20);
console.log('Area ',area);//No devuelve error porque la variable es global


