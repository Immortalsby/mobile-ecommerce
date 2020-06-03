import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { IOrder, IOrderItem } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: IOrder;

  constructor(private ordersService: OrdersService, private activatedRoute: ActivatedRoute, private bcService: BreadcrumbService) {
    this.bcService.set('@OrderDetails', '');
  }

  ngOnInit() {
    this.loadOrder();
  }

  loadOrder() {
    this.ordersService.getOrder(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((order: IOrder) => {
      this.order = order;
      this.bcService.set('@orderDetails', `Order# ${order.id} - ${order.status}`);
    }, e => {
      console.log(e);
    });
  }

}
