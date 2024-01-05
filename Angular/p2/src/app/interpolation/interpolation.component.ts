import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  actor: any = {
    nombre: 'Gabriela',
    apellidos: 'Zapata',
    fechaNacimiento: new Date(2001,2,19)
  }
  constructor() { }

  ngOnInit(): void {
  }

  getEdad(): number {
    const edad = (new Date().getTime() - this.actor.fechaNacimiento.getTime()) / (365 * 24 * 60 * 60 * 1000);
    return Math.floor(edad);
  }
  
}
