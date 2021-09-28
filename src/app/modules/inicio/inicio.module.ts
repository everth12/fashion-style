import { NgModule } from '@angular/core';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { TiendaComponent } from '../tienda/tienda/tienda.component';
import { DisenadoresComponent } from '../diseñadores/disenadores/disenadores.component';





@NgModule({
  declarations: [
    InicioComponent,
    TiendaComponent,
   // DisenadoresComponent,
  ],
  imports: [
    SharedModule,
    InicioRoutingModule,
  ]
})
export class InicioModule { }
