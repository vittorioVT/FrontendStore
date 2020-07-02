import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { MatCard } from '@angular/material';
import { ProductElements } from 'src/app/Interfaces/productElements';
import { DressBoyComponent } from 'src/app/dress-boy/dress-boy.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-cart-rubric',
  templateUrl: './cart-rubric.component.html',
  styleUrls: ['./cart-rubric.component.css']
})
export class CartRubricComponent implements OnInit {

  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;

  @Input() cartSelect: ProductElements[];
  @Input() isOrderContent;
  @Input() total;
  @Input() totalSum;

  productSelect: ProductElements[] = [];

  // создаем свое событие для удаления товаров из корзины

  @Output() clickRemove: EventEmitter<ProductElements[]> = new EventEmitter();

  constructor(private modalService: BsModalService) { }

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
