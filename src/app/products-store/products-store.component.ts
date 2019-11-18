import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from '../product-store.service';

@Component({
  selector: 'app-products-store',
  templateUrl: './products-store.component.html',
  styleUrls: ['./products-store.component.css']
})
export class ProductsStoreComponent implements OnInit {

  constructor(private service: ProductStoreService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
    })
  }

}
