import { Injectable } from '@angular/core';
import { ORDERS } from './mock-data/shopping-cart';
import { Order } from './models/order.model';

@Injectable()
export class ShoppingCartService {
//  import { Order } from '.././models/order.model';

  public ORDERS: Order[];

  //constructor() { }

  getOrder(restaurantKey: string){
    if(ORDERS.length > 0){
      for(let i = 0; i < ORDERS.length; i++){
        if(ORDERS[i].restaurantKey == restaurantKey){
          return ORDERS[i];
        }
      }
    }
    console.log(ORDERS);
    return null;
  }

  addNewOrder(newOrder: Order){
    console.log(ORDERS);
    ORDERS.push(newOrder);
  }

  getOrders(){
    return ORDERS;
  }
}
