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
  
  //создаем свое событие
  @Output() userSelected: EventEmitter<any> = new EventEmitter();


  constructor() {}

  ngOnInit() {
    
  }    

  selectUser() {
    this.userSelected.emit();
  }

   
}


