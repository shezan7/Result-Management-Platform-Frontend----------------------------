import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../app/signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent} from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { UserDetailsFormComponent } from './user-details/user-details-form/user-details-form.component';
import { ViewUserTableComponent } from './user-details/view-user-table/view-user-table.component';
import { UpdateEditComponent } from './user-details/update-edit/update-edit.component';


const routes: Routes = [
  {path:'signup', component: SignupComponent},
  {path:'admin', component: UserDetailsComponent,
  children:[
    {path:'view', component: ViewUserTableComponent},
    {path:'add', component: UserDetailsFormComponent},
    {path:'edit', component: UpdateEditComponent}

  ]},
  {path:'users', component: UsersComponent},
  {path:'userAccount', component: UserAccountComponent},
  {path:'', component: LoginComponent},
  {path:'denied', component: NoAccessComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
