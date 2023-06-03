import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import {  HttpClientModule } from '@angular/common/http';
// import { ProductComponent } from './pages/product/product/product.component';
// import { DetailProductComponent } from './pages/detail-product/detail-product/detail-product.component';
// import { CartComponent } from './pages/carts/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

import { LayoutAdminComponent } from './layout/LayoutAdmin/layout-admin/layout-admin.component';

import { AuthComponent } from './pages/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProductComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,

    LayoutAdminComponent,

    AuthComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
