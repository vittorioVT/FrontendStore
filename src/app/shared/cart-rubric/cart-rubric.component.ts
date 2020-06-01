import { Component, OnInit, Input } from '@angular/core';
import { MatCard } from '@angular/material';
import { ProductElements } from 'src/app/Interfaces/productElements';
import { DressBoyComponent } from 'src/app/dress-boy/dress-boy.component';

@Component({
  selector: 'app-cart-rubric',
  templateUrl: './cart-rubric.component.html',
  styleUrls: ['./cart-rubric.component.css']
})
export class CartRubricComponent implements OnInit {

  @Input() cartSelect;
  @Input() isOrderContent;
  @Input() total;
  @Input() totalSum;

  constructor() { }

  ngOnInit() {
    
  }

  removeFromCart(id: number) {

    return null;
  }

  continue() {
    return null;

  }


}
