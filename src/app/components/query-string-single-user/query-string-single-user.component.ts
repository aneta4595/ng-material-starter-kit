import { ChangeDetectionStrategy, Component, ReflectiveKey, ViewEncapsulation } from '@angular/core';
import { combineLatest, Observable , map} from 'rxjs';
import { UserQueryModel } from 'src/app/models/user-query.model';
import { RolesModel } from 'src/app/models/roles.model';
import { UserModel } from 'src/app/models/user.model';
import { RolesService } from '../../services/roles.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-query-string-single-user',
  templateUrl: './query-string-single-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryStringSingleUserComponent {

  readonly Users$: Observable<UserQueryModel[]> = combineLatest([
    this._userService.getAllUser(),
    this._rolesService.getAllRoles(),
  ]).pipe(
    map(([users, roles]) => this._mapUserQueryModels(users, roles))
  )

  constructor(private _rolesService: RolesService, private _userService: UserService) {
  }

  private _mapUserQueryModels(users: UserModel[], roles: RolesModel[]): UserQueryModel[] {
    const roleMap = roles.reduce(
      (a,c) => ({...a, [c.id]: c}),
      {}
      ) as Record<number, RolesModel>
      return users.map((user) => ({
        email: user.email,
        role: roleMap[user.roleId]?.role
      }))
  }
}
