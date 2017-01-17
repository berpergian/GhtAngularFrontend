import {Component, ElementRef} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {USER} from '../mock/mock-allcustomer';
import {User} from '../class/customer';

@Component({
    selector: 'login-form',
    templateUrl: 'app/templates/login.component.html',
    styleUrls: [ 'app/css/login.component.css' ]
})
/*
  https://medium.com/@blacksonic86/authentication-in-angular-2-958052c64492#.w1fnszjq6
  Untuk bagian login
*/
export class LoginComponent {
  judul= 'Login to Your Account';

  public user = new User('','');
  public errorMsg = '';

  constructor(
      private _router: Router,private _service:AuthenticationService) {}

  onSumbitLgn() {
    this._service.login(this.user.email,this.user.password).subscribe((result)=>{
      if(result){
        this._router.navigate(['loginsuccess']);
      }
      else{
        this.errorMsg = 'Failed to login';
      }
    });
  }
}
