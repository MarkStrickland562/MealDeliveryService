import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Order } from '../models/order.model';
import { OrderDetail } from '../models/orderDetail.model';
import { User } from '../models/user.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],
  providers: [OrderService]
})

export class NewOrderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private orderService: OrderService) {}

  ngOnInit() {
  }

  goToShowOrderPage() {
      this.router.navigate(['orders']);
  }

  addOrder(orderKey: string, orderUserKey: string, deliveryDateTime: Date = new Date(), orderDateTime: Date = new Date(), restaurantKey: string, orderDetails: OrderDetail[]) {
    if (orderKey != "" && orderUserKey != "" && Date.parse(deliveryDateTime.toString()) != 0 && Date.parse(orderDateTime.toString()) != 0 && restaurantKey != "" && orderDetails.length > 0) {
      let newOrder: Order = new Order(orderKey, orderUserKey, deliveryDateTime, orderDateTime, restaurantKey, orderDetails);
      this.orderService.addOrder(newOrder);
      this.goToShowOrderPage();
    } else {
      alert('All fields are required!');
    }
  }
}
