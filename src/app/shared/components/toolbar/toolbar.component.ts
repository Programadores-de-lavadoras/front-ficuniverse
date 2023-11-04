import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SharedDataService} from "../../services/shared-data.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  value: any = '';

  constructor(private sharedData: SharedDataService) {
  }

onInputChange(){
    this.sharedData.changeInput(this.value);
}

  userLogged(): boolean{
    return true;
  }
}
