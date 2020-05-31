import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRubricComponent } from './cart-rubric.component';

describe('CartRubricComponent', () => {
  let component: CartRubricComponent;
  let fixture: ComponentFixture<CartRubricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartRubricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
