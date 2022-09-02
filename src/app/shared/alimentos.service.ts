import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment, urls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  constructor(private http: HttpClient) { }

  private readonly API = `${urls.alimentos}`;

  buscarAlimentos(alimento: string): Observable<any> {
    return this.http.get<any>(`${this.API}` + alimento);
  }

}
