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
import { AuthFrontService } from './auth-front.service';
import { CartService } from './cart.service';

//ngx-bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';

//material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatInputModule, MatToolbarModule,
  MatSortModule, MatPaginatorModule,
} from '@angular/material';

import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DressBoyComponent } from './dress-boy/dress-boy.component';
import { DressGirlComponent } from './dress-girl/dress-girl.component';
import { AttributsPlComponent } from './attributs-pl/attributs-pl.component';
import { AccessorsPlComponent } from './accessors-pl/accessors-pl.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

//forms
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { CartComponent } from './products-store/cart/cart.component';
import { CartRubricComponent } from './shared/cart-rubric/cart-rubric.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsStoreComponent,
    FooterComponent,
    HeaderComponent,
    ContactsComponent,
    AboutusComponent,
    DressBoyComponent,
    DressGirlComponent,
    AttributsPlComponent,
    AccessorsPlComponent,
    RegisterComponent,
    LoginComponent,
    SearchPipe,
    CartComponent,
    CartRubricComponent,
   ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,

    //material design
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatSortModule,
    MatPaginatorModule,

    //forms
    ReactiveFormsModule,
    FormsModule,

    //ngx-bootstrap
    CollapseModule.forRoot(),
  ],

  exports: [
    MatCardModule
  ],

  providers: [ProductStoreService, AuthFrontService, CartService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
