import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  goToAddRestaurantPage() {
    this.router.navigate(['new-restaurant']);
  }

  goToAddUserPage() {
    this.router.navigate(['new-user']);
  }


}
