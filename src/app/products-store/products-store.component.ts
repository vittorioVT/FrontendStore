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
    
  datasource: ProductElements[];
  searchValue: '';
  public user;

  constructor(private service: ProductStoreService) {
    setTimeout(() => {
      this.user = {
        name: 'Viktor'
      };
    }, 2000);
  }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.datasource = data as ProductElements[];
     })
  }




  //addToCart(id)
  //{
  //  const item = this.datasource[id];
  //  this.myCart.push(item);
  //  const myItems = this.myCart.map(function (menu){
  //    this.total += menu.Price * menu.Quantity;
  //  })
  // }

}

