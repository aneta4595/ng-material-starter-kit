import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { PersonModel} from "../../models/person.model";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-sort-employee',
  templateUrl: './sort-employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortEmployeeComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  public order: Observable<string[]> = of(['asc', 'desc'])
  readonly employee$: Observable<PersonModel[]> = combineLatest([
    this._employeeService.getAll(),
  this.order$
    ]).pipe(
      map(([employee, order]: [PersonModel[], string]) => {
        return employee.sort((a,b) => {
         if (a.salary > b.salary)return order === 'asc' ? 1: -1
        if (a.salary < b.salary)return order === 'asc' ? -1 : 1
        return 0;
        })
      })
  )

  constructor(private _employeeService: EmployeeService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }
}
