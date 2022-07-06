import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/Chart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: BehaviorSubject<Cart[]> = new BehaviorSubject<Cart[]>([])
  private cart$ = this._cart.asObservable()
  constructor(

  ) {

  }
  addItem(item: any) {
    let selectedCartItem = this._cart.value.find(cart => cart.id == item.id)
    if (selectedCartItem) {
      selectedCartItem.quantity += 1
      this._cart.next([...this._cart.value])
    } else {
      this._cart.next([...this._cart.value, { ...item, quantity: 0 }])

    }

  }
  removeItem(data: any) {

    let selectedCartItem = this._cart.value.find(cart => cart.id == data.id)
    if (selectedCartItem?.quantity) {
      selectedCartItem.quantity -= 1
    } else {
      this._cart.value.splice(data.index, 1)
    }
    this._cart.next([...this._cart.value])
  }
  get carts() {
    return this.cart$
  }
}

