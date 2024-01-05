//Seleccion y acceso de elementos al DOM
console.log('======================================');
console.log('Seleccion y acceso de elementos al DOM');
let mainTitle = document.getElementById('main-title'); //volcamos en la variable ese elemento
console.log('mainTitle: ',mainTitle);

let buttons = document.getElementsByTagName('button');//selecciona elementos por etiqueta, y muestra todas las propiedades
console.log('buttons', buttons);

let instructionsParagraph = document.getElementsByClassName('instruction');//selecciona y devuelve una lista de elementos HTML basados en su clase específica.
console.log('instructionsParagraph: ',instructionsParagraph);

let dinamicLink = document.querySelector('.dinamic-link');//igual que css
console.log('dinamicLink: ',dinamicLink);

let jumboItems = document.querySelectorAll('.jumbo li')//selecciona todos los elementos que coinciden con un selector CSS especificado
console.log('jumboItems: ',jumboItems);

//Manipulacion de elementos
console.log('==========================');
console.log('Manipulación de elementos');

mainTitle.innerHTML = 'Título cambiado'; //cambia el contenido del elemento HTML

buttons[1].disabled = true; //bloqueado

instructionsParagraph[0].style.color = 'crimson';

dinamicLink.setAttribute('href','http://google.com');//cambia el atributo

let options = ['Windows','MacOs','Linux'];

for(i = 0;i<options.length;i++){
    jumboItems[i].innerHTML = options[i];
}

//Creación de elemento en el DOM 
console.log('==========================');
console.log('Creación de elementos en el DOM');

let item = document.createElement('li');//crear un elemento html
item.innerHTML = 'Android';

let jumboList = document.querySelector('.jumbo');
jumboList.appendChild(item);//añade elementos a los ya existentes

jumboList.removeChild(jumboItems[1]);//elimina un elemento hijo

//Sustituir 
let item2 = document.createElement('li');
item2.innerHTML = 'iOS';
jumboList.replaceChild(item2,jumboItems[0]);

//Eventos, que aparezca el modal
console.log('============');
console.log('Eventos');

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

function toggleModal1(){
    if(modal.style.display === 'none'){
        modal.style.display= 'flex';
        overlay.style.display= 'block';   
    }else{
        modal.style.display= 'none';
        overlay.style.display= 'none';   
    } 
}

let input = document.querySelector('input');
input.addEventListener('input',() => {
    buttons[1].disabled= false;
});


//Poner y quitar clases CSS
console.log('============');
console.log('Manipulación de clases CSS');

jumboList.addEventListener('click',()=>{
    jumboList.classList.add('marked');//le decimos que añada la clase marked
    //jumboList.classList.toggle('marked');//No es compatible con IE
});

