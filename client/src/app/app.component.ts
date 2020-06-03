import { Component, OnInit } from '@angular/core';
import { CartService } from './cart/cart.service';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ShopDemo';

  constructor(
    private cartService: CartService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.loadCart();
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe(
      () => {
      },
      (e) => {
        console.log(e);
      }
    );
  }

  loadCart() {
    const cartId = localStorage.getItem('cart_id');
    if (cartId) {
      this.cartService.getCart(cartId).subscribe(
        () => {
          console.log('App loaded');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
