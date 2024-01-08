import { Injectable } from '@angular/core';
import { Cliente } from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
//Array<Cliente> models
  private clientes:Array<Cliente> = [
    {nombre: 'Iberdrola', cif: 'A12345678', domicilio:'Bilbao'},
    {nombre: 'Jazztel', cif: 'B12345678', domicilio:'Madrid'},
    {nombre: 'La Caixa', cif: 'C12345678', domicilio:'Barcelona'},
  ]

  constructor() { }

  getClientes():Array<Cliente>{
    return this.clientes;
  }

  setCliente(cliente:Cliente){
    this.clientes.push(cliente);
  }
}
