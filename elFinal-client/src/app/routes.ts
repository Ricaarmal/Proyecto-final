import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];
