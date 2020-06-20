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

  @Output() fromCartEvent: EventEmitter<ProductElements[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  //fromCartEvent(id: number) {
  //  let index = this.cartSelect.findIndex(x => x.Id === id);
  //  if (this.cartSelect[index].Quantity > 1) {
  //    this.cartSelect[index].Quantity -= 1;
  //    this.total -= 1
  //  } else {
  //    this.cartSelect[index].Quantity -= 1;
  //    this.cartSelect.shift();
  //  }
  //  console.log(index);


  //  this.fromCart.emit(id);
  //  return this.cartSelect;
  //}




  continue() {
    return null;

  }


}
