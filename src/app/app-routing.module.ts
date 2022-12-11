import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserWithRoleComponent } from './components/user-with-role/user-with-role.component';
import { JobComponent } from './components/job/job.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { UserWithRoleComponentModule } from './components/user-with-role/user-with-role.component-module';
import { JobComponentModule } from './components/job/job.component-module';
import { CartFormComponentModule } from './components/cart-form/cart-form.component-module';
import { CartServiceModule } from './services/cart.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-user-with-role', component: UserWithRoleComponent },
      { path: 'job', component: JobComponent },
      { path: ':userId/cart', component: CartFormComponent }
    ]),
    UserWithRoleComponentModule,
    JobComponentModule,
    CartFormComponentModule,
    CartServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
