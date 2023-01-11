import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentsModel } from '../models/departments.model';

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllDepartment(): Observable<DepartmentsModel[]> {
    return this._httpClient.get<DepartmentsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/departments');
  }
}
