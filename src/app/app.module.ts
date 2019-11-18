import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsStoreComponent } from './products-store/products-store.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductStoreService } from './product-store.service';
//service
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule

  ],
  providers: [ProductStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
