import { Component, OnInit, Input } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { IDeliveryMethod } from 'src/app/shared/models/deliveryMethod';
import { FormGroup } from '@angular/forms';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm: FormGroup;
  deliveryMethod: IDeliveryMethod[];

  constructor(private checkoutService: CheckoutService, private cartService: CartService) { }

  ngOnInit() {
    this.checkoutService.getDeliveryMethod().subscribe((dm: IDeliveryMethod[]) => {
      this.deliveryMethod = dm;
    }, e => {
      console.log(e);
    });
  }

  setShippingPrice(deliveryMethod: IDeliveryMethod) {
    this.cartService.setShippingPrice(deliveryMethod);
  }

}
