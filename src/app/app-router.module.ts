import { RouterModule, Routes } from '@angular/router';

//component
import { ProductsStoreComponent } from './products-store/products-store.component';
import { NgModule } from '@angular/core';

//route
const routes: Routes = [
  { path: '', component: ProductsStoreComponent },
  { path: 'productsStore', component: ProductsStoreComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
