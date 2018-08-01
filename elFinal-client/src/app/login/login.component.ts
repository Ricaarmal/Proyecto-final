import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: object = {};
  user;
  constructor(
  private authService: AuthService,
  private router: Router
) { }

  login() {
    this.authService.login(this.auth)
    .subscribe(user => {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

  ngOnInit() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.role !== 'ADMIN') {
      this.router.navigate(['admin']);
    }
  }

}
