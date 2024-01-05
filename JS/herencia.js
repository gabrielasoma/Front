//Herencia de clases en Js

class Rectangle{
    constructor(widthIn,heightIn){
        this.width = widthIn;
        this.height = heightIn;
    }

    getSurface(){
        //devuelve la superficie
        return this.width * this.height;
    }
}

let polygon1 = new Rectangle(10,20);
console.log('Superficie: ',polygon1.getSurface());

//Herencia
class Square extends Rectangle{
    constructor(lado) {
        //Super hace referencia a la clase que hereda
        super(lado,lado);
    }
    
    getSquareSurface(){
        //Superfie de cuadrado
        return super.getSurface();
    }
}

let polygon2 = new Square(15);
console.log('Superficie herencia: ',polygon2.getSquareSurface());
