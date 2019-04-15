import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Order } from '../models/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css'],
  providers: [OrderService]
})

export class ShowOrdersComponent implements OnInit {

  orderList: FirebaseListObservable<any[]>;
  selectedOrder = null;
  selectedOrderToDelete = null;

  constructor(private router: Router, private orderService: OrderService){}

  ngOnInit() {
    this.orderList = this.orderService.getOrders();
  }

  editOrder(clickedOrder: Order) {
    this.selectedOrder = clickedOrder;
  }

  finishedEditing() {
    this.selectedOrder = null;
  }

  goToEditOrderPage(clickedOrder) {
    this.router.navigate(['edit-order', clickedOrder.$key]);
  }

  goToDeleteOrderPage(clickedOrder) {
    this.router.navigate(['delete-order', clickedOrder.$key]);
  }

  goToAddOrderPage() {
    this.router.navigate(['new-order']);
  }

  goToSearchOrderPage() {
    this.router.navigate(['search-order']);
  }
}
