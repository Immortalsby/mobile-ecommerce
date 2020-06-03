import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from 'src/app/shared/models/cart';
import { CartService } from 'src/app/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper: CdkStepper;
  cart$: Observable<ICart>;

  constructor(private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit() {
    this.cart$ = this.cartService.cart$;
  }

  createPaymentIntent() {
    return this.cartService.createPaymentIntent().subscribe((res: any) => {
      this.appStepper.next();
    }, e => {
      console.log(e);
    });
  }

}
