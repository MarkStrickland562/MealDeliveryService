import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../models/order.model';
import { OrderItem } from '../models/orderItem.model';
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
  order = null;
  orders: Order[] = [];
  orderItemsArray: FirebaseListObservable<any[]>;
  
  constructor(private orderService: OrderService) { }

  ngOnInit() {

    this.orderService.getOrders().subscribe(snapshot => {
      for(let i=0; i<snapshot.length; i++){
        let orderUserKey = snapshot[i].orderUserKey;
        let restaurantKey = snapshot[i].restaurantKey;
        let status = snapshot[i].status;
        let totalCost = snapshot[i].totalCost;
        let orderItems: OrderItem[] = [];
        for(let j=0; j<snapshot[i].orderItems.length; j++){
          let cost = snapshot[i].orderItems[j].cost;
          let menuItem = snapshot[i].orderItems[j].menuItem;
          let quantity = snapshot[i].orderItems[j].quantity;
          let newOrderItem = new OrderItem(menuItem, quantity, cost);
          console.log(newOrderItem);
          orderItems.push(newOrderItem);
        }
        var newOrder = new Order(orderUserKey, new Date(), new Date(), restaurantKey, orderItems, totalCost, status);
        this.orders.push(newOrder);
        console.log(newOrder);
      }
    });
    
  }

  orderSubmit() {
    this.order = true;
  }

  showOrderDetails(order){
    this.order=order;
    console.log(order.orderItems[0].menuItem);
  }

}
