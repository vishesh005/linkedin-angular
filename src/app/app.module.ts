import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { BarIconComponent } from './app-bar/bar-icon/bar-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    BarIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
