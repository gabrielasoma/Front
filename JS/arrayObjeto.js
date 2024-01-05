//Arrays
//pueden ser de diferentes tipos
let frutas = ['pera','manzana','naranja','platano'];
console.log(frutas);

let frutaSeleccionada = frutas[1];//posicion 2 ya que se empieza en 0
console.log(frutaSeleccionada);

frutas[2] = 'kiwi';
console.log(frutas);//Se reemplaza naranja por kiwi


//Objetos

//1º forma de declarar objetos mediante literal
let jugador1 = {
    nombre: 'Sergio', //llave: valor
    apellidos: 'Ramos', //propiedades son públicas
    dorsal: '4',
    goles:0,
    equipos: ['Sevilla','Real Madrid'],
    marcarGol(){
        this.goles++;
    }
};

//Acceso a los miembros (notación del punto)
console.log(jugador1.apellidos);

jugador1.marcarGol();
console.log(jugador1.goles);

jugador1.apellidos = 'Ramos González';
console.log(jugador1.apellidos);



//2º forma de declarar objetos con Object
let jugador2 = new Object();
console.log('Tipo: ',typeof jugador2);

jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal = '10';
jugador2.goles = 0;
jugador2.marcarGol = function (){
    this.goles++;
}
jugador2.marcarGol();
console.log(jugador2);


//Sintaxis de declaración e instancia con función constructora
//3º forma de declarar objetos mediante función constructora

function Jugador(nombreIn, apellidoIn, dorsalIn, golesIn){
    this.nombre = nombreIn;
    this.apellidos = apellidoIn;
    this.dorsal = dorsalIn;
    this.goles = golesIn;
    this.marcarGol = function(){
        this.goles++;
    }
}

//Podemos instanciar todos los objetos que necesitamos 
let jugador3 = new Jugador('Rafael','Varane','08',0);
let jugador4 = new Jugador('Julio','Iglesias','01',0);

jugador3.marcarGol();
console.log(jugador3);

//Sintaxis de declaración con factory functions
//4º forma de declarar objetos mediantes factory functions

function Empleado(nombre,apellidos){
    return{
        nombre,
        apellidos
    }
}

let empleado1 = Empleado('Juan','López Pérez');
console.log(empleado1);