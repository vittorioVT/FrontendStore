import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductElements } from 'src/app/Interfaces/productElements';
import { EventEmitter } from '@angular/core';
import { MatCard } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartSelect: ProductElements[];
  @Input() isOrderContent;
  @Input() total;
  @Input() totalSum;

 //создаем свое событие
  @Output() clickRemove: EventEmitter<ProductElements[]> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  removeFromCart(id: any) {
    this.clickRemove.emit(id);
  }


  continue() {
    return console.log("Ваше замовлення буде готове впродовж 24 годин");
  }

}




