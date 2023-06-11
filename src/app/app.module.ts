import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { ProductComponent } from './pages/product/product/product.component';
// import { DetailProductComponent } from './pages/detail-product/detail-product/detail-product.component';
// import { CartComponent } from './pages/carts/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutAdminComponent } from './layout/LayoutAdmin/layout-admin/layout-admin.component';
import { AuthComponent } from './pages/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CateComponent } from './pages/admin/categories/cate/cate.component';
import { ListCateComponent } from './pages/admin/categories/list-cate/list-cate.component';
import { EditCateComponent } from './pages/admin/categories/edit-cate/edit-cate.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductAddComponent } from './pages/admin/products/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/products/product-edit/product-edit.component';
import { ProductListComponent } from './pages/admin/products/product-list/product-list.component';
import { ProductItemComponent } from './pages/admin/products/product-item/product-item.component';

import { CartService } from './services/cart.service';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProductComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    LayoutAdminComponent,
    AuthComponent,
    CateComponent,
    ListCateComponent,
    EditCateComponent,
    DashboardComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
