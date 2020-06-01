import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductStoreService } from '../product-store.service';
import { MatCardModule, MatCardContent, MatCard, MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ProductElements } from '../Interfaces/productElements';
import { IAppState } from '../Interfaces/IAppState';
import { RubricService } from '../rubric.service';


@Component({
  selector: 'app-products-store',
  templateUrl: './products-store.component.html',
  styleUrls: ['./products-store.component.css']
})
export class ProductsStoreComponent implements OnInit {
    
  isOrderContent = false;
  datasource: ProductElements[] = [];
  searchValue: '';
  isShown = true;
  total: number = 0;
  newCarts = [];
  newCarts1 = [];
  sum: number = 0;
  count: number = 0;
  idCountArray: number[] = [1];
  idCountArray2 = [];
  id = 1;
   
  public itemsFromCart = [];
  
  constructor(private service: ProductStoreService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.datasource = data as ProductElements[];
    });
 
  }
  
    addCart(id: number, name: string, picture: string, price: number, quantity: number = 0) {
    quantity = this.returnCount(id);
    this.total += 1;
    this.sum += price;
    this.isOrderContent = true;

   // console.log(this.itemsFromCart);

    this.service.add(id, name, picture, price, quantity);
    this.service.newCarts;
    this.newCarts = this.service.newCarts;
    
    this.newCarts1 = this.returnNewArray(this.newCarts);
    
    console.log(this.newCarts1);
    return this.newCarts1;   
        
  }
  
  //массив, групирующий товары по id, и выводит в корзину не каждый товар
  // по отдельности, а групами(id, quant)
  returnNewArray(arr: any) {
    
    let quant = 0;
    let index1 = 0;
    let index2 = 0;    

    if (arr.length > 1) {
      console.log(arr);
      if (arr[arr.length - 1].quantity > 1) {
        quant = arr[arr.length - 1].quantity;
       // id = arr[arr.length - 1].id;
        
        console.log(arr.length-1);
        index2 = arr.length - 1;
        index1 = arr.length - 2;
      }
      console.log(quant, this.id, index2, index1);

      if (arr[arr.length - 1].quantity === 1) {
        index1 = arr.length - 1;
      }

      if (index2 != 0 && this.id === arr[arr.length - 1].id) {
        arr.splice(index1, 1);
        console.log(arr);
      }        

    }
    this.id = arr[arr.length - 1].id; 
    console.log(this.id);
    console.log(arr);
    return arr;

  };
  
  // массив, который возвращает кол-во товаров по id 
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

  itemsRemoved() {
    console.log(this.itemsFromCart);
    console.log(this.newCarts1);
    return this.newCarts1;
  }
   
}

