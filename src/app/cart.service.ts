import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductElements } from './Interfaces/productElements';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carts = [];
   
  public baseUrl: string = 'http://localhost:13764/api/products';

  constructor(private _http: HttpClient) { }

  // создадим для корзины свой геттер
  public getAll() {
    return this._http.get(this.baseUrl);
  
  }

}
