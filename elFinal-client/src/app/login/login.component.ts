import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: any;
  usuario: any = {};

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
      this.router.navigate(['admin']);
       }
      if ( this.usuario.role === 'TENDER' ) {
         this.router.navigate(['products']);
         }
      if (this.usuario.role === 'USER') {
          this.router.navigate(['products']);
        }
    });
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('user'));
    if (this.usuario.role === 'ADMIN') {
      this.router.navigate(['admin']);
    }
  }
}
