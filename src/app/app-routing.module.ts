import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CateComponent } from './pages/admin/cate/cate.component';
import { ListCateComponent } from './pages/admin/listCate/list-cate/list-cate.component';
import { EditCateComponent } from './pages/admin/edit-cate/edit-cate/edit-cate.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', component: ProductComponent},
    { path: 'product/:_id', component: ProductDetailComponent},
    { path: 'cart', component: CartComponent},
    { path: 'checkout', component: CheckoutComponent},
    {path:'auth',component:AuthComponent},
    {path: 'add/cate', component:CateComponent},
    {path: 'list', component: ListCateComponent},
    {path: 'edit', component: EditCateComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
