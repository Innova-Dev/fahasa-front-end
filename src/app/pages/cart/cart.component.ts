import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { CartService } from './../../services/cart.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: IProduct[] = []
  total: number = 0;
  message: string = ''

  constructor(
    private CartService: CartService,
    private AuthenticationService: AuthenticationService,
    private router: Router
  ) {
    this.products = this.CartService.createUniqueCart(this.CartService.getCartItems())
    this.total = this.CartService.calculateTotalPrice(this.products)
  }

  updateTotalPrice(e: any, id: string | number | undefined) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i]._id === id) {
        if(e.target.value >= 0){
          this.products[i].total = +e.target.value
        }else{
          e.target.value = 0
          this.products[i].total = +e.target.value
        }
        this.total = this.CartService.calculateTotalPrice(this.products)
        break
      }
    }
  }

  removeCartItem(id: string | number | undefined) {
    this.products = this.CartService.removeCartItem(id)
    this.total = this.CartService.calculateTotalPrice(this.products)
  }

  onHandleBuy() {
    if(this.AuthenticationService.isAuthenticated()){
      for(let i = 0; i < this.products.length; i++){
        if(this.products[i].total == 0){
          this.message = 'Số lượng sản phẩm không được bằng 0'
          console.log(this.products[i].total)
        }else{
          this.message = ''
        }
      }
      localStorage.setItem('checkoutItems', JSON.stringify(this.products))
      if(this.message == ''){
        this.router.navigate(['/checkout'])
      }
    }else{
      this.message = 'Bạn phải đăng nhập để thanh toán'
    }

  }

}
