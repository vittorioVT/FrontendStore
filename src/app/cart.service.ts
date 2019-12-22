import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductElements } from './Interfaces/productElements';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carts = [];
  public newCarts = [];
  public newCarts2 = [];
  
  public baseUrl: string = 'http://localhost:13764/api/products';

  constructor(private _http: HttpClient) { }

  // создадим для корзины свой геттер
  public getAll() {
    return this._http.get(this.baseUrl);
  
  }

  public remove(name: string) {
    return this.carts = this.carts.filter(user => user.name !== name);
  }

  public add(name: string, picture: string, price: number) {
    this.newCarts.push({ name, picture, price});
    console.log(this.newCarts);
    return this.newCarts;
    
  }

  public add2(allCarts: ProductElements) {
    this.newCarts2.push({ allCarts });
   // console.log(this.newCarts2);
    return this.newCarts2;
  }

}