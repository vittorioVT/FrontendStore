import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributsPlComponent } from './attributs-pl.component';

describe('AttributsPlComponent', () => {
  let component: AttributsPlComponent;
  let fixture: ComponentFixture<AttributsPlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributsPlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributsPlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
