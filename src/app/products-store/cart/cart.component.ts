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
  @Output() userSelected: EventEmitter<any> = new EventEmitter();


  constructor() {}

  ngOnInit() {
    
  }

  remove(id: number) {
    return this.newCarts = this.newCarts.filter(c => c.id != id);
  }

  removeFromCart(id: number) {
    let result = [];
    for (let i of this.newCarts1) {
      if (i.id === id && i.quantity > 1) { 
        i.quantity -= 1;
      this.total -= 1;
      this.sum -= i.price;
      
      } else
        if (i.id === id && i.quantity === 1) {
          console.log(i);
          this.newCarts1 = this.newCarts1.filter(item => item.id !== id);
          this.total -= 1;
          this.sum -= i.price;
         // return this.newCarts1;
        }
    } 
       console.log(this.newCarts1);
    return this.newCarts1;

  }

  selectUser() {
    this.userSelected.emit();
  }

   
}


