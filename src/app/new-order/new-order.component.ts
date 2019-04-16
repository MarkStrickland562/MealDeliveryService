import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Order } from '../models/order.model';
import { OrderItem } from '../models/orderItem.model';
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

  addOrder(orderUserKey: string, deliveryDateTime: Date = new Date(), orderDateTime: Date = new Date(), restaurantKey: string, orderItems: OrderItem[], totalCost: number) {
    if (orderUserKey != "" && Date.parse(deliveryDateTime.toString()) != 0 && Date.parse(orderDateTime.toString()) != 0 && restaurantKey != "" && orderItems.length > 0) {
      let newOrder: Order = new Order(orderUserKey, orderDateTime, deliveryDateTime, restaurantKey, orderItems, totalCost);
      this.orderService.addOrder(newOrder);
      this.goToShowOrderPage();
    } else {
      alert('All fields are required!');
    }
  }
}
