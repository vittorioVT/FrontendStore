import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header/header.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
     expect(app).toBeTruthy();
  });

  it(`should have as title 'FrontendStore'`, () => {
      expect(app.title).toEqual('FrontendStore');
  });

  it('should have router-outlet directive', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  })

  it('should have app-header directive', () => {
    const deBug = fixture.debugElement.queryAll(By.css('app-header'));
    console.log(deBug.length);
    expect(deBug.length).toBeGreaterThan(0);

  });


  //it('should render title', () => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  fixture.detectChanges();
  //  const compiled = fixture.debugElement.nativeElement;
  //  expect(compiled.querySelector('.content span').textContent).toContain('FrontendStore app is running!');
  //});
});
