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

  addUser(userKey: string, name: string, emailAddress: string , phoneNumber: string, streetAddress: string) {
    if (userKey != "" && name != "" && emailAddress != "" && phoneNumber != "" && streetAddress != "") {
      let newUser: User = new User(userKey, name, emailAddress, phoneNumber, streetAddress);
      this.userService.addUser(newUser);
      this.goToShowUserPage();
    } else {
      alert('All fields are required!');
    }
  }
}
