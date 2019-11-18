import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from '../product-store.service';
import { MatTableDataSource } from '@angular/material';
import { ProductElements } from '../Interfaces/productElements';

@Component({
  selector: 'app-products-store',
  templateUrl: './products-store.component.html',
  styleUrls: ['./products-store.component.css']
})
export class ProductsStoreComponent implements OnInit {

  dataSource;

  constructor(private service: ProductStoreService) { }


  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
    })
    this.dataSource = new MatTableDataSource<ProductElements>();


  }

}
