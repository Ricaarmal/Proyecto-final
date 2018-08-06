import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminComponent } from './admin/admin/admin.component';
import { SignupComponent } from './admin/signup/signup.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';
import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';

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
    path: 'detail/:id', component: ProductDetailComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'aboutus', component: AboutUsComponent
  }
];
