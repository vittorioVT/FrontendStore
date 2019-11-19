import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from '../product-store.service';
import { MatCardModule, MatCardContent, MatCard } from '@angular/material';
import { ProductElements } from '../Interfaces/productElements';

@Component({
  selector: 'app-products-store',
  templateUrl: './products-store.component.html',
  styleUrls: ['./products-store.component.css']
})
export class ProductsStoreComponent implements OnInit {
 
  datasource: ProductElements[];
   
  constructor(private service: ProductStoreService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.datasource = data as ProductElements[];
      console.log('Result2', this.datasource);
      })
  
  }

}

