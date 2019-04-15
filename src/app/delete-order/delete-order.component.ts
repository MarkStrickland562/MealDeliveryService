import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Order } from '../models/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css'],
  providers: [OrderService]
})

export class DeleteOrderComponent implements OnInit {
  orderId: string;
  orderToDelete;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private orderService: OrderService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.orderId = urlParameters['id'];
    });
    this.orderService.getOrderById(this.orderId).subscribe(dataLastEmittedFromObserver => {
      this.orderToDelete = dataLastEmittedFromObserver;
    })
  }

  goToShowOrderPage(){
    this.router.navigate(['orders']);
  }

  onSelect(order: any) {
    if (order.target.value === "true") {
      this.orderService.deleteOrder(this.orderToDelete);
    }
    this.goToShowOrderPage();
  }
}
