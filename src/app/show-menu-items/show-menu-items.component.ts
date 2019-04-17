import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { MenuItem }  from '../models/menuItem.model';
import { Order }  from '../models/order.model';
import { OrderItem }  from '../models/orderItem.model';
import { Restaurant }  from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-show-menu-items',
  templateUrl: './show-menu-items.component.html',
  styleUrls: ['./show-menu-items.component.css'],
  providers: [RestaurantService, OrderService]
})
export class ShowMenuItemsComponent implements OnInit {

  userKey: string = '1';
  restaurantKey: string;
  orderKey: string;
  restaurantToDisplay: Restaurant;
  menuItems: MenuItem[] = [];
  // currentOrder: Order;
  // orderItems: OrderItem[] = [];

  constructor(private route: ActivatedRoute, private location: Location, private restaurantService: RestaurantService, private orderService: OrderService) { }

  ngOnInit() {

    // this.orderService.getOrders().subscribe(snapshot => {
    //
    // // TODO: add order state
    //
    //   for(let i = 0; i < snapshot.length; i++)
    //     if(snapshot[i].restaurantKey === this.restaurantKey){
    //
    //       //currentOrder = new Order();
    //       orderKey = snapshot[i].$key;
    //       break;
    //     }
    // }


    this.route.params.forEach((urlParameters) => {
      this.restaurantKey = urlParameters['restaurantKey'];
    });

    if (this.restaurantKey) {

    this.restaurantService.getRestaurantByKey(this.restaurantKey).subscribe(dataLastEmittedFromObserver => {
//      let restaurant = dataLastEmittedFromObserver;
      let items: MenuItem[] = [];

      for(let i = 0; i < dataLastEmittedFromObserver.menuItems.length; i++){
        let subItems: string[] = [];

        for(let j = 0; j < dataLastEmittedFromObserver.menuItems[i].menuSubItems.length; j++){
          subItems.push(dataLastEmittedFromObserver.menuItems[i].menuSubItems[j]);
        }
        let newItem = new MenuItem(dataLastEmittedFromObserver.menuItems[i].menuItemName,
                     dataLastEmittedFromObserver.menuItems[i].cost,
                     dataLastEmittedFromObserver.menuItems[i].preparationTime,
                     subItems);

        items.push(newItem);
        this.menuItems.push(newItem);
      }
      this.restaurantToDisplay = new Restaurant(
                     dataLastEmittedFromObserver.restaurantName,
                     dataLastEmittedFromObserver.streetAddress,
                     dataLastEmittedFromObserver.hours,
                     dataLastEmittedFromObserver.website,
                     dataLastEmittedFromObserver.cuisine,
                     items);
    });
  }
}
  addToCart(menuItemToAdd: MenuItem){

    let timesAdded=0;
    let key = null;
    let subscription = this.orderService.getOrders().subscribe(snapshot => {
      
// TODO: add order state

      let order;
      for(let i = 0; i < snapshot.length; i++)
        if(snapshot[i].restaurantKey === this.restaurantKey){
          order = snapshot[i];
          break;
        }

      let newOrderItem = new OrderItem(menuItemToAdd.menuItemName, 1, parseInt(menuItemToAdd.menuItemCost));
console.log(order);
      if(order != null){
        if(timesAdded===0){
          console.log('add order items');
          this.orderService.addOrderItem(order.$key, newOrderItem);
          timesAdded++;
        }
      }
      else //if(order == null)
      {
        //if(!key)
        //{
          console.log('add new order with items');
          let newOrder = new Order(this.userKey, new Date(), new Date(), this.restaurantKey, [], 0);
          newOrder.orderItems.push(newOrderItem);
          key = this.orderService.addOrder(newOrder);
        //}
      }
      subscription.unsubscribe();
    })
  }
}
