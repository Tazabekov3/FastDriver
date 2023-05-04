import { Component } from '@angular/core';
import { Authentify } from 'src/services/authentify/authentify.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  constructor(public auth: Authentify) { }

  login() {
    this.auth.login(this.email, this.password).subscribe();
  }
}
