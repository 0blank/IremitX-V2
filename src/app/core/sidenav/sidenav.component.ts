import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../service/sidenav.service';
import { TabNavService } from '../service/tab-nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})

export class SidenavComponent implements OnInit {
  subMenuClass: string = '';
  activeIndex: number = -1;
  menuItems = [
    {
      name: "Dashboard",
      icon: "dashboard",
      link: "/"
    },
    {
      name: "Report",
      icon: "clipboard",
      link: "#",
      sub: [
        {
          name: "Link 1",
          link: "link1"
        },
        {
          name: "Link 2",
          link: "/"
        },
        {
          name: "Link 3",
          link: "/"
        },
        {
          name: "Link 4",
          link: "/"
        },
        {
          name: "Link 5",
          link: "/"
        },
        {
          name: "Link 6",
          link: "/"
        },
        {
          name: "Link 7",
          link: "/"
        }
      ]
    },
    {
      name: "Settings",
      icon: "cog",
      link: "/"
    }
  ]

  constructor(public sideBarService: SidenavService, private tabItemService: TabNavService) { }

  ngOnInit(): void {
  }

  changeStyle($event: Event, index: number) {
    this.activeIndex = index;
    this.subMenuClass = $event.type == 'mouseover' ? 'active' : '';
  }

  addToMenuList(item: any) {
    this.tabItemService.addToTabItems(item);
  }

}
