import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {BaseService} from "./base.service";
import {User} from "../../users/model/user.entity";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs";
import {LoginRequest} from "../model/login-request.entity";
import {LoginResponse} from "../model/login-response.entity";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<LoginResponse>{
  private loged: boolean = false;
  constructor(private router: Router, http: HttpClient, private httpClient: HttpClient, private cookieService: CookieService) {
    super(http);
    this.resourceEndpoint = '/auth/login'
  }
  isAuthenticated(): boolean {
    return this.loged;
  }
  login(loginRequest: LoginRequest ) {

    return this.httpClient.post<LoginResponse>(this.resourcePath(),loginRequest)
      .pipe(retry(2),catchError(this.handleError));
  }
  loginCheck(){
    return this.cookieService.check('token');
  }

  logout(){
    this.cookieService.delete('token');
    this.router.navigate(["login"]);
  }

}
