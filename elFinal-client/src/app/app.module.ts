import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';

// Routes

import { routes } from './routes';

// Servicios

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
