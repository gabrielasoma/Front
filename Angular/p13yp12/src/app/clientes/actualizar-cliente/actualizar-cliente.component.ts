import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';/*router*/
import { ClientesService } from 'src/app/servicios/clientes.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  
  cif:string;
  form: FormGroup;
  cliente:any;

  constructor(private route: ActivatedRoute,
              private router:Router,
              private clientesService:ClientesService
              ) { }

  ngOnInit(): void {
    //snapshot es la ruta de ese momento
    this.cif = this.route.snapshot.params.cif;
    console.log(this.cif);
    this.clientesService.getCliente(this.cif)
                        .subscribe((res:any)=>{
                          console.log(res);
                          //si sale correcto nos lleva a la pagina inicial de clientes (Router)
                          this.cliente=res.cliente;
                          this.form.patchValue(this.cliente);
                        },(err:any)=>{
                          console.log(err);
                        })
    //Recupero los datos
    this.form = new FormGroup({
      nombre:  new FormControl('',[Validators.required]),
      cif: new FormControl('',[Validators.required,Validators.minLength(3)]),
      direccion: new FormControl(''),
      localidad: new FormControl('')
    });
  }

  modificarCliente(){
    this.clientesService.putClientes(this.form.value,this.cif)
                        .subscribe((res:any)=>{
                          this.router.navigate(['/clientes']);                   
                        },(err:any)=>{
                          console.log(err);
                        })
  }



}
