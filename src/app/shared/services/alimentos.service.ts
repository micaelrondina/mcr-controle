import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  constructor(private http: HttpClient) { }

  private readonly API = `${environment.alimentos}`;

  buscarAlimentos(alimento: string): Observable<any> {
    return this.http.get<any>(`${this.API}` + alimento);
  }

}
