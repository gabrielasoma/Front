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
    //actualizar, obtenemos el cif
    getCliente(cif){
      return this.http.get(this.endpointCliente + '/'+ cif)
                      .pipe(//aplica operador(map en este caso) a la respuesta observable
                      map((data:any)=>{//el operador map procesa los datos
                        return data;//devuelve dato obtenidos
                      })
                    )
      }   

    postClientes(cliente){
      return this.http.post(this.endpointCliente, cliente)
                      .pipe(//aplica operador(map en este caso) a la respuesta observable
                      map((data:any)=>{//el operador map procesa los datos
                        return data;//devuelve dato obtenidos
                      })
    )}
   

    //Actualizar valor del formulario (cif)
    putClientes(cliente,cif){
      return this.http.put(this.endpointCliente + '/'+ cif, cliente)
                      .pipe(//aplica operador(map en este caso) a la respuesta observable
                        map((data:any)=>{//el operador map procesa los datos
                          return data;//devuelve dato obtenidos
                        })
    )}
   
    deleteClientes(cif) {
      return this.http.delete(this.endpointCliente + '/' + cif)
                  .pipe(
                    map((data: any) => {
                      return data;
                    })
                  )
    }
  
  }

