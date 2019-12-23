import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductElements } from 'src/app/Interfaces/productElements';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  @Input() isOrderContent; 
  @Input() datasource;
  @Input() myCart: ProductElements[];
  @Input() myItems;
  @Input() newCarts;
  @Input() total;
  @Input() sum;
  public count: number = 1;
  
  //создаем свое событие
  @Output() userSelected: EventEmitter<any> = new EventEmitter();


  constructor() {}

  ngOnInit() {
    
  }    

  removeFromCart(id: number) {
    this.newCarts = this.newCarts.splice(id, 1);
    this.total -= 1;
    //this.sum -= this.datasource.price;
    return this.newCarts;

    console.log(this.newCarts);
  }

  selectUser() {
    this.userSelected.emit();
  }

   
}


