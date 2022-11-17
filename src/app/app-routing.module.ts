import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { RoleServiceModule } from './services/role.service-module';


@NgModule({
  imports: [RouterModule.forRoot([ { path: 'create-user-with-role', component: RegisterFormComponent }]), RegisterFormComponentModule, RoleServiceModule],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
