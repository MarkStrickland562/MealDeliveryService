import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Restaurant } from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css'],
  providers: [RestaurantService]
})

export class DeleteRestaurantComponent implements OnInit {
  restaurantId: string;
  restaurantToDelete;

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
      this.restaurantToDelete = dataLastEmittedFromObserver;
    })
  }

  goToShowRestaurantPage(){
    this.router.navigate(['restaurants']);
  }

  onSelect(restaurant: any) {
    if (restaurant.target.value === "true") {
      this.restaurantService.deleteRestaurant(this.restaurantToDelete);
    }
    this.goToShowRestaurantPage();
  }
}
