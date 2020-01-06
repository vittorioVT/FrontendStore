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
  @Input() myItems;
  @Input() newCarts;
  @Input() newCarts1;
  @Input() total;
  @Input() sum;
  @Input() quantity;

  public itemsFromCart = [];
    
  
  //создаем свое событие

 @Output() clickRemove: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  removeFromCart2() {
    
   // this.clickRemove.emit(this.itemsFromCart);
    //this.clickRemove.emit();
  }

  //удаляем товары из корзины
  removeFromCart(id: number) {
    
    if (this.newCarts1.length > 0) {
    for (let i of this.newCarts1) {
      if (i.id === id && i.quantity > 1) { 
        i.quantity -= 1;
      this.total -= 1;
        this.sum -= i.price;
        this.itemsFromCart = this.newCarts1; 
      } else
        if (i.id === id && i.quantity === 1) {
          console.log(i);
          this.newCarts1 = this.newCarts1.filter(item => item.id !== id);
          this.total -= 1;
          this.sum -= i.price;
          this.itemsFromCart = this.newCarts1;
        }
      }
    }
    if (this.newCarts1.length === 0) {
      this.newCarts1 = [];
      this.itemsFromCart = this.newCarts1;
    }
    
    console.log(this.itemsFromCart);

    //посылаем событие
    this.clickRemove.emit(this.itemsFromCart);
    return this.itemsFromCart;

  }

}


