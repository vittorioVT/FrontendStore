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

  modalRef: BsModalRef;

  @Input() cartSelect: ProductElements[];
  @Input() isOrderContent;
  @Input() total;
  @Input() totalSum;

 //создаем свое событие
  @Output() clickRemove: EventEmitter<ProductElements[]> = new EventEmitter();
 // @Output() openModal: EventEmitter<BsModalService> = new EventEmitter();

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  removeFromCart(id: any) {
    this.clickRemove.emit(id);
  }

  continue(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
    //console.log("Ваше замовлення буде готове впродовж 24 годин");
  }

}




