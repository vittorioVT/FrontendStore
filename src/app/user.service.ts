import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './Interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost:13764/api/users/';
  

  constructor(private http: HttpClient) { }

  get(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl);
  }

  getId(id: number): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl + id);
  }

}
