import { take } from 'rxjs/operators';


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {


  constructor(private http: HttpClient) { }


  getLoggedUser(): Observable<any> {
    return Observable.create((obs: any) => {
      obs.next(
        {
          dados: {
            name: 'Micael Rondina',
            token: 'dev_token',
            tasks: ['br.micael.dieta', 'br.micael.financeiro']
          }
        }
      );
      obs.complete();
    })
  };
}
