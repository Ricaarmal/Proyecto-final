import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import * as M from 'materialize-css/dist/js/materialize';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewChecked {

  material;

  logginFail: string;

  auth: any = {
    email: '',
    password: ''
  };

  usuario: any;

  constructor(
  private authService: AuthService,
  private router: Router
) { }

  login() {
    this.authService.login(this.auth)
    .subscribe(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.usuario = user;
      if ( this.usuario.role === 'ADMIN' ) {
      this.router.navigate(['admini']);
       }
      if ( this.usuario.role === 'TENDER' ) {
         this.router.navigate(['tender']);
         }
      if (this.usuario.role === 'USER') {
          this.router.navigate(['products']);
        }
    }, err => {
      if (err.status === 401) {
        this.logginFail = 'Wrong email or Password';
      } else {
        this.logginFail = 'Something is wrong, try again later';
      }
    });
  }

  ngAfterViewChecked() {
    M.updateTextFields();
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('user'));
    if (this.usuario.role === 'ADMIN') {
      this.router.navigate(['admini']);
    }
    if (this.usuario.role === 'TENDER') {
      this.router.navigate(['tender']);
    }
  }
}
