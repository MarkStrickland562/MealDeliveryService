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

  restaurantKey: string;
  restaurantToDisplay: Restaurant;
  menuItems: MenuItem[] = [];

  constructor(private route: ActivatedRoute, private location: Location, private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.restaurantKey = urlParameters['restaurantId'];
    });

    this.restaurantService.getRestaurantByKey(this.restaurantKey).subscribe(dataLastEmittedFromObserver => {
      let items: MenuItem[] = [];

      for(let i = 0; i < dataLastEmittedFromObserver.menu.menuItems.length; i++){
        let subItems: string[] = [];

        for(let j = 0; j < dataLastEmittedFromObserver.menu.menuItems[i].menuSubItems.length; j++){
          subItems.push(dataLastEmittedFromObserver.menu.menuItems[i].menuSubItems[j]);
        }
        let newItem = new MenuItem(dataLastEmittedFromObserver.menu.menuItems[i].menuItemName,
                                   dataLastEmittedFromObserver.menu.menuItems[i].cost,
                                   dataLastEmittedFromObserver.menu.menuItems[i].preparationTime,
                                   subItems);
        items.push(newItem);
        this.menuItems.push(newItem);
      }
      this.restaurantToDisplay = new Restaurant(
                     dataLastEmittedFromObserver.restaurantName,
                     dataLastEmittedFromObserver.streetAddress,
                     dataLastEmittedFromObserver.hours,
                     dataLastEmittedFromObserver.website,
                     dataLastEmittedFromObserver.menuType,
                     items);

      console.log(this.restaurantToDisplay);
    });
  }
}
}