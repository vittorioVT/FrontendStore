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
  public count: number = 1;
  public count2: number = 1;
  public countResult: number = 1;
  public idCountArray: number[] = [1];
  public idCountArray2 = [];
   
    
  constructor(private service: ProductStoreService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.datasource = data as ProductElements[];
    
     })
  }
  
  addCart(id: number, name: string, picture: string, price: number) {

    const countId = 1;  
    this.idCountArray2.push({ id, countId });
    console.log(this.idCountArray2); 
    this.total += 1;
    this.sum += price;
    this.isOrderContent = true;
            
    if (!id) {
      return;
    }
    //в этом месте нужно написать функцию, которая будет в качестве аргумента принимать
    // id, и возвращать значение переменной - count - для выведения в cart.html
     //if (!this.idCountArray.includes(id)) {
        this.count = 1;
        this.service.add(id, name, picture, price);
        this.newCarts = this.service.newCarts;
    console.log(this.newCarts);  
       // this.countResult = this.count;
           
     // }
      //else {
      //  if (this.idCountArray2[this.idCountArray.length - 1].id == id) {
      //    this.count2 = this.idCountArray2[this.idCountArray.length - 1].countId += 1;
      //  }
      //  if (this.idCountArray2[this.idCountArray.length - 1].id != id) {
      //    this.count2 = this.idCountArray2[this.idCountArray.length - 1].countId;
      //  } else
      //    return;
      //}

    // добавляем id в первый массив
    this.idCountArray.push(id);
  }
}

