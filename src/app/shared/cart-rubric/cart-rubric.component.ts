import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatCard } from '@angular/material';
import { ProductElements } from 'src/app/Interfaces/productElements';
import { DressBoyComponent } from 'src/app/dress-boy/dress-boy.component';


@Component({
  selector: 'app-cart-rubric',
  templateUrl: './cart-rubric.component.html',
  styleUrls: ['./cart-rubric.component.css']
})
export class CartRubricComponent implements OnInit {

  @Input() cartSelect: ProductElements[];
  @Input() isOrderContent;
  @Input() total;
  @Input() totalSum;


  // создаем свое событие для удаления товаров из корзины

  @Output() clickRemove: EventEmitter<ProductElements[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeFromCart(id: any) {
    this.clickRemove.emit(id);
    
  }

  
  continue() {
    return console.log("Ваше замовлення прийняте до роботи");
  }


}
