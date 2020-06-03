import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ICartTotals } from '../../models/cart';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  @Input() shippingPrice: number;
  @Input() subtotal: number;
  @Input() total: number;

  constructor() { }

  ngOnInit() {
  }

}
