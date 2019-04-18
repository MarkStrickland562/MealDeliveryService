import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Restaurant } from '../models/restaurant.model';
import { MenuItem } from '../models/menuItem.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css'],
  providers: [RestaurantService]
})

export class NewRestaurantComponent implements OnInit {

  menuItemsForm: FormGroup;
  menuItems: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private restaurantService: RestaurantService)
    {}

  ngOnInit() {
    this.menuItemsForm = this.formBuilder.group({
      menuItems: this.formBuilder.array([ this.createMenuItem() ])
    });
  }

  createMenuItem(): FormGroup {
    return this.formBuilder.group({
      menuItemName: '',
      menuItemCost: '',
      preparationTime: '',
      menuSubItems: ''
    });
  }

  addMenuItem(): void {
    this.menuItems = this.menuItemsForm.get('menuItems') as FormArray;
    this.menuItems.push(this.createMenuItem());
  }
  goToShowRestaurantPage() {
      this.router.navigate(['restaurants']);
  }

  addRestaurant() {
    console.log("At addRestaurant()");
  }

  // addRestaurant(restaurantName: string, streetAddress: string, hours: string, website: string, cuisine: string) {
  //   if (restaurantName != "" && streetAddress != "" && hours != "" && website != "" && cuisine != "" && this.menuItems.length > 0) {
  //     let newRestaurant: Restaurant = new Restaurant(restaurantName, streetAddress, hours, website, cuisine, this.menuItems);
  //     this.restaurantService.addRestaurant(newRestaurant);
  //     this.goToShowRestaurantPage();
  //   } else {
  //     alert('All fields are required!');
  //   }
  // }
}
