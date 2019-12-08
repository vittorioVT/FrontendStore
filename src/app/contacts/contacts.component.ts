import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public carts;
  constructor(private _cartService: CartService) {}
  

  ngOnInit() {
    this.carts = this._cartService.getAll();
  }

}
