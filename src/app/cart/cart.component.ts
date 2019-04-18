import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../models/order.model';
import { OrderItem } from '../models/orderItem.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [
    OrderService,
    RestaurantService
  ]
})
export class CartComponent implements OnInit {
  order = null;
  orders: Order[] = [];
  orderItemsArray: FirebaseListObservable<any[]>;
  
  constructor(private orderService: OrderService, private restaurantService: RestaurantService) { }

  ngOnInit() {

    let orderSubscription = this.orderService.getOrders().subscribe(snapshot => {
      for(let i=0; i<snapshot.length; i++){
        if(snapshot[i].status === "COMPLETED")
          continue;
        let orderUserKey = snapshot[i].orderUserKey;
        let restaurantKey = snapshot[i].restaurantKey;
        let status = snapshot[i].status;
        let totalCost = snapshot[i].totalCost;
        let orderItems: OrderItem[] = [];
        let key = snapshot[i].$key;
        for(let j=0; j<snapshot[i].orderItems.length; j++){
          let cost = snapshot[i].orderItems[j].cost;
          let menuItem = snapshot[i].orderItems[j].menuItem;
          let quantity = snapshot[i].orderItems[j].quantity;
          let newOrderItem = new OrderItem(menuItem, quantity, cost);
          orderItems.push(newOrderItem);
        }
        var newOrder = new Order(orderUserKey, new Date(), new Date(), restaurantKey, orderItems, totalCost, status);
        newOrder.key = key;
        let restaurantSubscription = this.restaurantService.getRestaurantByKey(restaurantKey).subscribe(snapshot => {
          newOrder.restaurant = snapshot.restaurantName;
        
          restaurantSubscription.unsubscribe();
        });
        this.orders.push(newOrder);
        
      }
      orderSubscription.unsubscribe();
    });
    
  }

  checkout(order: Order){
    order.status = "COMPLETED"
    this.orderService.checkoutOrder(order.key)
    let done = document.getElementById('orderSuccess') 
      if (!done.style.display) {
        done.style.display = 'block';
      } 
    }
  }

