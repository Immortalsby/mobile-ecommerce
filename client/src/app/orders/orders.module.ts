import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { CartSummaryComponent } from '../shared/components/cart-summary/cart-summary.component';
import { OrderTotalsComponent } from '../shared/components/order-totals/order-totals.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [OrderDetailComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
