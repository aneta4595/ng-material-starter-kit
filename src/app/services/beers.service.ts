import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BeersModel } from '../models/beers.model';

@Injectable({ providedIn: 'root' })
export class BeersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllBeers(pageNumber: number, pageSize: number): Observable<BeersModel[]> {
    return this._httpClient.get<BeersModel[]>(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${pageSize}`);
  }

  getAllBeersByPageNumber(page: number): Observable<BeersModel[]> {
    return this._httpClient.get<BeersModel[]>(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`);
  }
}
