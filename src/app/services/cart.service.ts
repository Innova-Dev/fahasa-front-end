import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemCount: number = 0;
  private cartItemCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.cartItemCount);
  private cartItems: any[] = [];

  constructor() { 
    // Kiểm tra xem có dữ liệu giỏ hàng trong Local Storage hay không
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      this.cartItemCount = this.cartItems.length
      this.cartItemCountSubject = new BehaviorSubject<number>(this.cartItems.length);
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getCartItemCount(): BehaviorSubject<number> {
    return this.cartItemCountSubject;
  }

  addToCart(item: any): void {
    this.cartItems.push(item);
    this.cartItemCount++;
    this.cartItemCountSubject.next(this.cartItemCount);
    this.updateLocalStorage();
  }

  

  private updateLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
