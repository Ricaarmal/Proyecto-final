import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';
import { SignupComponent } from './admin/signup/signup.component';

// Routes

import { routes } from './routes';

// Servicios

import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MessagesComponent } from './product-detail/messages/messages.component';
import { ShowMessagesComponent } from './admin/show-messages/show-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainPageComponent,
    ProductsComponent,
    AdminComponent,
    CreateProductComponent,
    SignupComponent,
    ProductDetailComponent,
    MessagesComponent,
    ShowMessagesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [AuthService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
