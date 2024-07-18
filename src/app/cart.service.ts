
import { Injectable } from '@angular/core';
import { Product, CartItem } from './models/Product.model'; // Adjust the path as needed
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItemsSubject.next(JSON.parse(storedCart));
    }
  }

  additem(product: CartItem): void {
    const cartItems = this.cartItemsSubject.getValue();
    const exist = cartItems.find((item: CartItem) => item.id === product.id);

    if (exist) {
      exist.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    this.setCartData(cartItems);
  }

  getCartItems() {
    return this.cartItems$;
  }

  public setCartData(data: CartItem[]): void {
    localStorage.setItem('cart', JSON.stringify(data));
    this.cartItemsSubject.next(data);
    localStorage.setItem('cart', JSON.stringify(data));
    this.cartItemsSubject.next(data);
  }

  public getCartData(): CartItem[] {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
  }










