import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Observable } from 'rxjs';
import { ICart, ICartItem } from '../../models/cart';
import { IOrderItem } from '../../models/order';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  @Output() decrement: EventEmitter<ICartItem> = new EventEmitter<ICartItem>();
  @Output() increment: EventEmitter<ICartItem> = new EventEmitter<ICartItem>();
  @Output() remove: EventEmitter<ICartItem> = new EventEmitter<ICartItem>();
  @Input() isCart = true;
  @Input() isOrder = false;
  @Input() items: ICartItem[] | IOrderItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  decrementItemQuantity(item: ICartItem) {
    this.decrement.emit(item);
  }

  incrementItemQuantity(item) {
    this.increment.emit(item);
  }

  removeCartItem(item) {
    this.remove.emit(item);
  }
}
