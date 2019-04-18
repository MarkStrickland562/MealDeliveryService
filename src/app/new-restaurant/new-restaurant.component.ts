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

  addRestaurantForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private restaurantService: RestaurantService)
    {}

  ngOnInit() {
    this.addRestaurantForm = this.formBuilder.group({
      restaurantName: '',
      streetAddress: '',
      hours: '',
      website: '',
      cuisine: '',
      price: '',
      imageUrl: '',
      menuItems: this.formBuilder.array([])
    })
//    this.addRestaurantForm.valueChanges.subscribe(console.log);
  }

  get menuItemForms() {
    return this.addRestaurantForm.get('menuItems') as FormArray
  }

  addMenuItem() {
    const menuItem = this.formBuilder.group({
      menuItemName:[],
      menuItemCost: [],
      preparationTime: [],
      menuSubItems: [],
    })
    this.menuItemForms.push(menuItem);
  }

  deleteMenuItem(i) {
    this.menuItemForms.removeAt(i);
  }

  goToShowRestaurantPage() {
      this.router.navigate(['restaurants']);
  }

  addRestaurant() {
    const formValue = this.addRestaurantForm.value;
    if (formValue.restaurantName != "" && formValue.streetAddress != "" && formValue.hours != "" && formValue.website != "" && formValue.cuisine != "" && formValue.price != "" && formValue.imageUrl != "" && formValue.menuItems.length > 0) {
      let newRestaurant: Restaurant = new Restaurant(formValue.restaurantName, formValue.streetAddress, formValue.hours, formValue.website, formValue.cuisine, formValue.price, formValue.imageUrl, formValue.menuItems);
     this.restaurantService.addRestaurant(newRestaurant);
     location.reload();
//     this.goToShowRestaurantPage();
    } else {
      alert('All fields are required!');
    }
  }
}
