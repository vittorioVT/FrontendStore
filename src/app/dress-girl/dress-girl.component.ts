import { Component, OnInit } from '@angular/core';
import { RubricService } from '../rubric.service';
import { ProductElements } from '../Interfaces/productElements';
import { MatCardModule, MatCardContent, MatCard } from '@angular/material';


@Component({
  selector: 'app-dress-girl',
  templateUrl: './dress-girl.component.html',
  styleUrls: ['./dress-girl.component.css']
})
export class DressGirlComponent implements OnInit {

  dressgirl: ProductElements[];
  cartSelect: ProductElements[] = [];
  isOrderContent = false;
  price: number = 0;
  quantity: number = 1;
  total: number = 0;
  totalSum: number = 0;

  constructor(private rubricService: RubricService) { }

  ngOnInit() {
    this.rubricService.get().subscribe((data) => {
      this.dressgirl = data.filter(x => x.Comment.includes('dressgirl'));
    })
  }
  addCart(id: number) {
    let result = this.dressgirl.find(x => x.Id === id);
    this.total += 1;
    let index: number = 0;

    if (this.cartSelect.length === 0) {
      this.cartSelect.push(result);
      this.cartSelect[this.cartSelect.length - 1].Quantity += 1;
      this.totalSum += result.Price;

    } else if (!this.cartSelect.includes(result)) {
      this.cartSelect.push(result);
      this.cartSelect[this.cartSelect.length - 1].Quantity += 1;
      this.totalSum += result.Price;

    } else if (this.cartSelect.includes(result)) {
      index = this.cartSelect.findIndex(x => x.Id === result.Id);
      this.cartSelect[index].Quantity += 1;
      this.totalSum += result.Price;
    }
    console.log(this.cartSelect);
    result = null;
    this.isOrderContent = true;
  }

  removeFromCart(id: number) {

    let index: number = 0;
    let idN = this.cartSelect[index].Id;

    let result = this.cartSelect.filter(x => x.Id === id);

    //console.log(id);
    //console.log(this.cartSelect[index].Id);

    //let result = this.cartSelect.find(x => x.Id === id);
    
    console.log(result);



    //let index: number = 0;
    // let result = this.cartSelect.findIndex(x => x.Id === id);
    //console.log(result);
    //console.log(this.cartSelect.length - 1);
    //console.log(this.cartSelect[this.cartSelect.length - 1]);

    if (this.cartSelect[this.cartSelect.length - 1].Quantity === 1) {
      this.total -= 1;
      this.totalSum -= this.cartSelect[this.cartSelect.length - 1].Price;

      // удаляет всегда только последний элемент
      this.cartSelect.pop();

      console.log("Ваш товар удален!");

    }
    else if (this.cartSelect[this.cartSelect.length - 1].Quantity > 1) {

      this.cartSelect[this.cartSelect.length - 1].Quantity -= 1;
      this.total -= 1;
      this.totalSum -= this.cartSelect[this.cartSelect.length - 1].Price;
      console.log(this.cartSelect[this.cartSelect.length - 1]);
    }
    console.log(this.cartSelect);
    index += 1;
  }

}




