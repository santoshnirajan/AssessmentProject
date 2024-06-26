import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add/product-add.component';

const routes: Routes = [
  {
    path: "", redirectTo: "products", pathMatch: 'full'
  },
  {
    path: "products", component: ProductListComponent
  },
  {
    path: "products/:id", component: ProductDetailComponent
  },
  {
    path: "products/:id/edit", component: ProductEditComponent
  },
  {
    path: "product", component:ProductAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
