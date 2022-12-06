import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UserWithRoleComponent } from './components/user-with-role/user-with-role.component';
import { JobComponent } from './components/job/job.component';
import { JobWithRoleComponent } from './components/job-with-role/job-with-role.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { UserWithRoleComponentModule } from './components/user-with-role/user-with-role.component-module';
import { UserServiceModule } from './services/user.service-module';
import { JobComponentModule } from './components/job/job.component-module';
import { JobTagServiceModule } from './services/job-tag.service-module';
import { PostServiceModule } from './services/post.service-module';
import { JobWithRoleComponentModule } from './components/job-with-role/job-with-role.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      { path: 'create-user-with-role', component: UserWithRoleComponent },
      { path: 'create-job-with-role', component: JobComponent },
      { path: 'job', component: JobWithRoleComponent }
    ]),
    ProductsComponentModule,
    ProductsServiceModule,
    UserWithRoleComponentModule,
    UserServiceModule,
    JobComponentModule,
    JobTagServiceModule,
    PostServiceModule,
    JobWithRoleComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
