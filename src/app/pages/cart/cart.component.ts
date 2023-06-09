import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { CartService } from './../../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
products:IProduct[]=[]
total:number = 0;
constructor(private CartService:CartService){
  this.products = this.CartService.createUniqueCart(this.CartService.getCartItems())
  this.total = this.CartService.calculateTotalPrice(this.products)
}

}
