import { Component } from '@angular/core';
import { Router } from 'express';
import { IProduct } from 'src/app/interfaces/product';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  products: IProduct[] = []
  total: number = 0;
  constructor(
    private CartService: CartService,
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
  
}
