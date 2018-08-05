import { Component, OnInit } from '@angular/core';
import { routes } from '../../routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usuario: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('user'));
    if (!this.usuario) {
    this.router.navigate(['products']);
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['products']);
  }
}
