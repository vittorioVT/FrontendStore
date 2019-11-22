import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DressBoyComponent } from './dress-boy.component';

describe('DressBoyComponent', () => {
  let component: DressBoyComponent;
  let fixture: ComponentFixture<DressBoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressBoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
