import { Component, OnInit, Input, Output} from '@angular/core';
import { ProductElements } from 'src/app/Interfaces/productElements';
import { EventEmitter } from '@angular/core';
import { MatCard } from '@angular/material';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/user.service';
import { Users } from 'src/app/Interfaces/users';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthFrontService } from 'src/app/auth-front.service';



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
  login: LoginComponent;
  name: string;
  userId: number = 0;
  email: string;
  usersArray: Users[] = [];
  
 //создаем свое событие
  @Output() clickRemove: EventEmitter<ProductElements[]> = new EventEmitter();


  constructor(private modalService: BsModalService,
    private serviceUser: UserService,
    private service: AuthFrontService) { }

  ngOnInit() {
    this.name = this.service.getUserName();
    this.getId(this.name);
  }

getId(name: string) {
    this.serviceUser.get().subscribe((user) => {
      this.usersArray = user.filter(x => x.UserName === name);
      this.userId = this.usersArray[0].Id;
      this.email = this.usersArray[0].Email;
      console.log(this.userId, this.email);
    })
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
    this.addDataBase();
    
    this.cartSelect = [];
  }

  addDataBase() {
    console.log(this.productSelect);
    console.log(this.userId);
    console.log(this.email);
    console.log("Ваши данные добавились в базу данных");

  }


  back() {
    this.modalRef.hide();
    this.modalRef = null;
  }


}




