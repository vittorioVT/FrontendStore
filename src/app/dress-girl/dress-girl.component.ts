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
   // console.log(this.cartSelect);
    result = null;
    this.isOrderContent = true;
  }

  clickRemove(id: number) {
    let result = this.cartSelect.find(x => x.Id === id);
    //console.log(result);

    if (result.Quantity === 1 && this.cartSelect.length === 1) {
      this.cartSelect.pop();
      this.total = 0;
      this.totalSum = 0;
      result.Quantity = 0;

      this.isOrderContent = false;
    } else if (result.Quantity > 1) {
      result.Quantity -= 1;
      this.total -= 1;
      this.totalSum -= result.Price;
    } else if (result.Quantity === 1) {
      result.Quantity -= 1;
      this.total -= 1;
      this.totalSum -= result.Price;
      this.cartSelect = this.cartSelect.filter(x => x != result);
    }
  }
  
}




