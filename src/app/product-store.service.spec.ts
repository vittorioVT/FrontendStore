import { TestBed } from '@angular/core/testing';
import { ProductStoreService } from './product-store.service';
import { HttpClient } from '@angular/common/http';

describe('ProductStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductStoreService = new ProductStoreService(new HttpClient(null));
    expect(service).toBeTruthy();
  });
});
