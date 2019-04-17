import { Injectable } from '@angular/core';
import { Order } from './models/order.model';
import { OrderItem } from './models/orderItem.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class OrderService {
  orderList: FirebaseListObservable<any[]>;
  orderListForUser: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.orderList = database.list('orders');
  }

  getOrders() {
    return this.orderList;
  }

  getOrdersForUser(userKey: string) {
    this.orderListForUser = this.database.list('/orders', {
      query: {
        orderByChild: 'orderDateTime',
        equalTo: userKey
      }
    });
  }

  // getOrderByRestaurantKey(restaurantKey: string){
  //   this.getOrders().subscribe(snapshot => {
  //     snapshot.forEach(order => {
  //       if(order.restaurantKey == restaurantKey){
  //         console.log(order.$key);
  //         return order;
  //       }
  //     })
  //     return null;
  //   })
  // }

  getOrderByKey(orderKey: string) {
    return this.database.object('/orders/' + orderKey);
  }

  addOrder(newOrder: Order) {
    var newRef = this.orderList.push(newOrder);
    return newRef.key;
  }

  addOrderItem(orderKey: string, newOrderItem: OrderItem) {

    let ref = `orders/${orderKey}/order_items/`;
    console.log(newOrderItem);
    //this.database.list(ref).push(newOrderItem);
  }

  updateOrder(localUpdatedOrder){
    var orderInFirebase = this.getOrderByKey(localUpdatedOrder.$key);
    orderInFirebase.update({orderUserKey: localUpdatedOrder.orderUserKey,
                            orderDateTime: localUpdatedOrder.orderDateTime,
                            deliveryDateTime: localUpdatedOrder.deliveryDateTime,
                            restaurantKey: localUpdatedOrder.restaurantKey,
                            orderItems: localUpdatedOrder.orderItems,
                            totalCost: localUpdatedOrder.totalCost});
  }

  deleteOrder(orderToBeDeleted){
    var orderToDeleteInFirebase = this.getOrderByKey(orderToBeDeleted.$key);
    orderToDeleteInFirebase.remove();
  }

  deleteAllOrders() {
    this.orderList.remove();
  }
}
