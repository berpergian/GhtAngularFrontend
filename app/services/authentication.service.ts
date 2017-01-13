import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {USER} from '../mock/mock-allcustomer';
import { User } from '../class/customer';

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user){
    var authenticatedUser = USER.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
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
