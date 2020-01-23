import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient} from '@angular/common/http';
import { ProductElements } from '../Interfaces/productElements';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public count: number = 0;
  public carts;
  private newCarts = [];
  private newCarts2 = [];
  constructor(private _cartService: CartService) { }
  public person3 = Object.create({}, {
    name: {
      value: 'Victor',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1975,
      enumerable: true,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear + " years";
      },
      set(value) {
        //document.body.style.background = 'gray';
        console.log('Set age', value);
      }     
    }
  });

  
  

  ngOnInit() {
    this._cartService.getAll().subscribe((carts) => { this.carts = carts as ProductElements });
    for (let key in this.person3) {
      console.log(key, this.person3[key]);   
    }
    console.log(this.person3.age);
    console.log(this.person3.age = 100);
    

  }

  //removeCart(name: string) {
  //  this._cartService.remove(name);
  //  this.carts = this._cartService.getAll();
  //}

  addCart3(id: number, name: string, picture: string, price: number, count: number = 0) {
    if (!name) {
      return;
    }
    this._cartService.add(id, name, picture, price);
    this.newCarts = this._cartService.newCarts;
    count = +1;
    console.log(this.newCarts);
  }
  
  addCart2(allCarts: ProductElements) {
    this.newCarts2 = this._cartService.add2(allCarts);
    
    const result = this.newCarts2.map(
      menu => {
        menu.name = allCarts.Name;
        menu.price = allCarts.Price;
        menu.img = allCarts.Picture;
        return menu;
      }, this);
        //menu.count = allCarts.Price * allCarts.Quantity;
      console.log(result);
  }

  addQuantity(count) {
    return this.count=+1;
  }

  //также добавим сюда функцию, которая будет выполняться для
  //каждого элемента иттерируемого объекта

  observe2() {
    observe('Observable', letter => console.log(letter), done => console.log('Done!'));
  }



}

function observe(observable, next, done) {
  for (let letter of observable) {
    next(letter);
  }
  done();
  
}

