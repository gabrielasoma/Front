/*Mirar el import */
import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() valorHijo : number = 0;//Propiedad de entrada definida.
  @Output() valor : EventEmitter<any> = new EventEmitter();//Evento de salida
  constructor() { }

  ngOnInit(): void {
  }

  handleChangeValor(){//emite valor aleatorio
    this.valor.emit({nuevoValor: Math.random() * 10});
  }

  
}
