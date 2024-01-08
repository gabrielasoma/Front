import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*rxjs */
import {map} from 'rxjs/operators';/*programación reactiva */
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  // Establece la URL a (p11Extends, este proyecto tiene clientes) 
  endpointCliente: string = 'http://localhost:3002';

  constructor(private http: HttpClient) { }//constructor tipo httpClient (p11Extends)

  //métodos para obtener clientes usando GET, para esto se debe de tener en otro VS del proyecto elegido y hacer npm start
  getClientes(){
    return this.http.get(this.endpointCliente)//hace solicitud GET a la url(p11)
                    .pipe(//aplica operador(map en este caso) a la respuesta observable
                      map((data:any)=>{//el operador map procesa los datos
                        return data;//devuelve dato obtenidos
                      })
                    )
    } 
  }


