import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthFrontService {

  baseUrl: string = 'http://localhost:13764/authfrontend/';

  constructor(private http: HttpClient,
    private router: Router) { }

  register(user) {
    return this.http.post(this.baseUrl + 'register', user);
  }

 
  login(user) {
    return this.http.post(this.baseUrl + 'login', user);
  }

  logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('token_value');
  }

  getUserName() {
    return localStorage.getItem('userName');
  }

  get isAuthenticated() {
    return localStorage.getItem('token_value');

  }



}
