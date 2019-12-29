import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductStoreService } from '../product-store.service';
import { MatCardModule, MatCardContent, MatCard, MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ProductElements } from '../Interfaces/productElements';
import { IAppState } from '../Interfaces/IAppState';


@Component({
  selector: 'app-products-store',
  templateUrl: './products-store.component.html',
  styleUrls: ['./products-store.component.css']
})
export class ProductsStoreComponent implements OnInit {
    
  public isOrderContent = false;
  public datasource: ProductElements[];
  searchValue: '';
  public isShown = true;
  public total: number = 0;
  public newCarts = [];
  public sum: number = 0;
  public count: number = 0;
  //public countId: number = 1;
 // public countResult: number = 1;
  public idCountArray: number[] = [1];
  public idCountArray2 = [];
    
  constructor(private service: ProductStoreService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.datasource = data as ProductElements[];
    
     })
  }
  
  addCart(id: number, name: string, picture: string, price: number, quantity: number) {
    quantity = this.returnCount(id);
    this.total += 1;
    this.sum += price;
    this.isOrderContent = true;

    this.service.add(id, name, picture, price, quantity);

    this.service.newCarts;
    this.newCarts = this.service.newCarts;

    // тут нужно написать функцию, которая будет удалять объекты с одинаковыми id
    // this.newCarts.map();


    console.log(this.newCarts);

    //console.log(this.newCarts[0].id);


  }
  
  returnCount(id: number) {
    let countId: number = 1;

    if (!this.idCountArray.includes(id)) {
      this.count = countId;
      this.idCountArray2.push({ id, countId });
      this.idCountArray.push(id);

    } else {
      for (let i of this.idCountArray2)
      {
        if (i.id == id) {
          i.countId += 1;
          this.count = i.countId;
        }
      }
    }
    return this.count;
  }
}

