import {Component, Input} from '@angular/core';
import {Fanfic} from "../../model/fanfic.entity";

@Component({
  selector: 'app-fic-search-card',
  templateUrl: './fic-search-card.component.html',
  styleUrls: ['./fic-search-card.component.scss']
})
export class FicSearchCardComponent {
  @Input() fanfic!: Fanfic;

  clicked(){
    console.log("u clicked me 7u7")
  }
}
