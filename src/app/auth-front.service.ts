import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthFrontService {

  baseUrl: string = 'http://localhost:13764/api/authfrontend';

  constructor(private http: HttpClient) { }
  register(user) {
    return this.http.post(this.baseUrl + 'register', user);
  }
  
  login(user) {
    return this.http.post(this.baseUrl + 'login', user);
  }


}
