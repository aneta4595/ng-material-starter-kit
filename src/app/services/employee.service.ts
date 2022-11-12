import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonModel } from '../models/person.model';
import { ApiResponse } from '../components/sort-employee/api.response';
import { EmployeeResponse } from '../components/sort-employee/employee.response';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees'
    )
      .pipe(
        map((response: ApiResponse<EmployeeResponse[]>): PersonModel[] => {
          return response.data.map((EmployeeResponse: EmployeeResponse) => {
            return {
              id: EmployeeResponse.id,
              name: EmployeeResponse.employee_name,
              salary: EmployeeResponse.employee_salary,
              age: EmployeeResponse.employee_age,
              email: '',
              image: EmployeeResponse.profile_image

            };
          });
        })

      )
  }

  getOne(id: string): Observable<PersonModel> {
    return this._httpClient
      .get<ApiResponse<EmployeeResponse>>(
        'https://dummy.restapiexample.com/api/v1/employee/' + id
      )
      .pipe(
        map(
          (response): PersonModel => ({
            id: response.data.id,
            name: response.data.employee_name,
            age: response.data.employee_age,
            email: '',
            salary: response.data.employee_salary,
            image: response.data.profile_image,
          })
        )
      );
  }
}
