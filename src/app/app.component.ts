import { Component } from '@angular/core';
import { SidenavService } from './core/service/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    {
      id: 1,
      name: "Suman"
    },
    {
      id: 2,
      name: "Mahtashi"
    },
    {
      id: 3,
      name: "Gauchan"
    },
    {
      id: 4,
      name: "Thakali"
    }
  ]

  constructor(public sideBarService: SidenavService) { }


}
