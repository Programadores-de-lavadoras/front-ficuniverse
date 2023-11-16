import { Component } from '@angular/core';
import {VerifyLoginService} from "../../../shared/services/verify-login.service";
import {LoginService} from "../../../shared/services/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormErrorStateMatcher} from "../../../shared/matcher/form-error-state-matcher";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  matcher = new FormErrorStateMatcher();
  hidePassword: boolean = true;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private loginService: LoginService) {
  }
  doLogin(){
    this.loginService.login();
  }
  togglePasswordVisibility(event: MouseEvent) {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }

}
