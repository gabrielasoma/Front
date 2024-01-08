import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  /*Aquí se ponen las rutas de la aplicación */
  {path: '', component:InicioComponent},
  {path: 'ventas', component:VentasComponent},
  {path: 'compras', component:ComprasComponent},
  {path: '**', component:Pagina404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
