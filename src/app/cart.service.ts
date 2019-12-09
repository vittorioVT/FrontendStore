import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductElements } from './Interfaces/productElements';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //private carts = [
  //  { name: 'Johne' },
  //  { name: 'Bob' },
  //  { name: 'Alice' }
  //];
  private carts = [];
  private newCarts = [];
  
  public baseUrl: string = 'http://localhost:13764/api/products';

  constructor(private _http: HttpClient) { }

  // создадим для корзины свой геттер
  public getAll() {
    return this._http.get(this.baseUrl);
   // return this.carts;

  }

  public remove(name: string) {
    return this.carts = this.carts.filter(user => user.name !== name);
  }

  public add(name: string) {
    this.newCarts.push({ name });
    console.log(this.newCarts);
  }

}
