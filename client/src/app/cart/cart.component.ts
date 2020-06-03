import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart, ICartItem, ICartTotals } from '../shared/models/cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$: Observable<ICart>;
  cartTotal$: Observable<ICartTotals>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart$ = this.cartService.cart$;
    this.cartTotal$ = this.cartService.cartTotal$;
  }

  removeCartItem(item: ICartItem) {
    this.cartService.removeItemFromCart(item);
  }

  incrementItemQuantity(item: ICartItem) {
    this.cartService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: ICartItem) {
    this.cartService.decrementItemQuantity(item);
  }

}
