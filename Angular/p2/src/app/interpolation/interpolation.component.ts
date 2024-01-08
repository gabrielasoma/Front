import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  //Creamos objeto actores
  actor: any = {
    nombre: 'Gabriela',
    apellidos: 'Zapata',
    fechaNacimiento: new Date(2001,2,19)
  }
  constructor() { }

  ngOnInit(): void {//inicio
  }

  getEdad(): number {//obtenemos la edad de la persona, la recibimos como date y se la devuelve como numero
    const edad = (new Date().getTime() - this.actor.fechaNacimiento.getTime()) / (365 * 24 * 60 * 60 * 1000);
    return Math.floor(edad);//devuelve edad
  }
  
}
