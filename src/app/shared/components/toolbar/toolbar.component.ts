import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SharedDataService} from "../../services/shared-data.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  value: any = '';
  @Input() isLoged: boolean = true;

  constructor(private sharedData: SharedDataService, private loginService: LoginService) {
  }

onInputChange(){
    this.sharedData.changeInput(this.value);
}

  userLogged(): boolean{
    return this.loginService.isAuthenticated();
  }

  logOut(){
    this.loginService.logout();
  }

}
