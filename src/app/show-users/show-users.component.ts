import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css'],
  providers: [UserService]
})

export class ShowUsersComponent implements OnInit {

  userList: FirebaseListObservable<any[]>;
  selectedUser = null;
  selectedUserToDelete = null;

  constructor(private router: Router, private userService: UserService){}

  ngOnInit() {
    this.userList = this.userService.getUsers();
  }

  editUser(clickedUser: User) {
    this.selectedUser = clickedUser;
  }

  finishedEditing() {
    this.selectedUser = null;
  }

  goToEditUserPage(clickedUser) {
    this.router.navigate(['edit-user', clickedUser.$key]);
  }

  goToDeleteUserPage(clickedUser) {
    this.router.navigate(['delete-user', clickedUser.$key]);
  }

  goToAddUserPage() {
    this.router.navigate(['new-user']);
  }

  goToSearchUserPage() {
    this.router.navigate(['search-user']);
  }
}
