import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
  providers: [UserService]
})

export class SearchUserComponent implements OnInit {

  userList: FirebaseListObservable<any[]>;
  searchString: string;

  constructor(private router: Router, private userService: UserService){}

  ngOnInit() {
    this.userList = this.userService.getUsers();
  }

  goToEditUserPage(clickedUser) {
    this.router.navigate(['edit-user', clickedUser.$key]);
  }

  goToDeleteUserPage(clickedUser) {
    this.router.navigate(['delete-user', clickedUser.$key]);
  }
}
