import { TestBed } from '@angular/core/testing';
import { ProductStoreService } from './product-store.service';
import { HttpClient } from '@angular/common/http';
import { ProductsStoreComponent } from './products-store/products-store.component';
import { Observable, EMPTY } from 'rxjs';

describe('ProductStoreService', () => {
  let service: ProductStoreService;
  let component: ProductsStoreComponent;
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = new ProductStoreService(new HttpClient(null));
    component = new ProductsStoreComponent(service);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAll when ngOnInit', () => {
    const spy = spyOn(service, 'getAll').and.callFake(() => {
      return EMPTY;
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });



});
