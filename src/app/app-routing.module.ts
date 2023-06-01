import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductComponent } from './pages/product/product.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: ProductComponent},
    { path: 'product-detail', component: DetailProductComponent},
    { path: 'cart', component: CartComponent},
    { path: 'checkout', component: CheckoutComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
