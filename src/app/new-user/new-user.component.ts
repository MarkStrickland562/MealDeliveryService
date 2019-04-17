import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [UserService]
})

export class NewUserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService) {}

  ngOnInit() {
  }

  goToShowUserPage() {
      this.router.navigate(['users']);
  }

  addUser(firstName: string, lastName: string, emailAddress: string , deliveryAddress: string, phoneNumber: string, password: string) {
    if (firstName != "" && lastName != "" && emailAddress != "" && deliveryAddress != "" && phoneNumber != "" && password != "") {
      let newUser: User = new User(firstName, lastName, emailAddress, deliveryAddress, phoneNumber, password);
      this.userService.addUser(newUser);
      this.goToShowUserPage();
    } else {
      alert('All fields are required!');
    }
  }
}
