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
  restaurantToDisplay: Restaurant;
  menuItems: MenuItem[] = [];

  constructor(private route: ActivatedRoute, private location: Location, private restaurantService: RestaurantService, private orderService: OrderService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.restaurantKey = urlParameters['restaurantKey'];
    });

    this.restaurantService.getRestaurantByKey(this.restaurantKey).subscribe(dataLastEmittedFromObserver => {
//      let restaurant = dataLastEmittedFromObserver;
      let items: MenuItem[] = [];

      for(let i = 0; i < dataLastEmittedFromObserver.menu_items.length; i++){
        let subItems: string[] = [];

        for(let j = 0; j < dataLastEmittedFromObserver.menu_items[i].menu_sub_items.length; j++){
          subItems.push(dataLastEmittedFromObserver.menu_items[i].menu_sub_items[j]);
        }
        let newItem = new MenuItem(dataLastEmittedFromObserver.menu_items[i].menu_item_name,
                     dataLastEmittedFromObserver.menu_items[i].cost,
                     dataLastEmittedFromObserver.menu_items[i].preparation_time,
                     subItems);

        items.push(newItem);
        this.menuItems.push(newItem);
      }
      this.restaurantToDisplay = new Restaurant(
                     dataLastEmittedFromObserver.restaurant_name,
                     dataLastEmittedFromObserver.street_address,
                     dataLastEmittedFromObserver.hours,
                     dataLastEmittedFromObserver.website,
                     dataLastEmittedFromObserver.cuisine,
                     items);
    });
  }

  addToCart(menuItemToAdd: MenuItem){
    this.orderService.getOrders().subscribe(snapshot => {

// TODO: add order state

      let order;
      for(let i = 0; i < snapshot.length; i++)
        if(snapshot[i].restaurantKey === this.restaurantKey){
          order = snapshot[i];
          break;
        }

      let newOrderItem = new OrderItem(menuItemToAdd.menuItemName, 1, parseInt(menuItemToAdd.menuItemCost));

      if(order != null){
        this.orderService.addOrderItem(order.$key, newOrderItem);
      }
      else //if(order == null)
      {
        let newOrder = new Order(this.userKey, new Date(), new Date(), this.restaurantKey, [], 0);
        let key = this.orderService.addOrder(newOrder);
      }
    })
  }
}
