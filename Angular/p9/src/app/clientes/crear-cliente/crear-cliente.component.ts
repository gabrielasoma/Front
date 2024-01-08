import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre:  new FormControl('',[Validators.required]),
      cif: new FormControl('',[Validators.required,Validators.minLength(3)]),
      direccion: new FormControl(''),
      localidad: new FormControl('')
    });
  }
  enviarCliente():void{
    console.log(this.form.value);
  }
}
