import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    
    // Otros componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Módulo de enrutamiento agregado aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }