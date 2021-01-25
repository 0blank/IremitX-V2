import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [TableComponent]
})
export class SharedModule { }
