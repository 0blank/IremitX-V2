import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  currentPageSize = 10;
  columns: Array<string> = [];
  selected: Array<any> = [];
  loading: boolean = false;

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    this.columns = Object.keys(this.data[0]);
  }

  onExportAll() {
    console.log("ok")
  }

  onExportSelected() {
    console.log("OK")
  }

  onAdd() {
    console.log("OK---______---", this.selected)
  }

  onDelete() {
    console.log("OK")
  }

  onEdit() {
    console.log("OK")
  }

}
