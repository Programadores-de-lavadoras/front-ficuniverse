import {Component, OnInit} from '@angular/core';
import {VerifyLoginService} from "../../../shared/services/verify-login.service";
import {AuthService} from "../../../shared/services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormErrorStateMatcher} from "../../../shared/matcher/form-error-state-matcher";
import {usuariosService} from "../../../users/services/usuarios.service";
import {Fanfic} from "../../../ficuniverse/model/fanfic.entity";
import {User} from "../../../users/model/user.entity";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginErrorComponent} from "../../components/login-error/login-error.component";
import {LoginRequest} from "../../../shared/model/login-request.entity";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  matcher = new FormErrorStateMatcher();
  hidePassword: boolean = true;
  users: Array<User> = [];
  user!: User;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required])

  constructor(private loginService: AuthService, private userService: usuariosService, private _snackBar: MatSnackBar, private cookieService: CookieService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getListausuario().subscribe((response: any) =>{
      this.users = response;
    })
  }

  doLogin(){
    let loginRequest: LoginRequest;
    loginRequest = new LoginRequest(this.emailFormControl.value!, this.passwordFormControl.value!);
    this.loginService.login(loginRequest).subscribe((data) =>{
      this.cookieService.set('token', data.access_token);
      if(this.loginService.loginCheck()){
        this.router.navigate(['/']);
      }
      else this.toggleMessageError();
    })
  }

  togglePasswordVisibility(event: MouseEvent) {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }
  toggleMessageError(){
    this._snackBar.openFromComponent(LoginErrorComponent, {
      duration: 5000,
    });

  }



}
