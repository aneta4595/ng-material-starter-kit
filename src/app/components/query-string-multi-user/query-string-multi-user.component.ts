import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { UserService } from '../../services/user.service';
import { RolesService } from '../../services/roles.service';
import { combineLatest, Observable, map } from 'rxjs';
import { MultiUserQueryModel } from 'src/app/models/multi-user-query.model';
import { UserModel } from 'src/app/models/user.model';
import { RolesModel } from 'src/app/models/roles.model';
import { DepartmentsModel } from 'src/app/models/departments.model';

@Component({
  selector: 'app-query-string-multi-user',
  templateUrl: './query-string-multi-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryStringMultiUserComponent {

readonly user$: Observable<MultiUserQueryModel[]> = combineLatest([
  this._departmentService.getAllDepartment(),
  this._userService.getAllUser(),
  this._rolesService.getAllRoles()
]).pipe(
  map(([departments, users, roles]) => this._mapUserQueryModel(users, roles, departments))
)

  constructor(
    private _departmentService: DepartmentService,
    private _userService: UserService,
    private _rolesService: RolesService
  ) {}


  private _mapUserQueryModel(users: UserModel[], roles: RolesModel[], departments: DepartmentsModel[]): MultiUserQueryModel[] {
    const roleMap = roles.reduce((a,c) => ({...a, [c.id]:c}),

{}
    ) as Record <number, RolesModel>
const departmentMap = departments.reduce((a,c) => ({...a, [c.id]:c}),

{}
) as Record <number, DepartmentsModel>

return users.map((user) => ({
  email: user.email,
  department: departmentMap[user.departmentId]?.name,
  role: roleMap[user.roleId]?.role
}))
} 
}