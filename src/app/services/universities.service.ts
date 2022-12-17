import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { UniversitiesModel } from '../models/universities.model';

@Injectable()
export class UniversitiesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(country: string): Observable<UniversitiesModel[]> {
    return this._httpClient.get<UniversitiesModel[]>(`http://universities.hipolabs.com/search?country=${country}`).pipe(
      map((universities => universities.filter(university => university.country.startsWith(country))))
    )
  }
}
