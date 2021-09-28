import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisenadoresComponent } from '../diseñadores/disenadores/disenadores.component';
import { TiendaComponent } from '../tienda/tienda/tienda.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {
    path:'index',
    component:InicioComponent,
  },
  {
    path: 'tienda',
    component:TiendaComponent,
  },
  {
    path: 'disigners',
    component: DisenadoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
