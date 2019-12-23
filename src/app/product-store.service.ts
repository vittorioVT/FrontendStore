import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  public newCarts = [];
  baseUrl: string ='http://localhost:13764/api/products'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.baseUrl);
  }

  public add(id: number, name: string, picture: string, price: number) {
    this.newCarts.push({id, name, picture, price });
    return this.newCarts;

  }



}
