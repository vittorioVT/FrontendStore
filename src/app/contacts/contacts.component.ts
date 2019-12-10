import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient} from '@angular/common/http';
import { ProductElements } from '../Interfaces/productElements';

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
  private newCarts3 = [];
  constructor(private _cartService: CartService) { }
  

  ngOnInit() {
    this._cartService.getAll().subscribe((carts) => { this.carts = carts as ProductElements });
    
  }

  //removeCart(name: string) {
  //  this._cartService.remove(name);
  //  this.carts = this._cartService.getAll();
  //}

  addCart(name: string, color: string, price: number) {
    if (!name) {
      return;
    }
    this._cartService.add(name, color, price);
    this.newCarts = this._cartService.newCarts;
    console.log(this.newCarts);
  }

  addCart2(allCarts: ProductElements) {
    this.newCarts2 = this._cartService.add2(allCarts);
    console.log(this.newCarts2);
    this.newCarts2.forEach((cart: any, index: number, pArr: any) => {
      console.log(cart);
      console.log(index);
      console.log(pArr);
    });

  }

  //carts and forEach();
  



  //newCarts2 and forEach();





  addQuantity(count) {
    return this.count=count++;
  }


}
