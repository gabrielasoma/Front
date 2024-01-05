//Métodos y propiedades para String en JS
//let nombre = new String('Juan');

let nombre = 'Juan';

console.log('nombre: ',nombre);

console.log('length: ',nombre.length);//Devuelve número de caracteres

console.log('toLowerCase: ',nombre.toLowerCase());//Devolver el valor transformado a minúsculas
console.log('toUpperCase: ',nombre.toUpperCase());//Devolver el valor transformado a mayúsculas

console.log('charAt(2):',nombre.charAt(2));//Devuelve el caracter de la posición (indexada a cero)

console.log('indexOf("n"): ',nombre.indexOf('n'));
console.log('indexOf("x"): ',nombre.indexOf('x'));// devuelve -1 si no encuentra el caracter

nombre = 'Amanda';
console.log('nombre: ',nombre);

console.log('lastIndexOf: ',nombre.lastIndexOf('a'));//devuelve la posición de la última coincidencia
console.log('includes: ',nombre.includes('nda'));//devuelve true o false si encuentra la cadena
console.log('startsWith: ',nombre.startsWith('A'));//Devuelve true o false si comienza por el caracter
console.log('endsWith: ',nombre.endsWith('z')); //devuelve true o false si finaliza por el caracter

let apellidos = 'Pérez Gómez';
let nombreCompleto = nombre.concat(' ' + apellidos);
console.log('concat: ',nombreCompleto);

let frase = '       En un lugar de la Mancha         ';
console.log('trim: ',frase.trim());//Elimina al comienzo y al final los espacios en blanco

let password = '123abc';
console.log('slice: ',password.slice(2,5));//devuelve el fragmento desde la primera posicion incluida hasta la segunda posición excluida

console.log('slice negativos: ',password.slice(-2));//Pasando argumento negativo devuelve los n últimos caracteres

console.log('====================');
console.log('TEMPLATE LITERALS (comilla francesa)')
let nom = 'Laura';
let apellido ='Gómez Pérez';
let resultado = 9.6;

//dar espacio para que salga comilla francesa
let mensaje = `La jugadora ${nombre} ${apellidos} tiene un resultado de ${resultado}`;
console.log(mensaje);


//Métodos y propiedades para tipos Number
console.log('====================');
console.log('Métodos y propiedades para tipos Number');
//Clase Math
//se puede redondear
let puntuacion = 2.5;
let puntuacionRedondeada = Math.round(puntuacion);
console.log('puntuacionRedondeada: ',puntuacionRedondeada);

puntuacion = -2.5;
puntuacionRedondeada = puntuacion < 0 ? Math.round(-puntuacion) * -1 : Math.round(puntuacion);
console.log('puntuacionRedondeada negativo: ',puntuacionRedondeada);

//redondeo a la baja
puntuacion = 9.7;
puntuacionRedondeada = Math.floor(puntuacion);
console.log('puntuacionRedondeada a la baja: ',puntuacionRedondeada);

//redondeo a la alta
puntuacion = 9.3;
puntuacionRedondeada = Math.ceil(puntuacion);
console.log('puntuacionRedondeada a la alta: ',puntuacionRedondeada);


//random devuelve un número entre 0 y 0.99999. (número aleatorio)
let n= ['Juan','Sara','Carlos','Raquel'];
let nElegido = n[Math.floor(Math.random() * n.length)];//manera de extraer con String
console.log('nElegido: ',nElegido);


console.log('====================');
console.log('Parseo de string a number');

//Parseo de String a number
let res = '9.7';//tipo string
let resParseado = parseFloat(res);//convierte a number y mantiene la parte flotante
console.log('parseFloat: ',resParseado);

let resPa= parseInt(res);
console.log('parseInt: ', resPa);//convierte a number solo la parte entera


//Parseo de number a string
console.log('====================');
console.log('Parseo de number a string');
let r2 = 56.7;
let r2ParseadoString = r2.toString();
console.log('toString: ', r2ParseadoString);
console.log('Tipo: ',typeof r2ParseadoString);

console.log('====================');
console.log('Fechas');
//Métodos y propiedades para fechas
//date
//Obtener la fecha actual
let fechaActual = new Date();
console.log('fechaActual: ', fechaActual);

//Establecer fechas en JS
//1º opción es pasándo argumentos : años, mes (indexado a cero), día, hora,minuto, seg, ms
let fechaNacimiento = new Date(1990, 1,11); //11/02/1990
//enero 0, febrero 1
console.log('fechaNacimiento: ',fechaNacimiento);

//2º opcion pasando argumentos fechas-string 'yyyy-MM-dd', meses NO indexados a cero
let fechaExpedicion = new Date('2021-03-15');
console.log('fechaExpedicion: ',fechaExpedicion);

//3º opción pasándo argumentos en ms desde era epoch () 1/1/1970
let fechaAleatoria = new Date(12424345354545);
console.log('fechaAleatoria: ',fechaAleatoria);

//Métodos de instancias de Date
console.log('getFullYear: ',fechaActual.getFullYear());//devolver el año en tipo number
console.log('getMonth: ',fechaActual.getMonth());//devolver el  mes indexado a 0

let meses = ['Enero','Febrero','Marzo','Abrir','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
console.log('meses: ', meses[fechaActual.getMonth()]);

console.log('getDate: ',fechaActual.getDate());//devuelve el día de la semana

console.log('getHour: ',fechaActual.getHours());//devuelve hora
console.log('getMinutes: ',fechaActual.getMinutes());//devuelve min
console.log('getSeconds: ',fechaActual.getSeconds());//devuelve seg
console.log('getMilliseconds: ',fechaActual.getMilliseconds());//devuelve ms

//Para el cálculo de fechas utilizamos los ms
console.log('getTime: ',fechaActual.getTime());//devuelve ms desde era epoch

let fechaSalida = new Date(fechaActual.getTime()+ 3 * 24 * 60 * 60 * 1000);
console.log('fechaSalida: ',fechaSalida);

console.log('====================');
console.log('Arrays mutables');
//Métodos y propiedades para Arrays
let fruta = ['manzana','naranjas','kiwi'];

//propiedas
console.log('length: ',fruta.length);//numero de elementos del array

//métodos mas utilizados
//mutables (modificar los valores de la variable)
let frutaExtraida = fruta.pop();
console.log('pop fruta extraida: ',frutaExtraida); //extrae el último elemento del array
console.log('pop: ',fruta); //extrae el último elemento del array

fruta.push('albaricoques','cerezas');//añade uno o varios elementos al final del array
console.log('push: ',fruta);

//shift hace lo mismo que pop, pero al principio del array
fruta.shift();//extrae el primer elemento del array y desplazar a la izquierda el resto
console.log('shift:',fruta); 

//unshift añade uno o varios elementos al inicio del array desplazando a la derecha
fruta.unshift('platano','fresa');
console.log('unshift:',fruta); 

//splice: sirve para eliminar o sustituir elementos
//splice(indice,cantidad,elementos opcionales a sustituir)
fruta.splice(1,2);
console.log('splice: ',fruta);

fruta.splice(1,1);
console.log('splice: ',fruta);

//splice sustituir
fruta.splice(1,2,'platano','fresa');
console.log('splice: ',fruta);

//cambiar (platano por pera)
fruta.splice(1,1,'pera');
console.log('splice: ',fruta);


fruta.splice(2,0,'sandía','piñas');//0 porque no se elimina
console.log('splice: ',fruta);

//ordenar 
fruta.sort();//ascendente
console.log('sort: ',fruta);

fruta.reverse();//reverse (le da la vuelta)
console.log('reverse: ',fruta);

//Los métodos en JS se pueden encadenar
//descendente
let marcaVehiculo = ['Dacia','VW','SEAT','Audi','Reault'];
marcaVehiculo.sort().reverse();
console.log('desc', marcaVehiculo);

console.log('====================');
console.log('Arrays inmutables');
//no modifica el valor del array
//extrae valores y los asigna a otras variables

fruta = ['manzana','naranja','kiwi','fresa','plátanos','mandarina'];
let frutaSeleccionada = fruta.slice(2,4);//extra elementos desde una posición incluida hasta otra posición excluido
console.log('fruta: ',fruta);
console.log('slice: ',frutaSeleccionada)

let hayPomelos = fruta.includes('pomelos');//devuelve true o false según exista el elemento o no
console.log('includes: ',hayPomelos);

let ms = fruta.join(' | ');
console.log('join: ',ms);//une los elementos separados por el string de argumento , por defecto son comas


let vehiculosEuropeos = ['SEAT','Renault','Mercedes Beanz'];
let marcaVehiculos = vehiculosEuropeos.concat('Subaru','Hyunday');
//concat permite añadir elementos sin modificar el original
console.log(vehiculosEuropeos);
console.log('concat: ',marcaVehiculos);

//también se pueden añadir arrays al concat
let vehiculosAsiatico = ['Toyota','Mazda'];
marcaVehiculos = vehiculosEuropeos.concat(vehiculosAsiatico);
console.log('vehiculosEuropeos: ',vehiculosEuropeos);
console.log('vehiculosAsiatico: ',vehiculosAsiatico);
console.log('concat arrays: ',marcaVehiculos);

//Paso por valor y paso por referencia
//Los tipos primitivos tienen su paso por valor
console.log('====================');
console.log('Paso por valor y paso por referencia');
let a = 'Juan';
let b = a;
console.log('b: ',b);
b = 'Carlos';
console.log('b: ',b);
console.log('a: ',a);//a mantiene el valor Juan puesto que el paso es por el valor

//Los tipos compuestos (Arrays y objetos)
let c = [1,2,3];
let d = c;
console.log('d: ',d);

d.push(4);
console.log('d: ',d);
console.log('c: ',c);

//Romper el paso por referencia
//Concat
let marcasEuropeas = ['VW','Renault','Audi'];
let marcasSeleccionada = marcasEuropeas;
marcasSeleccionada.push('Toyota','Subaru');
console.log('marcasEuropeas: ',marcasEuropeas);
console.log('marcasSeleccionada: ',marcasSeleccionada);


//Operador spread... ECMA6
let marcasAsiatica = [];
let marcasCoreanas = ['Kia','Hyundai'];
let marcasJaponesas =['Toyota','Lexus'];

marcasAsiatica = [...marcasCoreanas,...marcasJaponesas];
console.log('marcasAsiáticas...: ',marcasAsiatica);

marcasAsiatica.push('Subaru');
console.log('marcasAsiáticas...: ',marcasAsiatica);
console.log('marcasCoreana ',marcasCoreanas);
console.log('marcasJaponesa ',marcasJaponesas);


console.log('====================');
console.log('Arrays y Objetos');
//.forEach(elemento,indice)
let jugadores = [
    {
        nombre: 'Maria',
        apellidos: 'Zuil',
        puntuacion: 4.6
    },
    {
        nombre: 'Juan',
        apellidos: 'Gómez',
        puntuacion: 7
    },
    {
        nombre: 'Laura',
        apellidos: 'López',
        puntuacion: 9.6
    },
];

//Ciclo forEach ECMA 2015
let jugadorAptos = [];
jugadores.forEach((elem,i) => {
    if(elem.puntuacion >= 5){
        jugadorAptos.push(elem);
    }
});
console.log('jugadorAptos forEach: ',jugadorAptos);

//Map(elemento, indice) return
//map devuelve el array en ejecucion
//ciclo map ECMA 2015
let nombreJugadores = jugadores.map((elem,i)=> {
      return `${i + 1}.-${elem.nombre} ${elem.apellidos}.`
});

console.log('nombreJugadores map: ',nombreJugadores);

//filter(elem,indice) es una simplificación de map
//Ciclo filter ECMA 2015
let jugadoresNoApto = jugadores.filter(elem =>{
    //expresion condicional
    return elem.puntuacion <5;
})
console.log('jugadoresNoApto filter: ',jugadoresNoApto);

/*
forEach ejecuta una función para cada elemento del array.
map crea un nuevo array aplicando una función a cada elemento y retorna el resultado.
filter crea un nuevo array con elementos que cumplen una condición determinada.

*/