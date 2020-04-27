import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsStoreComponent } from './products-store.component';

describe('ProductsStoreComponent', () => {
  let component: ProductsStoreComponent;
  let fixture: ComponentFixture<ProductsStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeDefined();
    console.log(component)
  });
});
