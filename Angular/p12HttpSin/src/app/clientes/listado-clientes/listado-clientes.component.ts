import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  //variable que almacena clientes
  clientes: any;

  constructor(private clientesService: ClientesService) { }//Instancia a tipo ClientesService

  ngOnInit(): void {
    //Llama al metodo de clientesServices para obtener clientes del P11 al inicial el componente
    this.clientesService.getClientes()
                        //suscribe: permite observar los resultados de operaciones asincrónicas (HTTP) y manejar los datos por un observable
                        .subscribe((res: any) => {// Suscribe al resultado de la solicitud HTTP
                          this.clientes = res;//almacena la respuesta en cliente
                        }, (err: any) => {
                          console.log(err);
                        })
  }

}