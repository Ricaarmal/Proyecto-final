import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-tender-pro',
  templateUrl: './tender-pro.component.html',
  styleUrls: ['./tender-pro.component.css']
})
export class TenderProComponent implements OnInit {

  usuario: any;
  messages: Array<any>;
  user: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = {};
    this.usuario = JSON.stringify(localStorage.getItem('user'));
    if (!this.usuario) {
      this.router.navigate(['login']);
    }

    this.authService.getLoggedUser()
    .subscribe(user => {
      this.user = user;
      this.messages = this.user.messages;
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['products']);
  }

}
