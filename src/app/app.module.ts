import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//components
import { AppComponent } from './app.component';
import { ProductsStoreComponent } from './products-store/products-store.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductStoreService } from './product-store.service';

//service
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';

//material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ProductsStoreComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,

    //material design
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
   ],

  exports: [
    MatCardModule
  ],

  providers: [ProductStoreService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
