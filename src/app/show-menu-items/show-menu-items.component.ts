import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { MenuItem }  from '../models/menuItem.model';
import { Restaurant }  from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-show-menu-items',
  templateUrl: './show-menu-items.component.html',
  styleUrls: ['./show-menu-items.component.css'],
  providers: [RestaurantService]
})
export class ShowMenuItemsComponent implements OnInit {

  restaurantId: string;
  restaurantToDisplay: Restaurant;
  menuItems: MenuItem[] = [];

  constructor(private route: ActivatedRoute, private location: Location, private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.restaurantId = urlParameters['restaurantId'];
    });

    this.restaurantService.getRestaurantByKey(this.restaurantId).subscribe(dataLastEmittedFromObserver => {
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
}

