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

  modalRef: BsModalRef;

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

  continue(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    console.log("Ваше замовлення буде готове впродовж 24 годин");
  }

  //continue(template: TemplateRef<any>) {

  //  this.modalRef = this.modalService.show(template);
  //  console.log("Ваше замовлення буде готове впродовж 24 годин");
  //}


}
