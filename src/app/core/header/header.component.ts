import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../service/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sideBarService: SidenavService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sideBarService.sidebarState = this.sideBarService.sidebarState === 'active' ? 'inactive' : 'active';
    console.log("fn call _____________",this.sideBarService.sidebarState)
}

}

// import { Component, OnInit } from '@angular/core';
// import { SidenavService } from '../service/sidenav.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {

//   sideBarState: string = '';

//   constructor(private sideBarService: SidenavService) { }

//   ngOnInit(): void {
//     this.sideBarService.sidebarState.subscribe(res => this.sideBarState = res);
//   }

//   toggleSidebar() {
//     this.sideBarService.toggleSidebarState(this.sideBarState === 'active' ? 'inactive' : 'active');
// }

// }

