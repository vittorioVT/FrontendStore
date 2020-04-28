import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductStoreService } from '../product-store.service';
import { ProductsStoreComponent } from './products-store.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchPipe } from '../search.pipe';

describe('ProductsStoreComponent', () => {
  let component: ProductsStoreComponent;
  let fixture: ComponentFixture<ProductsStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsStoreComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new ProductsStoreComponent(null);
    //fixture = TestBed.createComponent(ProductsStoreComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  //it('should be create', () => {
  //  expect(component).toBeDefined();
   
  //});
});
