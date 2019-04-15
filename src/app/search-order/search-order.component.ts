import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Order } from '../models/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css'],
  providers: [OrderService]
})

export class SearchOrderComponent implements OnInit {

  orderList: FirebaseListObservable<any[]>;
  searchString: string;

  constructor(private router: Router, private orderService: OrderService){}

  ngOnInit() {
    this.orderList = this.orderService.getOrders();
  }

  goToEditOrderPage(clickedOrder) {
    this.router.navigate(['edit-order', clickedOrder.$key]);
  }

  goToDeleteOrderPage(clickedOrder) {
    this.router.navigate(['delete-order', clickedOrder.$key]);
  }
}
