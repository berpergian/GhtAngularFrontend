import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {USER} from '../mock/mock-allcustomer';
import { User } from '../class/customer';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http){}

  logout() {
    localStorage.removeItem('auth_token');
    //this._router.navigate(['login']);
  }

  login(email,password){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    /*var authenticatedUser = USER.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['loginsuccess']);
      return true;
    }
    return false;*/

    /*return this.http.post('<API>',JSON.stringify({email,password})),{headers}
    .map(res => res.json())
    .map((res) =>{
      if(res.success){
        localStorage.setItem('auth_token', res.auth_token);
      }
      return res.success;
    });*/
    return this.http
      .post(
        '<API>',
        JSON.stringify({ email, password }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
        }
        return res.success;
      });
  }

   checkCredentials(){
    if (localStorage.getItem("user") === null){
        //this._router.navigate(['login']);
    }
  }
}
