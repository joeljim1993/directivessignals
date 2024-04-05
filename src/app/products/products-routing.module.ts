import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from './pages/product/product.page';

const routes: Routes = [
    { path: '',
      children:[
        { path:"product", component: ProductPage},
        {  path:"**",redirectTo:"product" }
      ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
