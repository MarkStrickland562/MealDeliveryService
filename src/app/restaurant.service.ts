import { Injectable } from '@angular/core';
import { Restaurant } from './models/restaurant.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RestaurantService {
  restaurantList: FirebaseListObservable<any[]>;
  restaurantListForCuisine: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.restaurantList = database.list('restaurants');
  }

  getRestaurants() {
    return this.restaurantList;
  }

  getRestaurantsForCuisine(cuisine: string) {
    this.restaurantListForCuisine = this.database.list('/restaurants', {
      query: {
        orderByChild: 'restaurantName',
        equalTo: cuisine
      }
    });
  }

  getRestaurantByKey(restaurantKey: string) {
    return this.database.object('/restaurants/' + restaurantKey);
  }

  addRestaurant(newRestaurant: Restaurant) {
    this.restaurantList.push(newRestaurant);
  }

  updateRestaurant(localUpdatedRestaurant){
    var restaurantInFirebase = this.getRestaurantByKey(localUpdatedRestaurant.$key);
    restaurantInFirebase.update({restaurantName: localUpdatedRestaurant.restaurantName,
                                 streetAddress: localUpdatedRestaurant.streetAddress,
                                 hours: localUpdatedRestaurant.hours,
                                 website: localUpdatedRestaurant.website,
                                 cuisine: localUpdatedRestaurant.cuisine,
                                 menuItems: localUpdatedRestaurant.menuItems,
                                 price: localUpdatedRestaurant.price,
                                 imageUrl: localUpdatedRestaurant.imageUrl});
  }

  deleteRestaurant(restaurantToBeDeleted){
    var restaurantToDeleteInFirebase = this.getRestaurantByKey(restaurantToBeDeleted.$key);
    restaurantToDeleteInFirebase.remove();
  }

  deleteAllRestaurants() {
    this.restaurantList.remove();
  }
}
