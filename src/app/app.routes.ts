import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent }, // Ruta principal
  { path: '', component: InicioComponent }, //Cuando la ruta viene vacia

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  