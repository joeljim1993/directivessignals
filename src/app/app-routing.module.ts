import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"products",
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  { path: 'signals', loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule) },
  {
    path:"**",
    redirectTo:"signals"
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
