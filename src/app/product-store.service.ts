import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  baseUrl: string ='http://localhost:13764/api/products'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.baseUrl);
  }

}
