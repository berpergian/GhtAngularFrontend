import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
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

    /*return this.http.post('http://127.0.0.1:3000/Customer/',JSON.stringify({email,password})),{headers}
    .map(res => res.json())
    .map((res) =>{
      if(res.success){
        localStorage.setItem('auth_token', res.auth_token);
      }
      return res.success;
    });*/
    return this.http
      .get(
        'http://127.0.0.1:8000/Customer/?format=json'/*,
        JSON.stringify({ email: email, password: password }*),
        { headers }*/
      )
      /*.map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
        }
        console.log(res.json());
        return res.success;
      });*/
      .map((response: Response) => {
        let user = response.json();
        //console.log(user);
        let i:number;
        for(i=0;i<user.results.length;i++)
        {
          if(user.results[i].email === email && user.results[i].password === password){
            //console.log(user.results[i].email);
            localStorage.setItem('currentUser',JSON.stringify(user));
            return true;
          }
        }
        return false;
      })
  }

   checkCredentials(){
    if (localStorage.getItem('currentUser') === null){
        //this._router.navigate(['login']);
    }
  }
}
