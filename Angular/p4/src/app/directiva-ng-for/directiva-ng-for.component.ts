import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})
export class DirectivaNgForComponent implements OnInit {

  proveedores: Array<any> = [
    {nombre: 'Gas Natural',cif:'A12345678'},
    {nombre: 'Iberdrola',cif:'B12345678'},
    {nombre: 'Jazztel',cif:'C12345678'},
    {nombre: 'Movistar',cif:'D12345678'},
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>{//ejecuta la funcion cada 3000 seg
      //push añade elementos al array
      this.proveedores.push({nombre: 'Orange', cif:'E12345678'})
    },3000)
  }

}
