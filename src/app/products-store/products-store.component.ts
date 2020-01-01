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
  public newCarts1 = [];
  public a = [];
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
    console.log(this.newCarts);

    this.newCarts1 = this.returnNewArray(this.newCarts);
             
  }

  returnNewArray(arr: any) {
    let id = 0;
    let quant = 0;
    let index1 = 0;
    let index2 = 0;    

    if (arr.length > 1) {

      if (arr[arr.length - 1].quantity > 1) {
        quant = arr[arr.length - 1].quantity;
        id = arr[arr.length - 1].id;
        index2 = arr.length - 1;
        index1 = arr.length - 2;
      }

      if (arr[arr.length - 1].quantity === 1) {
        index1 = arr.length - 1;
      }

      if (index2 != 0) {
        arr.splice(index1, 1);
      }        
    }
    return arr;

  };
  
  
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

