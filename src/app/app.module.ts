import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// import { ReversePipe } from './Shared/reverse.pipe';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    // ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule,
    BrowserAnimationsModule,
    PagesModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
