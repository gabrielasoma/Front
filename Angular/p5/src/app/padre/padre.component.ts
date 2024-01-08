import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  valorPadre :number = 10;

  constructor() { }

  ngOnInit(): void {
  
    setTimeout(() =>{
      this.valorPadre =20;
    },2000)
  };

  getValor($event: any): void{
    this.valorPadre = $event.nuevoValor;
  }
}
