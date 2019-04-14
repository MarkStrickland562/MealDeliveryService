import { Injectable } from '@angular/core';
import { Order } from './models/order.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class OrderService {
  orderList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.orderList = database.list('orders');
  }

  getOrders() {
    return this.orderList;
  }

  getOrderById(orderId: string) {
    return this.database.object('/orders/' + orderId);
  }

  addOrder(newOrder: Order) {
    this.orderList.push(newOrder);
  }

  updateOrder(localUpdatedOrder){
    var orderInFirebase = this.getOrderById(localUpdatedOrder.$key);
    orderInFirebase.update({orderDateTime: localUpdatedOrder.orderDateTime,
                            deliveryDateTime: localUpdatedOrder.deliveryDateTime,
                            restaurantKey: localUpdatedOrder.restaurantKey,
                            orderDetails: localUpdatedOrder.orderDetails});
  }

  deleteOrder(orderToBeDeleted){
    var orderToDeleteInFirebase = this.getOrderById(orderToBeDeleted.$key);
    orderToDeleteInFirebase.remove();
  }
}
