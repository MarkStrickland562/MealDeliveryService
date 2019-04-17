import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Restaurant } from '../models/restaurant.model';



@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
  providers: [RestaurantService]
})
export class RestaurantListComponent implements OnInit {

  restaurantList: FirebaseListObservable<any[]>;
  selectedRestaurant = null;
  selectedRestaurantToDelete = null;

  constructor(private router: Router, private restaurantService: RestaurantService){}

  ngOnInit() {
    this.restaurantList = this.restaurantService.getRestaurants();
  }

  editRestaurant(clickedRestaurant: Restaurant) {
    this.selectedRestaurant = clickedRestaurant;
  }

  finishedEditing() {
    this.selectedRestaurant = null;
  }

  goToEditRestaurantPage(clickedRestaurant) {
    this.router.navigate(['edit-restaurant', clickedRestaurant.$key]);
  }

  goToDeleteRestaurantPage(clickedRestaurant) {
    this.router.navigate(['delete-restaurant', clickedRestaurant.$key]);
  }

  goToAddRestaurantPage() {
    this.router.navigate(['new-restaurant']);
  }

  goToSearchRestaurantPage() {
    this.router.navigate(['search-restaurant']);
  }

  goToMenuPage(restaurant) {
    this.router.navigate(['restaurants', restaurant.$key])
  }

}
