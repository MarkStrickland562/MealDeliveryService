import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  userList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.userList = database.list('users');
  }

  getUsers() {
    return this.userList;
  }

  getUserByKey(userId: string) {
    return this.database.object('/users/' + userId);
  }

  addUser(newUser: User) {
    this.userList.push(newUser);
  }

  updateUser(localUpdatedUser){
    var userInFirebase = this.getUserByKey(localUpdatedUser.$key);
    userInFirebase.update({firstName: localUpdatedUser.firstName,
                           lastName: localUpdatedUser.lastName,
                           emailAddress: localUpdatedUser.emailAddress,
                           deliveryAddress: localUpdatedUser.deliveryAddress,
                           phoneNumber: localUpdatedUser.phoneNumber});
  }

  deleteUser(userToBeDeleted){
    var userToDeleteInFirebase = this.getUserByKey(userToBeDeleted.$key);
    userToDeleteInFirebase.remove();
  }

  deleteAllUsers() {
    this.userList.remove()
  }
}
