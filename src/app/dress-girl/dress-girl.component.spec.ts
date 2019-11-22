import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DressGirlComponent } from './dress-girl.component';

describe('DressGirlComponent', () => {
  let component: DressGirlComponent;
  let fixture: ComponentFixture<DressGirlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressGirlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressGirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
