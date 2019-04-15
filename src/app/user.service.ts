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

  getUserById(userId: string) {
    return this.database.object('/users/' + userId);
  }

  addUser(newUser: User) {
    this.userList.push(newUser);
  }

  updateUser(localUpdatedUser){
    var userInFirebase = this.getUserById(localUpdatedUser.$key);
    userInFirebase.update({first_name: localUpdatedUser.firstName,
                           last_name: localUpdatedUser.lastName,
                           email_address: localUpdatedUser.emailAddress,
                           delivery_address: localUpdatedUser.deliveryAddress,
                           phone_number: localUpdatedUser.phoneNumber});
  }

  deleteUser(userToBeDeleted){
    var userToDeleteInFirebase = this.getUserById(userToBeDeleted.$key);
    userToDeleteInFirebase.remove();
  }
}
