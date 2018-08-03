import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminComponent } from './admin/admin/admin.component';
import { SignupComponent } from './admin/signup/signup.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';
import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin', component: AdminComponent,
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'createproduct', component: CreateProductComponent
  },
  {
    path: 'products', component: ProductsComponent
  }
];
