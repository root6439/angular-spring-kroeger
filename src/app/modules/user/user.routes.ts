import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
  { path: 'create', component: CreateUserComponent },
  { path: 'login', component: LoginComponent },
];
