import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pdfService } from '../services/pdf.service';
import { OpenAIService } from '../services/openia.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioFormComponent {
  inicioForm: FormGroup;

  constructor(private fb: FormBuilder,private _pdfService:pdfService,private _openai:OpenAIService) {
    this.inicioForm = this.fb.group({
      tituloCurso: ['', Validators.required],
      diasCurso: ['', Validators.required],
      horarioCurso: ['', Validators.required],
      cantParticipantes: ['', Validators.required],
      nombreInstructor: ['', Validators.required],
      objCurso: ['', Validators.required],
      temario: ['', Validators.required],
      nivelCurso: ['', Validators.required],
      modalidad: ['', Validators.required],
      materiales: ['', Validators.required]
    });
  }
  validateForm() {
    console.log('Validador de form')

    try {
      if (this.inicioForm.valid==true) {
        return false
      } else {
         return true
      }

    } catch (error) {
      return true
   console.log("Erro al ejecutar Metodo de creción de PDF")
    }



  }

  onSubmit() {
    try {
      console.log('INICIO SUB')
     this._openai.sendMessage(this.inicioForm.value).subscribe((data)=>{
      console.log('Valor Del Result',data)

     });
    
    } catch (error) {
      console.log('Error al crear el pdf ', error)
    }

  }
}
