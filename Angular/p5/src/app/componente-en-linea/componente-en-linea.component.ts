import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  template: `
   <div class="card">
      <h1>Ejemplo de componente en línea</h1>
      <p>Ejemplo de valor {{valorEnLinea}}</p>
   </div>
  `,
  styles: [
  ]
})
export class ComponenteEnLineaComponent implements OnInit {
  
  valorEnLinea: string ='Hola mundo!';

  constructor() { }

  ngOnInit(): void {
  }

}
