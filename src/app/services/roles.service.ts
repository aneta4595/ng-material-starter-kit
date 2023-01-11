import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolesModel } from '../models/roles.model';

@Injectable({ providedIn: 'root' })
export class RolesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllRoles(): Observable<RolesModel[]> {
    return this._httpClient.get<RolesModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }
}
