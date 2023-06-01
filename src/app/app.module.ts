import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
// import { ProductComponent } from './pages/product/product/product.component';
// import { DetailProductComponent } from './pages/detail-product/detail-product/detail-product.component';
// import { CartComponent } from './pages/carts/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProductComponent,
    DetailProductComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
