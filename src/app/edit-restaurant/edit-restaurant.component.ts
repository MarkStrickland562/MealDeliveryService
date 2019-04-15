import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Restaurant } from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css'],
  providers: [RestaurantService]
})

export class EditRestaurantComponent implements OnInit {

  restaurantId: string;
  restaurantToUpdate;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.restaurantId = urlParameters['id'];
    });
    this.restaurantService.getRestaurantById(this.restaurantId).subscribe(dataLastEmittedFromObserver => {
      this.restaurantToUpdate = dataLastEmittedFromObserver;
    })
  }

  goToShowRestaurantPage() {
      this.router.navigate(['restaurants']);
  }

  updateRestaurant(restaurantToUpdate) {
    if (restaurantToUpdate.restaurantName != "" && restaurantToUpdate.streetAddress != "" && restaurantToUpdate.hours != "" && restaurantToUpdate.website != "" && restaurantToUpdate.cuisine != "" && restaurantToUpdate.menuItems.length > 0) {
      this.restaurantService.updateRestaurant(restaurantToUpdate);
      this.goToShowRestaurantPage();
    } else {
      alert('All fields are required!');
    }
  }
}
