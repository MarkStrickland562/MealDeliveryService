import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
  providers: [UserService]
})

export class DeleteUserComponent implements OnInit {
  userId: string;
  userToDelete;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
    });
    this.userService.getUserById(this.userId).subscribe(dataLastEmittedFromObserver => {
      this.userToDelete = dataLastEmittedFromObserver;
    })
  }

  goToShowUserPage(){
    this.router.navigate(['users']);
  }

  onSelect(user: any) {
    if (user.target.value === "true") {
      this.userService.deleteUser(this.userToDelete);
    }
    this.goToShowUserPage();
  }
}
