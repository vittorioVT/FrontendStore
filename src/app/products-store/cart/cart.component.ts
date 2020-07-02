import { Component, OnInit, Input, Output} from '@angular/core';
import { ProductElements } from 'src/app/Interfaces/productElements';
import { EventEmitter } from '@angular/core';
import { MatCard } from '@angular/material';

import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // variable for modal
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  
  @Input() cartSelect: ProductElements[];
  @Input() isOrderContent;
  @Input() total;
  @Input() totalSum;

  productSelect: ProductElements[] = [];

 //создаем свое событие
  @Output() clickRemove: EventEmitter<ProductElements[]> = new EventEmitter();


  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  removeFromCart(id: any) {
    this.clickRemove.emit(id);
  }

  // генерируем открытие модального окна

  continue(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  // функциональ второго модального окна

  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'second' });
    this.modalRef.hide();
    this.modalRef = null;
    this.isOrderContent = false;
    //ощищаю корзину и дублирую массив для отправки в б/д
    this.productSelect = this.cartSelect;
    console.log(this.productSelect);
    this.cartSelect = [];
  }


  back() {
    this.modalRef.hide();
    this.modalRef = null;
  }


}




