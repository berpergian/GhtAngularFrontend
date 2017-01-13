import {Component, ElementRef} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {USER} from '../mock/mock-allcustomer';
import {User} from '../class/customer';

@Component({
    selector: 'login-form',
    templateUrl: 'app/templates/login.component.html'
})

export class LoginComponent {
  judul: 'Login to Your Account';

  public user = new User('','');
  public errorMsg = '';

  constructor(
      private _service:AuthenticationService) {}

  login() {
      if(!this._service.login(this.user)){
        this.errorMsg = 'Failed to login';
      }
  }
}
