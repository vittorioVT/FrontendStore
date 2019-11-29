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

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator

  datasource: ProductElements[];
  searchValue: '';
  myCart: Array<ProductElements> = [];
  state: IAppState;
  total: number = 0;
  
  
  //this.state = { items: null, myOrder: null, showPopup: false, userId: 0, orderPlaced: false }; 
  constructor(private service: ProductStoreService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.datasource = data as ProductElements[];
     })
  }
  
  addToCart(id)
  {
    const item = this.datasource[id];
    this.myCart.push(item);
    const myItems = this.myCart.map(function (menu){
      this.total += menu.Price * menu.Quantity;

    })

    
    
    
       
  }

}

