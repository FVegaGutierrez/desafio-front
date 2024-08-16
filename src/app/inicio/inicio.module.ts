import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioFormComponent } from './inicio.component';
import { InicioRoutingModule } from './inicio.routing';
import { RouterModule } from '@angular/router';
import { pdfService } from '../services/pdf.service';
import { HttpClientModule } from '@angular/common/http';
import { Http2ServerRequest } from 'http2';
import { OpenAIService } from '../services/openia.service';

@NgModule({
  declarations: [
   InicioFormComponent
    // Otros componentes
  ],
  imports: [
    FormsModule ,
    ReactiveFormsModule,
    InicioRoutingModule,
    RouterModule,
    HttpClientModule 
  ],
  providers: [InicioFormComponent,pdfService,OpenAIService],
  bootstrap: [InicioFormComponent]
})
export class InicioModule { }