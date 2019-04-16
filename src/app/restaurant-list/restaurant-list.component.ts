import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
  providers: [RestaurantService]
})
export class RestaurantListComponent implements OnInit {

  restaurants = ["Jade Garden", "Panda Express", "Canlis", "Olive Garden", "The Keg", "The Old Spaghetti Factory", "The Cheesecake Factory"];

  constructor() { }

  ngOnInit() {
  }

  

}
