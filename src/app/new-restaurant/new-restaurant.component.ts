import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Restaurant } from '../models/restaurant.model';
import { MenuItem } from '../models/menuItem.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css'],
  providers: [RestaurantService]
})

export class NewRestaurantComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private restaurantService: RestaurantService) {}

  ngOnInit() {
  }

  goToShowRestaurantPage() {
      this.router.navigate(['restaurants']);
  }

  addRestaurant(restaurantKey: string, restaurantName: string, streetAddress: string, hours: string, website: string, menuType: string, menuItems: MenuItem[]) {
    if (restaurantKey != "" && restaurantName != "" && streetAddress != "" && hours != "" && website != "" && menuType != "" && menuItems.length > 0) {
      let newRestaurant: Restaurant = new Restaurant(restaurantKey, restaurantName, streetAddress, hours, website, menuType, menuItems);
      this.restaurantService.addRestaurant(newRestaurant);
      this.goToShowRestaurantPage();
    } else {
      alert('All fields are required!');
    }
  }
}
