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
    
  datasource: ProductElements[] = [];
  cartSelect: ProductElements[] = [];

  isOrderContent = false;

  price: number = 0;
  quantity: number = 1;

  total: number = 0;
  totalSum: number = 0;


  searchValue: '';
  isShown = true;
  sum: number = 0;
  count: number = 0;
  idCountArray: number[] = [1];
  idCountArray2 = [];
  id = 1;
   
  public itemsFromCart = [];
  
  constructor(private service: ProductStoreService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.datasource = data;
    });
  }

  addCart(id: number) {
    let result = this.datasource.find(x => x.Id === id);
    console.log(result);
    this.total += 1;
    let index: number = 0;

    if (this.cartSelect.length === 0) {
      this.cartSelect.push(result);
      this.cartSelect[this.cartSelect.length - 1].Quantity += 1;
      this.totalSum += result.Price;
    }
    else if (!this.cartSelect.includes(result)) {
      this.cartSelect.push(result);
      this.cartSelect[this.cartSelect.length - 1].Quantity += 1;
      this.totalSum += result.Price;

    } else if (this.cartSelect.includes(result)) {
      index = this.cartSelect.findIndex(x => x.Id === result.Id);
      console.log(index);
      this.cartSelect[index].Quantity += 1;
      this.totalSum += result.Price;
    }
    console.log(this.cartSelect);
    result = null;
    this.isOrderContent = true;
  }

  //addCart(id: number) {
  //  let result = this.dressboy.find(x => x.Id === id);
  //  this.total += 1;
  //  let index: number = 0;

  //  if (this.cartSelect.length === 0) {
  //    this.cartSelect.push(result);
  //    this.cartSelect[this.cartSelect.length - 1].Quantity += 1;
  //    this.totalSum += result.Price;

  //  } else if (!this.cartSelect.includes(result)) {
  //    this.cartSelect.push(result);
  //    this.cartSelect[this.cartSelect.length - 1].Quantity += 1;
  //    this.totalSum += result.Price;

  //  } else if (this.cartSelect.includes(result)) {
  //    index = this.cartSelect.findIndex(x => x.Id === result.Id);
  //    this.cartSelect[index].Quantity += 1;
  //    this.totalSum += result.Price;
  //  }
  //  console.log(this.cartSelect);
  //  result = null;
  //  this.isOrderContent = true;

  //}


  //  addCart(id: number, name: string, picture: string, price: number, quantity: number = 0) {
  //  quantity = this.returnCount(id);
  //  this.total += 1;
  //  this.sum += price;
  //  this.isOrderContent = true;

  // // console.log(this.itemsFromCart);

  //  this.service.add(id, name, picture, price, quantity);
  //  this.service.newCarts;
  //  this.newCarts = this.service.newCarts;
    
  //  this.newCarts1 = this.returnNewArray(this.newCarts);
    
  //  console.log(this.newCarts1);
  //  return this.newCarts1;   
        
  //}
  
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

}

