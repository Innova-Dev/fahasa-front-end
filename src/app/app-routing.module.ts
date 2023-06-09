import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CateComponent } from './pages/admin/categories/cate/cate.component';
import { ListCateComponent } from './pages/admin/categories/list-cate/list-cate.component';
import { EditCateComponent } from './pages/admin/categories/edit-cate/edit-cate.component';
import { LayoutAdminComponent } from './layout/LayoutAdmin/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductListComponent } from './pages/admin/products/product-list/product-list.component';
import { ProductEditComponent } from './pages/admin/products/product-edit/product-edit.component';
import { ProductAddComponent } from './pages/admin/products/product-add/product-add.component';
import { AuthGuard } from './auth.guard';
import { PurchaseHistoryComponent } from './pages/admin/purchase-history/purchase-history.component';
const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: ProductComponent },
      { path: 'product/:_id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'auth', component: AuthComponent }
    ]
  },
  { path: 'admin', component: LayoutAdminComponent,canActivate: [AuthGuard], children: [
    {path:'categories',children:[
      {path:'',component:ListCateComponent},
      {path:'add',component:CateComponent},
      {path:'edit/:_id',component:EditCateComponent}
    ]},
    {path:'products',children:[
      {path:'',component:ProductListComponent},
      {path:'add',component:ProductAddComponent},
      {path:':_id/edit',component:ProductEditComponent}
    ]},
    {path:'purchase-history',children:[
      {path:'',component:PurchaseHistoryComponent}
     
    ]}
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
