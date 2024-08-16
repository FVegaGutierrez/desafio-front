import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioFormComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
   InicioFormComponent
    // Otros componentes
  ],
  imports: [
    FormsModule ,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule // Módulo de enrutamiento agregado aquí
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }