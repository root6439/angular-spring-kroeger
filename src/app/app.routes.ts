import { BodyComponent } from './components/body/body.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: BodyComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((module) => module.UserModule),
  },
];
