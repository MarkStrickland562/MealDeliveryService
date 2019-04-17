import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { MenuItem }  from '../models/menuItem.model';
import { Order }  from '../models/order.model';
import { OrderItem }  from '../models/orderItem.model';
import { Restaurant }  from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-show-menu-items',
  templateUrl: './show-menu-items.component.html',
  styleUrls: ['./show-menu-items.component.css'],
  providers: [RestaurantService, ShoppingCartService]
})
export class ShowMenuItemsComponent implements OnInit {

  order: Order = null; // the index in ORDERS
  userKey: string = '1';
  restaurantKey: string;
  restaurantToDisplay: Restaurant;
  menuItems: MenuItem[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private restaurantService: RestaurantService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
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
                     dataLastEmittedFromObserver.menuItems[i].menuItemCost,
                     dataLastEmittedFromObserver.menuItems[i].preparationTime,
                     subItems);

        items.push(newItem);
        this.menuItems.push(newItem);
        console.log(this.menuItems)
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
    if(this.order === null){
      this.order = this.shoppingCartService.getOrder(this.restaurantKey);
    }

    let newOrderItem = new OrderItem(menuItemToAdd.menuItemName, 1, parseInt(menuItemToAdd.menuItemCost));

    if(this.order === null){
      let newOrder = new Order(this.userKey, new Date(), new Date(), this.restaurantKey, [], 0, "");
      this.shoppingCartService.addNewOrder(newOrder);
      this.order = newOrder;
    }

    this.order.addNewOrderItem(newOrderItem);

    console.log(this.order);

  }
  goToCart() {
    this.router.navigate(['cart'])
  }
}
