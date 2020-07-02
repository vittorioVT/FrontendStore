import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductStoreService } from '../product-store.service';
import { MatCardModule, MatCardContent, MatCard, MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ProductElements } from '../Interfaces/productElements';
import { IAppState } from '../Interfaces/IAppState';
import { RubricService } from '../rubric.service';
import { AuthFrontService } from '../auth-front.service';



@Component({
  selector: 'app-products-store',
  templateUrl: './products-store.component.html',
  styleUrls: ['./products-store.component.css']
})
export class ProductsStoreComponent implements OnInit {


  datasource: ProductElements[] = [];
  cartSelect: ProductElements[] = [];
  modalSelect: ProductElements[] = [];
  isOrderContent = false;
  price: number = 0;
  quantity: number = 1;
  total: number = 0;
  totalSum: number = 0;

    searchValue: '';
  
  constructor(private service: ProductStoreService,
                    private auth: AuthFrontService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.datasource = data;
    });
  }

  
  addCart(id: number) {
    let result = this.datasource.find(x => x.Id === id);
    //console.log(result);
    this.total += 1;
    let index: number = 0;

    if (this.cartSelect.length === 0) {
      this.cartSelect.push(result);
      this.cartSelect[this.cartSelect.length - 1].Quantity += 1;
      this.totalSum += result.Price;
    }
    else if (!this.cartSelect.includes(result)) {
      this.cartSelect.push(result);
      this.cartSelect[this.cartSelect.length - 1].Quantity += 1;
      this.totalSum += result.Price;

    } else if (this.cartSelect.includes(result)) {
      index = this.cartSelect.findIndex(x => x.Id === result.Id);
      //console.log(index);
      this.cartSelect[index].Quantity += 1;
      this.totalSum += result.Price;
    }
    //console.log(this.cartSelect);
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
      this.modalSelect = this.cartSelect;
    }
  }

}

