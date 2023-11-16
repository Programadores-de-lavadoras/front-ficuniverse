import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loged: boolean = false;
  constructor(private router: Router) { }
  isAuthenticated(): boolean {
    return this.loged;
  }
  login(){
    this.loged = true;
    this.router.navigate(['/']);
  }
  logout(){
    this.loged = false;
    this.router.navigate(["login"]);
  }
  //login(email: string, password: string): void {
  //  email = email.toLowerCase();
  //  this.usersService.getUserByEmail(email)
  //    .subscribe(response => {
  //      if (response === null) return;
  //      this.user = response;
  //      this.notificationService.getNotifications().subscribe((response: any) => {
  //        this.notifications = response.filter((notification: any)=> notification.userId === this.user!.id);
  //        this.router.navigate(['/']);
  //      });
  //    })
  //}
}
