import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PersonModel } from '../../models/person.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-master',
  templateUrl: './employee-master.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeMasterComponent {
  readonly list$: Observable<PersonModel[]> = this._employeeService.getAll();

  private _selectedEmployeesIdSubject: Subject<string> = new Subject<string>();
  public SelectedEmployeesId$: Observable<string> = this._selectedEmployeesIdSubject.asObservable();
  readonly details$: Observable<PersonModel> = this.SelectedEmployeesId$.pipe(
    switchMap(data => this._employeeService.getOne(data)));

  constructor(private _employeeService: EmployeeService) {
  }

  selectEmployees(id: string): void {
    this._selectedEmployeesIdSubject.next(id)
  }
}
