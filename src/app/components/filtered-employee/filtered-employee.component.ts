import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonModel } from '../../models/person.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-filtered-employee',
  templateUrl: './filtered-employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteredEmployeeComponent {
  public age: Observable<string[]> = of([
    'All',
    '0-20',
    '21-30',
    '31-40',
    '41-50',
    '51-100',
  ]);

  readonly employees$: Observable<PersonModel[]> = combineLatest([
    this._employeeService.getAll(),
    this._activatedRoute.params,
  ]).pipe(
    map(([employees, params]: [PersonModel[], Params]) => {
      if (params['age'] === 'All') {return employees}
      const minAge: string = params['age'].split('-')[0];
      const maxAge: string = params['age'].split('-')[1];
      return employees.filter(
        (employee: PersonModel) => employee.age >= minAge && employee.age <= maxAge
      );
    })
  );

  constructor(
    private _employeeService: EmployeeService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
