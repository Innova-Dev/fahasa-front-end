import { Component,OnInit  } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {
    this.updateCartItemCount();
  }

  updateCartItemCount(): void {
    const cartItems = this.cartService.getCartItems();
    this.cartItemCount = cartItems.length;
  }
  ngOnInit(): void {
    this.cartService.getCartItemCount().subscribe((count: number) => {
      this.cartItemCount = count;
    });
  }
}
