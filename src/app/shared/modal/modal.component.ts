import { Component, OnInit, Input } from '@angular/core';
import { ProductElements } from 'src/app/Interfaces/productElements';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  title: string;
  closeBtnName: string;
  
  list: ProductElements[] = [];

  @Input() modalSelect: ProductElements[];
  //@Input() total;
  //@Input() totalSum;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    
  }

}
