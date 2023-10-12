import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fanfic-probando';
  options = [
    { path: '/creations', title: 'Creations'},
    //{ path: '/write-fanfic', title: 'Write Fanfic'},
    { path: '/authors', title: 'Authors'},
    { path: '/ficuniverse/fanfic', title: 'Fanfics'}
  ]
}
