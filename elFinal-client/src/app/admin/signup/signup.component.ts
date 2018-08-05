import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username = '';
  correo = '';
  password = '';
  password2 = '';

  constructor(
    private authService: AuthService
  ) { }

  recibiendoElForm(form) {
    this.authService.signup(form.value)
    .subscribe(r => {
      console.log(r);
    });
    console.log(form.value);
  }

  ngOnInit() {
  }

}
