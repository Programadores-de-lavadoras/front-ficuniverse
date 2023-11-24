import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SharedDataService} from "../../services/shared-data.service";
import {AuthService} from "../../services/auth.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  value: any = '';
  @Input() isLoged: boolean = true;

  constructor(private sharedData: SharedDataService, private cookieService: CookieService, private loginService: AuthService) {
  }

onInputChange(){
    this.sharedData.changeInput(this.value);
}

  userLogged(): boolean{
    return this.cookieService.check('token');
  }

  logOut(){
    this.loginService.logout();
  }

}
