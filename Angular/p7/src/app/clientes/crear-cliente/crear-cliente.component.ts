import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  //Cliente es de models
  cliente: Cliente = {
    nombre:'',
    cif:'',
    domicilio:''
  }
  constructor(private clientesService: ClientesService) { 

  }


  ngOnInit(): void {
  }

  addCliente(){
    console.log(this.cliente);
    this.clientesService.setCliente(this.cliente);
  }
}
