import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [OrderService]
})
export class CartComponent implements OnInit {
  //order = null;
  orders: FirebaseListObservable<any[]>;

  
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  orderSubmit() {
    // this.order = true;
  }

}
