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
  public selectUser;
  public myCart: ProductElements[];
  public total: number = 0;
  public newCarts = [];
  public sum: number = 0;


  constructor(private service: ProductStoreService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.datasource = data as ProductElements[];
      
     })
  }

  addCart(id: number, name: string, picture: string, price: number) {
    if (!name) {
      return;
    }
    this.service.add(id, name, picture, price);
    this.newCarts = this.service.newCarts;
    this.total += 1;
    this.sum += price;
    this.isOrderContent = true;
    console.log(this.newCarts);
   
  }

  addQuantity() {
    return this.total = +1;
  }



  //addToCart(id)
  //{
  //  this.isShown = true;
  // // const item = this.datasource[1];
    
  ////  const name = item.Name;
  ////  const price = item.Price;
  ////  console.log(id, name, price);
  ////  this.myCart.push(item);
    
  //const myItems = this.myCart.map(function (menu) {
  //  this.total += menu.Price * menu.Quantity;
  //  this.color = menu.Color;
  //}, this);
  //  console.log(this.total);
  // }

}

