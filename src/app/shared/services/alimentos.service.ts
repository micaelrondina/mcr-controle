import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Access-Control-Allow-Origin': '*'
  })

};

@Injectable({
  providedIn: 'root'
})

export class AlimentosService {

  constructor(private http: HttpClient) { }

  buscarAlimentos(alimento: string): Observable<any> {
    return this.http.get<any>(`/alimentos/api/calorias/?descricao=${alimento}`);
  }

}
