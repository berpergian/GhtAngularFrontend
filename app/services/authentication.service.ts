import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {USER} from '../mock/mock-allcustomer';
import { User } from '../class/customer';

var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23'),
  new User('admin','admin')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(User){
    var authenticatedUser = users.find(u => u.email === User.email);
    if (authenticatedUser && authenticatedUser.password === User.password){
      localStorage.setItem("user", authenticatedUser);
      this._router.navigate(['loginsuccess']);
      return true;
    }
    return false;

  }

   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  }
}
