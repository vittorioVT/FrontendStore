import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carts = [
    { name: 'Johne' },
    { name: 'Bob' },
    { name: 'Alice' }
  ];

  constructor() { }

  // создадим для корзины свой геттер
  public getAll() {
    return this.carts;

  }

}
