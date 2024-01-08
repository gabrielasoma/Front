import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.css']
})
export class TopScoreComponent implements OnInit {
  @Input() equipoLocal: any;
  @Input() equipoVisitante: any;
  jugadores:any = [];

  constructor() { }

  ngOnInit(): void {
    /*...combina elementos de 2 arrays en un nuevo array */
    this.jugadores = [...this.equipoLocal.jugadores, ...this.equipoVisitante.jugadores];
  }

  ngAfterContentChecked(){
    this.sortJugadores();
  }

  sortJugadores(){
    this.jugadores.sort((a:any, b:any)=>{
      return (b.puntos - a.puntos);
    })
  }

}
