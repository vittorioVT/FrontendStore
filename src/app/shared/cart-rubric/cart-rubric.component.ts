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


  // создаем свое событие для удаления товаров из корзины

  @Output() clickRemove: EventEmitter<ProductElements[]> = new EventEmitter();

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  removeFromCart(id: any) {
    this.clickRemove.emit(id);
    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'second' });
  }

  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }

    this.modalRef.hide();
    this.modalRef = null;
  }


  continue(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    console.log("Ваше замовлення буде готове впродовж 24 годин");
  }

  //continue(template: TemplateRef<any>) {

  //  this.modalRef = this.modalService.show(template);
  //  console.log("Ваше замовлення буде готове впродовж 24 годин");
  //}


}
