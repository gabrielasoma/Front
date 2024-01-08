import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  imagen: string = '/assets/santander-red.svg';//define imagen
  
  constructor() { }

  ngOnInit(): void {
    this.cambiarImagen();//llama al método
  }

  cambiarImagen(): void{
    const logoRojo = '/assets/santander-red.svg';
    const logoWhite = '/assets/santander-white.svg';
    setInterval(() =>{ //Ejecuta la funcion en los segundos proporcionados (2000)
      //if (imagen logoRojo) { logoWhite}else {logoWhite , va cambiando cada 2000 seg
      // ? es la condicion , : es el else
      this.imagen === logoRojo ? this.imagen = logoWhite : this.imagen= logoRojo;
    },2000)
  }

}
