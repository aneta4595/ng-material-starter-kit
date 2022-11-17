import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { RoleModel } from '../../models/role.model';
import { RoleService } from '../../services/role.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-radio-buttons',
  templateUrl: './register-radio-buttons.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterRadioButtonsComponent {
  readonly register: FormGroup = new FormGroup({ email: new FormControl(), roleId: new FormControl() });
  readonly roles$: Observable<RoleModel[]> = this._roleService.getAll();

  constructor(private _roleService: RoleService, private _userService: UserService) {
  }

  onRegisterSubmitted(register: FormGroup): void {
    this._userService.create({
      email: register.get('email')?.value,
      roleId: register.get('roleId')?.value

    }).subscribe();
  }
}
