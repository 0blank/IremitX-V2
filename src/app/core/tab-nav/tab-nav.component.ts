import { Component, OnInit } from '@angular/core';
import { TabNavService } from '../service/tab-nav.service';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss']
})
export class TabNavComponent implements OnInit {
  tabItems: Array<any> = [];
  isFloatingOpen: boolean = false;

  constructor(private tabItemService: TabNavService) { }

  ngOnInit(): void {
    this.tabItemService.tabItems.subscribe(res => this.tabItems = res);
  }

  removeFromTabItems(item: any) {
    this.tabItemService.removeFromTabItems(item)
  }

  toggleFloatingOpen() {
    this.isFloatingOpen = !this.isFloatingOpen;
  }

}
