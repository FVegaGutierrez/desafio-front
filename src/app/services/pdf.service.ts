import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Form } from "@angular/forms";

@Injectable()
export class pdfService {
    constructor(private _http: HttpClient) {

    }

createPdf(valueForm: any) {
        try {
            console.log('Inicia la consulta en la api de servicio', valueForm)

        } catch (error) {
            console.log('Error al consultar el servicio', error)
        }
    }






}