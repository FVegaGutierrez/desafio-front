import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioFormComponent } from './inicio.component';

export const routes: Routes = [
  { path: '', component: InicioFormComponent }, // Ruta principal

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }  