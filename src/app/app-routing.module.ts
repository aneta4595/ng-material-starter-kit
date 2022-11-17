import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterRadioButtonsComponent } from './components/register-radio-buttons/register-radio-buttons.component';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { RoleServiceModule } from './services/role.service-module';
import { RegisterRadioButtonsComponentModule } from './components/register-radio-buttons/register-radio-buttons.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'create-user-with-role', component: RegisterFormComponent }, { path: 'create-user-buttons', component: RegisterRadioButtonsComponent }]), RegisterFormComponentModule, RoleServiceModule, RegisterRadioButtonsComponentModule],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
