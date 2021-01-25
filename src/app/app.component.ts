import { Component } from '@angular/core';
import { SidenavService } from './core/service/sidenav.service';
import { TableService } from './shared/service/table/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = {};

  constructor(public sideBarService: SidenavService, private tableService: TableService) {
    this.tableService.getTableList(1).subscribe(res => this.users = res)
  }


}
