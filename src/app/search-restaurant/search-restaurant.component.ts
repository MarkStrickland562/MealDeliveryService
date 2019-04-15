import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Restaurant } from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  styleUrls: ['./search-restaurant.component.css'],
  providers: [RestaurantService]
})

export class SearchRestaurantComponent implements OnInit {

  restaurantList: FirebaseListObservable<any[]>;
  searchString: string;

  constructor(private router: Router, private restaurantService: RestaurantService){}

  ngOnInit() {
    this.restaurantList = this.restaurantService.getRestaurants();
  }

  goToEditRestaurantPage(clickedRestaurant) {
    this.router.navigate(['edit-restaurant', clickedRestaurant.$key]);
  }

  goToDeleteRestaurantPage(clickedRestaurant) {
    this.router.navigate(['delete-restaurant', clickedRestaurant.$key]);
  }
}
