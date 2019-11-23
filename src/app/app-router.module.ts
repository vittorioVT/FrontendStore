import { RouterModule, Routes } from '@angular/router';

//component
import { ProductsStoreComponent } from './products-store/products-store.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DressBoyComponent } from './dress-boy/dress-boy.component';
import { DressGirlComponent } from './dress-girl/dress-girl.component';
import { AttributsPlComponent } from './attributs-pl/attributs-pl.component';
import { AccessorsPlComponent } from './accessors-pl/accessors-pl.component';
import { RegisterComponent } from './register/register.component';

import { NgModule } from '@angular/core';

//route
const routes: Routes = [
  { path: '', component: ProductsStoreComponent },
  { path: 'productsStore', component: ProductsStoreComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'dressboy', component: DressBoyComponent },
  { path: 'dressgirl', component: DressGirlComponent },
  { path: 'attributs', component: AttributsPlComponent },
  { path: 'accessors', component: AccessorsPlComponent },
  { path: 'register', component: RegisterComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
