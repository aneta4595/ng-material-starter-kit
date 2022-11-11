import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PersonModel} from "../models/person.model";
import { ApiResponse} from "../components/sort-employee/api.response";
import { EmployeeResponse} from "../components/sort-employee/employee.response";
import {map} from "rxjs/operators";


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

      )}}
