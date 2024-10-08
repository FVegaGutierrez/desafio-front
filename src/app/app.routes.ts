import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [


   {
    path:'inicio',
    loadChildren:()=>import('./inicio/inicio.module').then(m=>m.InicioModule)
   }
   ,
   {
    path:'',
    loadChildren:()=>import('./inicio/inicio.module').then(m=>m.InicioModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  