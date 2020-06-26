import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RubricService } from '../rubric.service';
import { ProductElements } from '../Interfaces/productElements';
import { MatCardModule, MatCardContent, MatCard } from '@angular/material';

@Component({
  selector: 'app-attributs-pl',
  templateUrl: './attributs-pl.component.html',
  styleUrls: ['./attributs-pl.component.css']
})
export class AttributsPlComponent implements OnInit {
   
  attribut: ProductElements[] = [];
  cartSelect: ProductElements[] = [];

  isOrderContent = false;
  price: number = 0;
  quantity: number = 1;
  total: number = 0;
  totalSum: number = 0;


  constructor(private rubricService: RubricService) { }

  ngOnInit() {
    this.rubricService.get().subscribe((data) => {
      this.attribut = data.filter(x => x.Comment.includes('attributs'));
    })
  }
  addCart(id: number) {
    let result = this.attribut.find(x => x.Id === id);
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
    //  console.log(this.cartSelect);
    result = null;
    this.isOrderContent = true;
  }




}
