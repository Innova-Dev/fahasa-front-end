import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../interfaces/product';
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

  createUniqueCart(arr : IProduct[]) : IProduct[] {
    const uniqueObjects: any = {}; // Dùng đối tượng để lưu trữ các đối tượng duy nhất với id là khóa
  
    for (const obj of arr) {
      const objId : any = obj._id;
      if (objId in uniqueObjects) {
        uniqueObjects[objId].total += 1;
      } else {
        uniqueObjects[objId] = obj;
        uniqueObjects[objId].total = 1;
      }
    }
    return Object.values(uniqueObjects); // Trả về mảng các đối tượng duy nhất
  }
  calculateTotalPrice(arr: IProduct[]) : number {
    let totalPrice = 0;
  
    for (const obj of arr) {
      const { original_price, total } = obj;
      if(original_price && total){
        totalPrice += original_price * total;
      }
    }
    return totalPrice;
  }

  

  private updateLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }


}
