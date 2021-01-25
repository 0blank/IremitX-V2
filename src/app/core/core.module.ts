import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ClarityModule } from '@clr/angular';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { RouterModule } from '@angular/router';
import { ReversePipe } from '../shared/pipe/reverse/reverse.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent, TabNavComponent, ReversePipe],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, SidenavComponent, TabNavComponent],
})
export class CoreModule { }
