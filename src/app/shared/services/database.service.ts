import { Food } from './../../models/food';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private readonly urlJson: string = 'assets/json';

  constructor(
    private http: HttpClient
  ) { }

  categories(): Observable<any> {
    return this.http.get<any>(`${this.urlJson}/category.json`);
  }

  foods(): Observable<Food[]> {
    return this.http.get<any>(`${this.urlJson}/food.json`);
  }

  getFoodByName(food: string): Observable<Food[]> {
    return this.http.get<any>(`${this.urlJson}/food.json`).pipe(
      switchMap((allFoods: any) => {
        const alimentos = allFoods.filter((foods: any) => (foods.description.includes(food)));
        return [alimentos];
      })
    )
  }
}
