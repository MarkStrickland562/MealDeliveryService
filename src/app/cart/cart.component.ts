import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  order = null;

  
  constructor() { }

  ngOnInit() {
  }

  orderSubmit() {
    this.order = true;
  }

}
