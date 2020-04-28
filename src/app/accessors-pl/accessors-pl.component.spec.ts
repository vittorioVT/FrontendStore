import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessorsPlComponent } from './accessors-pl.component';

describe('AccessorsPlComponent', () => {
  let component: AccessorsPlComponent;
  let fixture: ComponentFixture<AccessorsPlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessorsPlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessorsPlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
