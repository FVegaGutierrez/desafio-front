import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = 'API-KEY';  // Reemplaza con tu API key

  constructor(private http: HttpClient) { }

  sendMessage(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
        model: 'gpt-3.5-turbo',  // Cambia a un modelo válido y accesible
        messages: [{ role: 'user', content: "que se celebra el 18 de sept" }],
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.7,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
