import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path:'',
    component:SkeletonComponent,
    children: [
      {
        path: '',        
        loadChildren: ()=>
          import('./modules/inicio/inicio.module').then ((m)=> m.InicioModule)
      },
      {
        path:'',
        loadChildren: ()=>
          import('./modules/tienda/tienda/tienda.component').then ((n)=> n.TiendaComponent)
      },
      {
        path: '',
        loadChildren: ()=>
          import('./modules/diseñadores/disenadores/disenadores.component').then ((s)=> s.DisenadoresComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
