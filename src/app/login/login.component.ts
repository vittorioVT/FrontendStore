import { Component, OnInit } from '@angular/core';
import { AuthFrontService } from '../auth-front.service';
import { Router } from '@angular/router';
import {MatInput} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    userName: '',
    password: ''
  }

  constructor(private service: AuthFrontService,
              private router: Router) { }
  login() {
    console.log(this.loginData);
    this.service.login(this.loginData).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('userName', data.UserName);
      localStorage.setItem('token_value', data.Token);
      this.router.navigate(['/']);

    },
      (error) => alert(error.error.Message));
  }
}
