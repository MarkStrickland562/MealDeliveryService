import { Injectable } from '@angular/core';
import { Restaurant } from './models/restaurant.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RestaurantService {
  restaurantList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.restaurantList = database.list('restaurants');
  }

  getRestaurants() {
    return this.restaurantList;
  }

  getRestaurantById(restaurantId: string) {
    return this.database.object('/restaurants/' + restaurantId);
  }

  addRestaurant(newRestaurant: Restaurant) {
    this.restaurantList.push(newRestaurant);
  }

  updateRestaurant(localUpdatedRestaurant){
    var restaurantInFirebase = this.getRestaurantById(localUpdatedRestaurant.$key);
    restaurantInFirebase.update({restaurantName: localUpdatedRestaurant.restaurantName,
                                 streetAddress: localUpdatedRestaurant.streetAddress,
                                 hours: localUpdatedRestaurant.hours,
                                 website: localUpdatedRestaurant.website,
                                 menuType: localUpdatedRestaurant.menuType,
                                 menuItems: localUpdatedRestaurant.menuItems});
  }

  deleteRestaurant(restaurantToBeDeleted){
    var restaurantToDeleteInFirebase = this.getRestaurantById(restaurantToBeDeleted.$key);
    restaurantToDeleteInFirebase.remove();
  }
}
