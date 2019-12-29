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
  @Input() total;
  @Input() sum;
 // @Input() count;
  @Input() quantity;
  
  
  
  //создаем свое событие
  @Output() userSelected: EventEmitter<any> = new EventEmitter();


  constructor() {}

  ngOnInit() {
    
  }

  remove(id: number) {
    return this.newCarts = this.newCarts.filter(c => c.id != id);
  }

  removeFromCart(id: number) {
    this.newCarts = this.newCarts.splice(id, 1);
    console.log(this.newCarts);
    this.total -= 1;
    this.sum -= this.datasource.price;
    
    return this.newCarts;

   
  }

  selectUser() {
    this.userSelected.emit();
  }

   
}


