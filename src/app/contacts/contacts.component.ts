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

  public carts;
  private newCarts = [];
  constructor(private _cartService: CartService) { }
  

  ngOnInit() {
    this._cartService.getAll().subscribe((carts) => { this.carts = carts as ProductElements });
    
  }

  removeCart(name: string) {
    this._cartService.remove(name);
    this.carts = this._cartService.getAll();
  }

  addCart(name: string) {
    if (!name) {
      return;
    }
    this._cartService.add(name);
    this.newCarts = this._cartService.newCarts;
    console.log(this.newCarts);
    //this.newCarts = this._cartService.getAll().subscribe((newCarts) => { this.newCarts = newCarts });
   // console.log(this.newCarts);
    
    
    //this._cartService.add(name);

    //this.carts = this._cartService.getAll();
  }

}
