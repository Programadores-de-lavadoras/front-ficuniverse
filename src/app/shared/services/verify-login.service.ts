import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class VerifyLoginService implements CanActivate{
  private loginState = new BehaviorSubject<boolean>(false);
  currentLoginState = this.loginState.asObservable();

  constructor(private router: Router, private loginService: LoginService) { }
  changeLoginState(loginState: boolean){
    this.loginState.next(loginState);
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.loginState.value);
    if(this.loginService.isAuthenticated()){
      return true;}
    this.router.navigate(['login']);
    return false;
  }
}
