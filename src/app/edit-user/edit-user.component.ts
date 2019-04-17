import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService]
})

export class EditUserComponent implements OnInit {

  userKey: string;
  userToUpdate;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userKey = urlParameters['id'];
    });
console.log(this.userKey);
    this.userService.getUserByKey(this.userKey).subscribe(dataLastEmittedFromObserver => {
      this.userToUpdate = dataLastEmittedFromObserver;
    })
  }

  goToShowUserPage() {
      this.router.navigate(['users']);
  }

  updateUser(userToUpdate) {
    if (userToUpdate.firstName != "" && userToUpdate.lastName != "" && userToUpdate.emailAddress != "" &&userToUpdate.deliveryAddress != "" && userToUpdate.phoneNumber != "" && userToUpdate.password != "") {
      this.userService.updateUser(userToUpdate);
      this.goToShowUserPage();
    } else {
      alert('All fields are required!');
    }
  }
}
