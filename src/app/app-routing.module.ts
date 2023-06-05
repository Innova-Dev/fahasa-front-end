import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LayoutAdminComponent } from './layout/LayoutAdmin/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: ProductComponent},
    { path: 'product/:_id', component: ProductDetailComponent},
    { path: 'cart', component: CartComponent},
    { path: 'checkout', component: CheckoutComponent},
    {path:'auth',component:AuthComponent}
  ]
  },
  { path: 'admin', component: LayoutAdminComponent, children: [
    {path: '', component: DashboardComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
