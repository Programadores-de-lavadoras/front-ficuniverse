import { Component } from '@angular/core';
import {LoginService} from "../../../shared/services/login.service";
import {FormErrorStateMatcher} from "../../../shared/matcher/form-error-state-matcher";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  matcher = new FormErrorStateMatcher();
  hidePassword: boolean = true;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private loginService: LoginService) {
  }
  doRegister(){
    this.loginService.login();
  }
  togglePasswordVisibility(event: MouseEvent) {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }
}
